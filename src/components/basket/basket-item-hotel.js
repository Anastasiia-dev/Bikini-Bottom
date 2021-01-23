import React from "react";
import { Datepicker } from "../shared/form/datepicker/datepicker";
import { Select } from "../shared/form/select/select";
import { TextInput } from "../shared/form/text-input/text-input";

export function BasketItemHotel() {
  const options = [
    {
      value: 1,
      viewValue: 'Just one'
    },
    {
      value: 2,
      viewValue: 'We are in two'
    },
    {
      value: 3,
      viewValue: 'Probably three'
    }
  ];

  const onNumberOfGuestsChange = numberOfGuests => {
    console.log(numberOfGuests);
  };

  const onTextChange = text => {
    console.log(text);
  };

  const onDateChange = date => {
    console.log(date);
  };

  return (
    <div className='basket-item-hotel'>
      <Select options={options} label='Number of guests' onChange={onNumberOfGuestsChange}/>
      <TextInput initialValue='Text Here' onChange={onTextChange}/>
      <Datepicker initialDate='2018-06-12T19:30' onChange={onDateChange}/>
    </div>
  );
}
