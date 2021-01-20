import React from "react";
import {BasketGoToPayment} from './basket-go-to-payment';
import {BasketPaymentMethods} from './basket-payment-methods';
import {BasketTotalPrice} from './basket-total-price';

export function BasketPayment() {
  return (
    <>
      <BasketTotalPrice/>
      <BasketPaymentMethods/>
      <BasketGoToPayment/>
    </>
  );
}
