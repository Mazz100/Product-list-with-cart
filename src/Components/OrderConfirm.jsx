import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import confirmIcon from "../icons/icon-order-confirmed.svg";

const OrderConfirm = (props) => {
  const { items, onClearCart } = props;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="w-full rounded-full bg-primary-color p-3 text-center text-white transition-colors duration-150 ease-in hover:bg-hover-state focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-primary-color">
          Confirm Order
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-[#00000060]">
          <Dialog.Content
            onEscapeKeyDown={(e) => e.preventDefault()}
            onPointerDownOutside={(e) => e.preventDefault()}
            className="data-[state=open]:animate-modalOpen fixed left-1/2 top-1/2 max-h-[85vh] w-full -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-white p-6 shadow-[4px_8px_5px_0_#888] Tablet:max-w-[500px] Desktop:w-[90vw] Desktop:max-w-[500px]"
          >
            <Dialog.Title asChild>
              <div className="mb-4 flex flex-col items-start gap-4">
                <img src={confirmIcon} alt="" />
                <h2 className="text-4xl font-bold">Order Confirmed</h2>
              </div>
            </Dialog.Title>

            <Dialog.Description asChild>
              <p className="mb-6 text-sm font-semibold text-text-color-light">
                We hope you enjoy your food!
              </p>
            </Dialog.Description>

            <div className="mb-6 rounded-md bg-bg-color-1 p-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="my-5 flex items-center gap-2 border-b-[1px] border-border-color-veryLight p-2"
                >
                  <img
                    className="max-w-[4rem] overflow-hidden rounded-md"
                    src={item.image.thumbnail}
                    alt={item.name}
                  />
                  <div>
                    <p className="w-[150px] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold Tablet:w-max Tablet:overflow-visible">
                      {item.name}
                    </p>

                    <div className="inline-flex gap-2">
                      <span className="text-sm font-semibold text-primary-color">{`x${item.quantity}`}</span>

                      <span className="text-sm text-text-color-light">
                        @${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <p className="col-start-3 col-end-4 row-span-2 ml-auto text-sm font-bold text-text-color-strong">
                    ${`${(item.price * item.quantity).toFixed(2)}`}
                  </p>
                </div>
              ))}

              <div className="flex w-full items-center justify-between">
                <p className="text-xs font-semibold">Order Total</p>
                <span className="text-xl font-bold text-text-color-strong">
                  $
                  {items
                    .reduce(
                      (total, item) => total + item.price * item.quantity,
                      0,
                    )
                    .toFixed(2)}
                </span>
              </div>
            </div>

            <Dialog.Close asChild>
              <button
                onClick={onClearCart}
                className="w-full rounded-full bg-primary-color p-3 text-center text-white transition-colors duration-150 ease-in hover:bg-hover-state focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-primary-color"
              >
                Start New Order
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default OrderConfirm;
