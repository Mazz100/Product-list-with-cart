import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import ProductCart from "./Components/ProductCart";
import ProductCategory from "./Components/ProductCategory";
import productData from "../data.json";

function App() {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  );

  const [selectedCategory, setSelectedCategory] = useState([]);

  const cartCount = cartItems.length;

  const productWithQuantity = productData
    .map((product) => ({
      ...product,
      quantity:
        cartItems.find((item) => item.name === product.name)?.quantity ?? 0, //Update quantity to 0 if it's undefined using `??`
    }))
    .filter(
      (item) =>
        selectedCategory.length === 0 ||
        selectedCategory.includes(item.category),
    );

  function addCartItem({ product }) {
    setCartItems((prevCartItems) => [
      ...prevCartItems,
      { ...product, quantity: 1 },
    ]);
  }

  function removeCartItem({ name }) {
    const deleteItem = cartItems.filter((item) => item.name !== name);
    setCartItems(deleteItem);
  }

  function updateQuantity(name, newQuantity) {
    if (newQuantity === 0) {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.name != name),
      );
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.name === name ? { ...item, quantity: newQuantity } : item,
        ),
      );
    }
  }

  function clearCart() {
    setCartItems([]);
  }

  function hanldeCategoryFilter(category) {
    setSelectedCategory((prevSelectedCategory) =>
      prevSelectedCategory.includes(category)
        ? prevSelectedCategory.filter((item) => item !== category)
        : [...prevSelectedCategory, category],
    );
  }

  useEffect(() => {
    //Update local storage with each cartItems render
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    //Parse cartItems data on component mount
    const cardItems = localStorage.getItem("cartItems");

    if (cardItems) {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);

  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-body-bg-color font-red-hat-text">
        <main className="max-w-[21rem] flex-1 Tablet:max-w-[42rem] Desktop:grid Desktop:max-w-none Desktop:grid-cols-4 Desktop:place-content-start Desktop:place-items-start Desktop:gap-6">
          <h1 className="mt-6 text-4xl font-bold Desktop:col-start-2 Desktop:col-end-4">
            Desserts
          </h1>

          <div className="my-4 flex flex-wrap items-start justify-start gap-2 Desktop:col-start-1 Desktop:col-end-2 Desktop:mx-4 Desktop:flex-col">
            <p className="w-full text-2xl font-semibold text-text-color-strong">
              Select a category
            </p>

            {productData.map((item) => (
              <ProductCategory
                key={item.name}
                category={item.category}
                onCategoryFilter={(category) => hanldeCategoryFilter(category)}
              />
            ))}
          </div>

          <div className="my-4 Desktop:col-start-2 Desktop:col-end-4">
            <ul className="Tablet:grid Tablet:grid-cols-2 Tablet:gap-6 Desktop:grid-cols-3 Desktop:gap-6">
              {productWithQuantity.map((product) => (
                <ProductList
                  key={product.name}
                  product={product}
                  onAddToCart={() => addCartItem({ product })}
                  onUpdateQuantity={(newQuantity) =>
                    updateQuantity(product.name, newQuantity)
                  }
                />
              ))}
            </ul>
          </div>
          <ProductCart
            items={cartItems}
            cartCount={cartCount}
            onRemoveItem={(name) => removeCartItem({ name })}
            onUpdateCartItem={(quantity) => updateQuantity(quantity)}
            onClearCart={clearCart}
          />
        </main>

        <footer className="w-full border-t-2 border-primary-color bg-white p-2 text-center">
          <p className="text-balance">
            Challenge by{" "}
            <a
              className="font-semibold text-primary-color hover:underline"
              href="https://www.frontendmentor.io?ref=challenge"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              className="font-semibold text-primary-color hover:underline"
              href="http://github.com/mazz100"
            >
              Mazen Hassan
            </a>
            .
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
