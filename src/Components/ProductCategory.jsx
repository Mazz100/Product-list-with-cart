import React from "react";

const ProductCategory = ({ category }) => {
  return (
    <label className="text-xl">
      <input
        className="mx-2"
        type="checkbox"
        name="category"
        value={category}
      />
      {category}
    </label>
  );
};

export default ProductCategory;
