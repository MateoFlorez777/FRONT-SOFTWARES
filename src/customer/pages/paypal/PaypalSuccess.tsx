import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../Config/Api";

const PaypalSuccess = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const createOrder = async () => {
      const token = localStorage.getItem("jwt");
      try {
        const res = await axios.post(`https://perfect-passion-production.up.railway.app/api/orders/create`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("Orden creada:", res.data);
        // Mostrar modal después de crear la orden exitosamente
        setShowModal(true);
      } catch (err) {
        console.error("Error creando la orden:", err);
      }
    };

    createOrder();
  }, []);

  const handleGoToOrders = () => {
    navigate("/account/orders");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl">Procesando tu pedido...</p>

      {/* Modal de éxito */}
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
