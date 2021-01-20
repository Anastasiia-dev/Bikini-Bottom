import React from "react";
import {BasketItemsList} from './basket-items-list';

export function Basket() {
  return (
    <div className="basket-page-container">
      <h1>Basket</h1>

      <BasketItemsList/>
    </div>
  );
}
