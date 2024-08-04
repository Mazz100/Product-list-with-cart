import React from "react";

const ProductCategory = ({ category, onCategoryFilter }) => {
  return (
    <label className="relative inline-flex cursor-pointer items-center text-xl transition-colors duration-200 ease-in hover:text-primary-color">
      <input
        className={[
          "mx-2 h-6 w-6 cursor-pointer appearance-none transition-colors",
          "before:absolute before:h-6 before:w-6 before:border-2 before:border-border-color-medium before:bg-bg-color-2",
          "origin-center after:absolute after:h-6 after:w-6 after:scale-0 after:transition-all after:duration-200 after:ease-in",
          "checked:after: checked:after:scale-100 checked:after:bg-primary-color",
        ].join(" ")}
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
