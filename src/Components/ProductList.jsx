import {} from "react";
import cartIcon from "../icons/icon-add-to-cart.svg";
import incrementIcon from "../icons/icon-increment-quantity.svg";
import decrementIcon from "../icons/icon-decrement-quantity.svg";

const ProductList = ({ product, onUpdateQuantity, onAddToCart }) => {
  //Increment and decrement product quantity
  function increment() {
    const newQuantity = product.quantity + 1;
    onUpdateQuantity(newQuantity);
  }

  function decrement() {
    const newQuantity = product.quantity - 1;
    onUpdateQuantity(newQuantity);
  }

  return (
    <li className="my-4 flex w-full flex-col items-center Desktop:my-0">
      <picture className="overflow-hidden rounded-lg">
        <source srcSet={product.image.desktop} media="(min-width:80rem)" />
        <source srcSet={product.image.tablet} media="(min-width: 48rem)" />
        <img src={product.image.mobile} alt={product.name} />
      </picture>

      {product.quantity === 0 ? (
        <button
          onClick={onAddToCart}
          className="inline-flex -translate-y-1/2 gap-2 rounded-full border-[1px] border-border-color-light bg-white p-2 px-4 font-semibold transition-colors duration-200 hover:border-primary-color hover:text-primary-color"
        >
          <img src={cartIcon} alt="" />
          Add to Cart
        </button>
      ) : (
        <div className="flex -translate-y-1/2 items-center justify-evenly rounded-full bg-primary-color p-2 font-semibold text-text-color-light transition-colors duration-200 hover:text-primary-color">
          <button onClick={increment} className="">
            <img className="w-full" src={incrementIcon} alt="" />
          </button>

          <input
            className="max-w-[50%]"
            type="number"
            value={product.quantity}
            onChange={(e) => {
              const newQuantity = Number(e.target.value);
              onUpdateQuantity(newQuantity);
            }}
            readOnly
          />
          <button onClick={decrement} className="">
            <img className="w-full" src={decrementIcon} alt="" />
          </button>
        </div>
      )}

      <p className="self-start text-sm opacity-70">{product.category}</p>
      <p className="self-start font-semibold">{product.name}</p>
      <span className="self-start text-sm font-semibold text-primary-color">
        ${product.price.toFixed(2)}
      </span>
    </li>
  );
};

export default ProductList;
