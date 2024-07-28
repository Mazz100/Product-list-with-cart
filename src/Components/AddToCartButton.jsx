import React from "react";
import cartIcon from "../icons/icon-add-to-cart.svg";

const AddToCartButton = () => {
  return (
    <button
      type="submit"
      className="inline-flex -translate-y-1/2 gap-2 rounded-full border-[1px] border-border-color-light bg-white p-2 px-4 font-semibold transition-colors duration-200 hover:border-primary-color hover:text-primary-color"
    >
      <img src={cartIcon} alt="" />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
