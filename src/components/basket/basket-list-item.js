import React from "react";
import {basketItemTypes} from '../../constants/basket/basket-item-types';
import {BasketItemActivity} from './basket-item-activity';
import {BasketItemDining} from './basket-item-dining';
import {BasketItemHotel} from './basket-item-hotel';
import {BasketItemPackage} from './basket-item-package';
import './basket-list-item.css';

/**
 * Этот компонент служит оберктой для всех разных элементов корзины.
 * Он в себе содержит знание о том, как устроены элементы корзины, так, что родителю про это не надо знать.
 * Ещё этот шаблон называют "Декоратор",
 * тут можно подробнее почитать про декоратор https://refactoring.guru/ru/design-patterns/decorator
 */

export function BasketListItem(props) {
  const { basketItem } = props;

  const basketItemsHash = {
    [basketItemTypes.activity]: <BasketItemActivity activityItem={basketItem}/>,
    [basketItemTypes.hotel]: <BasketItemHotel hotelItem={basketItem}/>,
    [basketItemTypes.dining]: <BasketItemDining diningItem={basketItem}/>,
    [basketItemTypes.package]: <BasketItemPackage packageItem={basketItem}/>
  };

  return (
    <div className='basket-list-item-container'>
      {basketItemsHash[basketItem.type]}
    </div>
  );
}
