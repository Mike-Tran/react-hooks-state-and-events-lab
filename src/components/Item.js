import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setCart] = useState(false)

  const addToCartHandler = () => {
    setCart(!isInCart)
  }

  const inCart = isInCart ? "in-cart" : "";

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCartHandler} >{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
