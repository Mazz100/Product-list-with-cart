import { useContext } from "react";
import { cartCountContext } from "./App";
import emptyCart from "./icons/illustration-empty-cart.svg";

const ProductCart = ({}) => {
  const [cartCount, setCartCount] = useContext(cartCountContext);

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-8 shadow-sm">
      <h2 className="self-start text-2xl font-bold text-primary-color">
        Your Cart {`(${cartCount})`}
      </h2>

      {!cartCount && (
        <div className="flex flex-col items-center">
          <img src={emptyCart} alt="" />

          <p className="font-semibold text-text-color-medium">
            Your added items will appear here
          </p>
        </div>
      )}

      {cartCount > 0 && <p>Example order</p>}
    </div>
  );
};

export default ProductCart;
