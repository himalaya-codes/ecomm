import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="toggle_amount d-flex align-items-center gap-2 my-3">
      <button onClick={setDecrease}>
        <FaMinus />
      </button>
      <span>{amount}</span>
      <button onClick={setIncrease}>
        <FaPlus />
      </button>
    </div>
  );
};

export default CartAmountToggle;
