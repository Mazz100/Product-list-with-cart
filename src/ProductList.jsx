import {} from "react";

const ProductList = ({ displayProduct }) => {
  return (
    <div className="col-end-2 my-4 Desktop:col-start-1">
      <ul className="Tablet:grid Tablet:grid-cols-2 Tablet:gap-6 Desktop:grid-cols-3 Desktop:gap-6">
        {displayProduct}
      </ul>
    </div>
  );
};

export default ProductList;
