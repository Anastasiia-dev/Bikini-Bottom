import React from "react";
import { TextInput } from "../shared/form/text-input/text-input";

export function BasketItemPackage() {
  const onTextChange = textValue => {
    console.log(textValue);
  };

  return (
    <div className='basket-item-package'>
      <TextInput onChange={onTextChange}/>
    </div>
  );
}
