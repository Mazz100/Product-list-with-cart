import { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";
import ProductCart from "./ProductCart";

function App() {
  return (
    <>
      <div className="min-h-screen font-red-hat-text p-4 flex flex-col items-center bg-body-bg-color">
        <main className="max-w-[24rem]">
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
