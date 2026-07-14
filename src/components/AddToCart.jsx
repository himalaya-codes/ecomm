import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;
  const [selectedColor, setSelectedColor] = useState(colors?.[0] || "");
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <>
      <div className="colors_wrap">
        Colors:
        {
          <div className="d-flex gap-2">
            {colors?.map((curColor, index) => {
              return (
                <button
                  key={index}
                  style={{ backgroundColor: curColor }}
                  className={`color-btn ${selectedColor === curColor ? "active" : ""}`}
                  title={curColor}
                  onClick={() => setSelectedColor(curColor)}
                >
                  {selectedColor === curColor && (
                    <FaCheck color="white" size={10} />
                  )}
                </button>
              );
            })}
          </div>
        }
      </div>

      {/* add to cart */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to={`/cart`} className="theme_btn">
        Add to Cart
      </NavLink>
    </>
  );
};

export default AddToCart;
