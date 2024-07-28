import { useContext } from "react";

import AddToCartButton from "./AddToCartButton";
import NumberInput from "./NumberInput";

import { cartContext } from "../App";

const ProductList = ({ product, onAddToCart }) => {
  const [cartItems, setCartItem] = useContext(cartContext);

  return (
    <li className="my-4 flex w-full flex-col items-center Desktop:my-0">
      <picture className="overflow-hidden rounded-lg">
        <source srcSet={product.image.desktop} media="(min-width:80rem)" />
        <source srcSet={product.image.tablet} media="(min-width: 48rem)" />
        <img src={product.image.mobile} alt={product.name} />
      </picture>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const quantity = Number(formData.get("quantity"));
          onAddToCart(quantity);
          console.log(quantity);
        }}
      >
        <AddToCartButton />
      </form>

      <p className="self-start text-sm opacity-70">{product.category}</p>
      <p className="self-start font-semibold">{product.name}</p>
      <span className="self-start text-sm font-semibold text-primary-color">
        ${product.price.toFixed(2)}
      </span>
    </li>
  );
};

export default ProductList;
