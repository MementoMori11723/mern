import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <Link to="/cart" className="cart">
        <span>Cart </span>
      </Link>
    </div>
  );
};

export default Cart;
