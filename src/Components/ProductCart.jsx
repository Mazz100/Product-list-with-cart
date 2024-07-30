import React from "react";
import emptyCart from "../icons/illustration-empty-cart.svg";
import removeIcon from "../icons/icon-remove-item.svg";
import carbonIcon from "../icons/icon-carbon-neutral.svg";

const ProductCart = ({ items, cartCount, onRemoveItem }) => {
  return (
    <>
      {!cartCount ? (
        <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="self-start text-2xl font-bold text-primary-color">
            Your Cart (0)
          </h2>

          <img src={emptyCart} alt="" />

          <p className="font-semibold text-text-color-medium">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className="flex flex-col rounded-lg bg-white p-8 shadow-sm">
          <h2 className="self-start text-2xl font-bold text-primary-color">
            Your Cart ({cartCount})
          </h2>

          {items.map((item) => (
            <div
              key={item.name}
              className="mb-5 flex items-center justify-between gap-6 border-b-[1px] border-border-color-veryLight p-4"
            >
              <div className="flex flex-col">
                <p className="text-sm font-semibold">{item.name}</p>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-primary-color">{`x${item.quantity}`}</span>
                  <span className="text-sm text-text-color-light">
                    @{`${(item.price * item.quantity).toFixed(2)}`}
                  </span>

                  <p className="text-sm font-semibold text-text-color-medium">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/*Remove item button*/}
              <button
                className="group rounded-full border-[1px] border-border-color-medium p-[1px] transition-colors ease-in hover:border-border-color-strong"
                onClick={() => onRemoveItem(item.name)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="#000"
                  viewBox="0 0 10 10"
                >
                  <path
                    className="transition-colors group-hover:fill-black"
                    fill="#CAAFA7"
                    d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                  />
                </svg>
              </button>
            </div>
          ))}

          <div className="flex w-full items-center justify-between">
            <p className="text-xs font-semibold">Order Total</p>
            <span className="text-xl font-bold">
              $
              {items
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </div>

          <div className="my-4 flex items-center justify-center gap-2 rounded-md bg-bg-color-1 p-4">
            <img src={carbonIcon} alt="" />
            <p className="text-sm">
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCart;
