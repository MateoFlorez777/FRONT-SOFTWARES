import React from "react";

interface OrderItem {
  productId: number;
  productName: string;
  productImage?: string; // Por si en el futuro lo agregas
  size: string;
  price: number;
  quantity: number;
}

interface Props {
  item: OrderItem;
}

const OrderItemCard: React.FC<Props> = ({ item }) => {
  return (
    <div className="flex items-center justify-between border rounded-md p-3 mb-2 bg-gray-50 shadow-sm">
      <div className="flex items-center gap-4">
        {/* Si tienes imágenes, usa item.productImage */}
        <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-xs">
          {item.productImage ? (
            <img
              src={item.productImage}
              alt={item.productName}
              className="object-cover w-full h-full rounded"
            />
          ) : (
            "Sin imagen"
          )}
        </div>
        <div>
          <p className="font-medium">{item.productName}</p>
          <p className="text-sm text-gray-600">Talla: {item.size}</p>
          <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-700">
        ${item.price * item.quantity}
      </div>
    </div>
  );
};

export default OrderItemCard;

