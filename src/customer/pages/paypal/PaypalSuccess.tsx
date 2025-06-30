import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../Config/Api";

const PaypalSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const completePaymentAndCreateOrder = async () => {
      const jwt = localStorage.getItem("jwt");
      if (!jwt) {
        alert("Debes iniciar sesión para completar el pago.");
        return;
      }

      // 1. Extraer los parámetros de la URL
      const queryParams = new URLSearchParams(location.search);
      const paymentId = queryParams.get("paymentId");
      const tokenPaypal = queryParams.get("token");
      const payerId = queryParams.get("PayerID");

      if (!paymentId || !tokenPaypal || !payerId) {
        alert("Faltan parámetros de PayPal en la URL.");
        return;
      }

      try {
        // 2. Confirmar el pago con PayPal
        await axios.post(
          `${API_URL}/api/paypal/complete-payment?paymentId=${paymentId}&token=${tokenPaypal}&PayerID=${payerId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          }
        );

        // 3. Crear la orden
        const res = await axios.post(`${API_URL}/api/orders/create`, null, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        console.log("Orden creada:", res.data);
        setShowModal(true);
      } catch (error) {
        console.error("Error durante el proceso de pago:", error);
        alert("Ocurrió un error al confirmar el pago o crear la orden.");
      }
    };

    completePaymentAndCreateOrder();
  }, [location.search]);

  const handleGoToOrders = () => {
    navigate("/account/orders");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl">Procesando tu pedido...</p>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4 text-center text-green-700">
              ¡Pago realizado con éxito!
            </h2>
            <p className="text-gray-700 text-center mb-6">
              Gracias por tu compra.
            </p>
            <button
              onClick={handleGoToOrders}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-200"
            >
              Ver mis pedidos
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaypalSuccess;

