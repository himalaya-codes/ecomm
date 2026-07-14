import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ProductColor = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(colors?.[0] || "");
  return (
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
            {selectedColor === curColor && <FaCheck color="white" size={10} />}
          </button>
        );
      })}
    </div>
  );
};

export default ProductColor;
