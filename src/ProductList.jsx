import {} from "react";
import cartIcon from "./icons/icon-add-to-cart.svg";

const ProductList = ({ product, onAddToCart }) => {
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
        <button
          type="submit"
          className="inline-flex -translate-y-1/2 gap-2 rounded-full border-[1px] border-border-color-light bg-white p-2 px-4 font-semibold transition-colors duration-200 hover:border-primary-color hover:text-primary-color"
        >
          <img src={cartIcon} alt="" />
          Add to Cart
        </button>
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
