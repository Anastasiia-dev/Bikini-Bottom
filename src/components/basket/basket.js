import React from "react";
import {BasketItemsList} from './basket-items-list';
import {BasketPayment} from './basket-payment';

export function Basket() {
  return (
    <div className="basket-page-container">
      <h1>Basket</h1>
      <BasketItemsList/>
      <BasketPayment/>
    </div>
  );
}
