import React, { useState } from "react";
import './text-input.css';

export function TextInput({initialValue, onChange}) {
  const [value, setValue] = useState(initialValue);

  const onInputChange = event => {
    const inputValue = event.target.value;
    setValue(inputValue);
    onChange(inputValue);
  };

  return (
    <input type="text" value={value} onChange={onInputChange}/>
  );
}
