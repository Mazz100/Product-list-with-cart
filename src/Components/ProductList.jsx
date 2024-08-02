import {} from "react";
import cartIcon from "../icons/icon-add-to-cart.svg";

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
      <picture
        className="overflow-hidden rounded-lg transition-colors duration-500 ease-out"
        style={
          product.quantity > 0
            ? {
                border: "2px solid #c73a0f",
              }
            : {
                border: "2px solid white",
              }
        }
      >
        <source srcSet={product.image.desktop} media="(min-width:80rem)" />
        <source srcSet={product.image.tablet} media="(min-width: 48rem)" />
        <img src={product.image.mobile} alt={product.name} />
      </picture>

      {product.quantity === 0 ? (
        <button
          onClick={onAddToCart}
          aria-label={product.name}
          className="inline-flex -translate-y-1/2 gap-2 rounded-full border-[1px] border-border-color-light bg-white p-2 px-4 font-semibold transition-colors duration-150 ease-in hover:border-primary-color hover:text-primary-color focus-visible:outline-8 focus-visible:outline-offset-8 focus-visible:outline-primary-color"
        >
          <img src={cartIcon} alt="" aria-hidden={true} />
          Add to Cart
        </button>
      ) : (
        <div className="flex -translate-y-1/2 items-center justify-center gap-6 rounded-full bg-primary-color p-3 transition-colors duration-500">
          <button
            onClick={decrement}
            aria-label="decrement quantity"
            className="group aspect-auto rounded-full border-2 border-border-color-veryLight p-1 transition-colors duration-150 hover:bg-white focus-visible:outline-[1px] focus-visible:outline-offset-[5px] focus-visible:outline-white"
          >
            <svg
              className="aspect-square"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 2"
              aria-hidden={true}
            >
              <path
                className="group-hover:fill-primary-color"
                fill="#fff"
                d="M0 .375h10v1.25H0V.375Z"
              />
            </svg>
          </button>
          <input
            className="no-arrows block h-full max-w-16 rounded-md bg-transparent text-center text-white transition-colors duration-150 focus-visible:outline-[1px] focus-visible:outline-white"
            type="number"
            name="product quantity"
            value={product.quantity}
            onChange={(e) => {
              const newQuantity = Number(e.target.value);
              onUpdateQuantity(product.quantity >= 999 ? 1 : newQuantity);
              console.log(newQuantity);
            }}
            autoFocus
            aria-label={`${product.name} with ${product.quantity} quantity`}
          />

          <button
            onClick={increment}
            aria-label="increment quantity"
            className="group aspect-auto rounded-full border-2 border-border-color-veryLight p-1 transition-colors duration-150 hover:bg-white focus-visible:outline-[1px] focus-visible:outline-offset-[5px] focus-visible:outline-white"
          >
            <svg
              className="aspect-square w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
              aria-hidden={true}
            >
              <path
                className="group-hover:fill-primary-color"
                fill="#fff"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
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
