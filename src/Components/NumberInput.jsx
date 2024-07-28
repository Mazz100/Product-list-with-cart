import React, { useContext } from "react";
import { cartContext } from "../App";

const NumberInput = ({}) => {
  const [cartItems, setCartItems] = useContext(cartContext);

  return (
    <>
      <label>
        <input type="number" name="quantity" min={1} defaultValue={1} />
      </label>
    </>
  );
};

export default NumberInput;
