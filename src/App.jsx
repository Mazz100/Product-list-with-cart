import { createContext, useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import ProductCart from "./Components/ProductCart";
import productData from "../data.json";

export const priceContext = createContext();
export const cartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.length;

  const productWithQuantity = productData.map((product) => ({
    ...product,
    quantity:
      cartItems.find((item) => item.name === product.name)?.quantity ?? 0,
  }));

  function addCartItem({ product }) {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...product, quantity: 1 },
    ]);
  }

  function removeCartItem({ name }) {
    const deleteItem = cartItems.filter((item) => item.name !== name);
    setCartItems(deleteItem);
    console.log(deleteItem);
  }

  function updateQuantity(name, newQuantity) {
    if (newQuantity === 0) {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.name != name),
      );
      console.log("removed");
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.name === name ? { ...item, newQuantity } : item,
        ),
      );
      console.log("Updated");
    }
  }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-body-bg-color p-4 font-red-hat-text">
        <main className="max-w-[24rem] Tablet:max-w-[42rem] Desktop:grid Desktop:max-w-[90rem] Desktop:grid-cols-2 Desktop:place-content-center Desktop:place-items-start Desktop:gap-6">
          <h1 className="text-4xl font-bold">Desserts</h1>

          <div className="col-end-2 my-4 Desktop:col-start-1">
            <ul className="Tablet:grid Tablet:grid-cols-2 Tablet:gap-6 Desktop:grid-cols-3 Desktop:gap-6">
              {productWithQuantity.map((product) => (
                <ProductList
                  key={product.name}
                  product={product}
                  onAddToCart={() => addCartItem({ product })}
                  onUpdateQuantity={(newQuantity) =>
                    updateQuantity(product.name, newQuantity)
                  }
                  setCartItems={setCartItems}
                  cartItems={cartItems}
                />
              ))}
            </ul>
          </div>
          <ProductCart
            items={cartItems}
            cartCount={cartCount}
            onRemoveItem={(name) => removeCartItem({ name })}
            onUpdateCartItem={(quantity) => updateQuantity(quantity)}
          />
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
