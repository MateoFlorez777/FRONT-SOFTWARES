import React from "react";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  sumCartItemMrpPrice,
  sumCartItemSellingPrice,
} from "../../../util/cartCalculator";
import { useAppSelector } from "../../../Redux Toolkit/Store";
import { handleCheckout } from "../../../util/handleCheckout";

interface PricingCardProps {
  showBuyButton?: boolean;
  SubmitButton?: React.ReactNode;
}

const PricingCard: React.FC<PricingCardProps> = ({ showBuyButton, SubmitButton }) => {
  const navigate = useNavigate();
  const { cart } = useAppSelector((store) => store);

  const handlePayNow = () => {
    if (cart.cart?.totalSellingPrice) {
      handleCheckout(cart.cart.totalSellingPrice);
    } else {
      alert("El carrito está vacío.");
    }
  };

  return (
    <div>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>$ {cart.cart?.totalMrpPrice}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Descuento</span>
          <span>
            $
            {sumCartItemMrpPrice(cart.cart?.cartItems || []) -
              sumCartItemSellingPrice(cart.cart?.cartItems || [])}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>Envío</span>
          <span>$ 10000</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Tarifa de plataforma</span>
          <span className="text-teal-600">Gratis</span>
        </div>
      </div>
      <Divider />
      <div className="font-medium px-5 py-2 flex justify-between items-center">
        <span>Total</span>
        <span>$ {cart.cart?.totalSellingPrice}</span>
      </div>

      {showBuyButton && (
        <div className="px-5 mt-4">{SubmitButton}</div>
      )}

      <div className="px-5 mt-2">
        <Button onClick={handlePayNow} variant="contained" color="primary" fullWidth>
          Pagar con PayPal
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
