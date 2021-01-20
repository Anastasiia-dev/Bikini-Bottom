import React, {useEffect, useState} from "react";
import {getBasketItems} from '../../api/basket-api';
import {BasketListItem} from './basket-list-item';

export function BasketItemsList() {
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    getBasketItems()
      .then(basketItems => {
        console.log(basketItems);
        setBasketItems(basketItems);
      })
      .catch(err => console.err(err));
  }, []);

  return (
    <div className="basket-items-list">
      {basketItems.map((item, index) => <BasketListItem key={index} basketItem={item}/>)}
    </div>
  );
}
