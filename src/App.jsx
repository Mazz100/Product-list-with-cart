import { createContext, useState } from "react";
import "./App.css";
import ProductList from "./Components/ProductList";
import ProductCart from "./Components/ProductCart";
import productData from "../data.json";

export const priceContext = createContext();
export const cartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);
  const cartCount = cartItems.length;

  function addCartItem({ product, quantity }) {
    const itemAlreadyInCart = cartItems.find(
      (item) => item.name === product.name,
    );

    if (itemAlreadyInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.name === product.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    console.log(cartItems);
  }

  function removeCartItem({ name }) {
    const deleteItem = cartItems.filter((item) => item.name !== name);
    setCartItems(deleteItem);
  }

  function updateCartItem({ price }) {
    price = 0;
    cartItems.map((item) => {
      price += item.price * item.quantity;
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
                <cartContext.Provider
                  value={[cartItems, setCartItems]}
                  key={product.name}
                >
                  <ProductList
                    product={product}
                    onAddToCart={(quantity) =>
                      addCartItem({
                        product: product,
                        quantity,
                      })
                    }
                  />
                </cartContext.Provider>
              ))}
            </ul>
          </div>

          <priceContext.Provider value={[price, setPrice]}>
            <cartContext.Provider value={[cartItems, setCartItems]}>
              <ProductCart
                cartCount={cartCount}
                onRemoveItem={(name) => removeCartItem({ name })}
                onUpdateCartItem={({ price, quantity }) =>
                  updateCartItem({ price, quantity })
                }
              />
            </cartContext.Provider>
          </priceContext.Provider>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
