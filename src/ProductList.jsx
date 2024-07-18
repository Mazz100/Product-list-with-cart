import React from "react";
import products from "../data.json";

const ProductList = () => {
  return (
    <div className="Desktop:col-start-1 col-end-2 my-4">
      <ul className="Desktop:grid Desktop:grid-cols-3 Desktop:auto-rows-auto Desktop:gap-6 Tablet:grid-cols-2 Tablet:grid Tablet:gap-6">
        {products.map((product, index) => (
          <li
            key={index}
            className="Desktop:my-0 my-4 flex w-full flex-col items-center"
          >
            <picture className="overflow-hidden rounded-lg">
              <source
                srcSet={product.image.desktop}
                media="(min-width:80rem)"
              />
              <source
                srcSet={product.image.tablet}
                media="(min-width: 48rem)"
              />
              <img src={product.image.mobile} alt={product.name} />
            </picture>
            <button
              type="button"
              className="inline-flex -translate-y-1/2 gap-2 rounded-full border-[1px] border-border-color-light bg-white p-2 px-4 font-semibold transition-colors duration-200 hover:border-primary-color hover:text-primary-color"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                fill="none"
                viewBox="0 0 21 20"
              >
                <g fill="#C73B0F" clipPath="url(#a)">
                  <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
                  <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M.333 0h20v20h-20z" />
                  </clipPath>
                </defs>
              </svg>
              Add to Cart
            </button>

            <p className="self-start text-sm opacity-70">{product.category}</p>
            <p className="self-start font-semibold">{product.name}</p>
            <span className="self-start text-sm font-semibold text-primary-color">
              ${product.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
