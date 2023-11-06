import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Order confirmed!</div>
      <button
        onClick={() => {
          // !pass number/indicates change in history stack
          navigate(-1);
        }}
      >
        Go back
      </button>
    </>
  );
};

export default OrderSummary;
