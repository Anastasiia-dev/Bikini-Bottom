import React from "react";
import {basketItemTypes} from '../../constants/basket/basket-item-types';
import {BasketItemActivity} from './basket-item-activity';
import {BasketItemDining} from './basket-item-dining';
import {BasketItemHotel} from './basket-item-hotel';
import {BasketItemPackage} from './basket-item-package';
import './basket-list-item.css';

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
