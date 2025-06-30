import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaypalCancel = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleBackToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl">Cancelando el pedido...</p>

      {/* Modal de cancelación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4 text-center text-red-700">
              Pago cancelado
            </h2>
            <p className="text-gray-700 text-center mb-6">
              No se completó la compra.
            </p>
            <button
              onClick={handleBackToCart}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-200"
            >
              Volver al carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaypalCancel;
