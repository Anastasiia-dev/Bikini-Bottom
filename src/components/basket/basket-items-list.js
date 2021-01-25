import React, {useEffect, useState} from "react";
import {getBasketItems} from '../../api/basket-api';
import {BasketListItem} from './basket-list-item';

export function BasketItemsList() {
  const [basketItems, setBasketItems] = useState([]);

  // useEffect это способ что-то сделать, после того, как компонент отрендерился
  // Вот ссылка https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    getBasketItems().then(basketItems => setBasketItems(basketItems));
  }, []);

  return (
    <div className="basket-items-list">
      {basketItems.map((item, index) => <BasketListItem key={index} basketItem={item}/>)}
    </div>
  );
}
