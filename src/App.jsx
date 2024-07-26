import { createContext, useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import ProductCart from "./ProductCart";
import productData from "../data.json";

function App() {
  const [cartItems, setCartItem] = useState([]);
  const [price, setPrice] = useState(0);
  const cartCount = cartItems.length;

  function addCartItem({ product, quantity }) {
    let isAdded = false;
    cartItems.map((item) => {
      if (product.name === item.name) {
        isAdded = true;
      }
    });

    if (isAdded) {
      return;
    }

    setCartItem([...cartItems, product]);
  }

  function removeCartItem({ name }) {
    const deleteItem = cartItems.filter((item) => item.name !== name);
    setCartItem(deleteItem);
  }

  function updateCartItem({ price, quantity }) {
    price = 0;
    cartItems.map((item) => {
      price += item.price;
    });

    setPrice(price);
  }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-body-bg-color p-4 font-red-hat-text">
        <main className="max-w-[24rem] Tablet:max-w-[42rem] Desktop:grid Desktop:max-w-[90rem] Desktop:grid-cols-2 Desktop:place-content-center Desktop:place-items-start Desktop:gap-6">
          <h1 className="text-4xl font-bold">Desserts</h1>

          <div className="col-end-2 my-4 Desktop:col-start-1">
            <ul className="Tablet:grid Tablet:grid-cols-2 Tablet:gap-6 Desktop:grid-cols-3 Desktop:gap-6">
              {productData.map((product) => (
                <ProductList
                  key={product.name}
                  product={product}
                  onAddToCart={(quantity) =>
                    addCartItem({
                      product: product,
                      quantity,
                    })
                  }
                />
              ))}
            </ul>
          </div>

          <ProductCart
            items={cartItems}
            cartCount={cartCount}
            onRemoveItem={(name) => removeCartItem({ name })}
            onUpdateCartItem={({ price, quantity }) =>
              updateCartItem({ price, quantity })
            }
            setPrice={setPrice}
            price={price}
          />
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
