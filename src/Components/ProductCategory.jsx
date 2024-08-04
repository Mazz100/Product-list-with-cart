import React from "react";

const ProductCategory = ({ category, onCategoryFilter }) => {
  return (
    <label className="relative inline-flex cursor-pointer items-center text-xl transition-colors duration-200 ease-in hover:text-primary-color">
      <input
        className={[
          "relative mx-2 h-6 w-6 cursor-pointer appearance-none focus-visible:outline-primary-color",
          "before:absolute before:h-6 before:w-6 before:rounded-sm before:border-2 before:border-border-color-medium before:bg-bg-color-2 before:transition-colors before:duration-200 checked:before:border-white",
          "after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:origin-center after:scale-[0.9] after:transition-all after:duration-100 after:ease-in",
          "checked:after:bg-checked-mark checked:after:scale-100 checked:after:rounded-sm checked:after:bg-primary-color checked:after:bg-center checked:after:bg-no-repeat",
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
