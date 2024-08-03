import React from "react";

const ProductCategory = ({ category, onCategoryFilter }) => {
  return (
    <label className="relative cursor-pointer text-xl transition-colors duration-200 ease-in hover:text-primary-color">
      <input
        className="mx-2"
        type="checkbox"
        name="category"
        value={category}
        onChange={() => {
          onCategoryFilter(category);
        }}
      />
      {category}
    </label>
  );
};

export default ProductCategory;
