import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      <button
        onClick={() => {
          navigate("/order-summary");

          // !replace/remove /order-summary from history stack/go back to browser home
          // navigate("/order-summary", { replace: true });
        }}
      >
        Place Order
      </button>
    </>
  );
};

export default Home;
