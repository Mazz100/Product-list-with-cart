import { createContext, useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import ProductCart from "./ProductCart";
import products from "../data.json";
import cartIcon from "./icons/icon-add-to-cart.svg";

export const cartCountContext = createContext();

function App() {
  const [cartCount, setCartCount] = useState(0);

  function addItemToCart(item) {
    setCartCount((c) => c + 1);
    item = Object.values(item);
    console.log(item);
  }

  const [displayProduct, setDisplayProduct] = useState(
    products.map((product, id) => (
      <li
        key={id}
        className="my-4 flex w-full flex-col items-center Desktop:my-0"
      >
        <picture className="overflow-hidden rounded-lg">
          <source srcSet={product.image.desktop} media="(min-width:80rem)" />
          <source srcSet={product.image.tablet} media="(min-width: 48rem)" />
          <img src={product.image.mobile} alt={product.name} />
        </picture>

        <button
          type="button"
          onClick={() => addItemToCart(product)}
          className="inline-flex -translate-y-1/2 gap-2 rounded-full border-[1px] border-border-color-light bg-white p-2 px-4 font-semibold transition-colors duration-200 hover:border-primary-color hover:text-primary-color"
        >
          <img src={cartIcon} alt="" />
          Add to Cart
        </button>

        <p className="self-start text-sm opacity-70">{product.category}</p>
        <p className="self-start font-semibold">{product.name}</p>
        <span className="self-start text-sm font-semibold text-primary-color">
          ${product.price.toFixed(2)}
        </span>
      </li>
    )),
  );

  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-body-bg-color p-4 font-red-hat-text">
        <main className="max-w-[24rem] Tablet:max-w-[42rem] Desktop:grid Desktop:max-w-[90rem] Desktop:grid-cols-2 Desktop:place-content-center Desktop:place-items-start Desktop:gap-6">
          <h1 className="text-4xl font-bold">Desserts</h1>
          <cartCountContext.Provider value={[cartCount, setCartCount]}>
            <ProductList
              products={products}
              displayProduct={displayProduct}
              setDisplayProduct={setDisplayProduct}
            />
            <ProductCart />
          </cartCountContext.Provider>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
