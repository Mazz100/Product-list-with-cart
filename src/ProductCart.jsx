import {} from "react";
import emptyCart from "./icons/illustration-empty-cart.svg";

const ProductCart = ({ items, cartCount, onUpdateCartItem }) => {
  return (
    <>
      {!cartCount ? (
        <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="self-start text-2xl font-bold text-primary-color">
            Your Cart (0)
          </h2>

          <img src={emptyCart} alt="" />

          <p className="font-semibold text-text-color-medium">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="self-start text-2xl font-bold text-primary-color">
            Your Cart ({cartCount})
          </h2>

          {items.map((item, index) => (
            <div key={index}>
              <p className="text-sm font-semibold">{item}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductCart;
