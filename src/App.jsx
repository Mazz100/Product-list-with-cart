import { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import ProductCart from "./ProductCart";

function App() {
  return (
    <>
      <div className="Desktop:p-8 flex min-h-screen flex-col items-center bg-body-bg-color p-4 font-red-hat-text">
        <main className="Desktop:grid Desktop:grid-cols-2 Desktop:max-w-none Desktop:gap-6 Desktop:place-content-center Desktop:place-items-start max-w-[24rem]">
          <h1 className="text-4xl font-bold">Desserts</h1>
          <ProductList />
          <ProductCart />
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
