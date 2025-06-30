import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../Config/Api";

const PaypalSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const completePaymentAndCreateOrder = async () => {
      const queryParams = new URLSearchParams(location.search);
      const paymentId = queryParams.get("paymentId");
      const payerId = queryParams.get("PayerID");
      const token = localStorage.getItem("jwt");

      if (!paymentId || !payerId || !token) {
        console.error("Faltan parámetros o token");
        return;
      }

      try {
        // Paso 1: Ejecutar el pago
        await axios.get(`${API_URL}/api/paypal/success`, {
          params: { paymentId, PayerID: payerId },
        });

        // Paso 2: Crear la orden en backend
        await axios.post(`${API_URL}/api/orders/create`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setShowModal(true);
      } catch (error) {
        console.error("Error procesando el pago:", error);
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
