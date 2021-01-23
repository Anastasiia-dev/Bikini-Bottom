import React, { useState } from "react";
import './select.css';

export function Select({initialValue, onChange, options, label}) {
  const [value, setValue] = useState(initialValue);

  const onSelectChange = event => {
    const value = event.target.value;
    setValue(value);
    onChange(value);
  }

  return (
    <select placeholder={label} value={value} onChange={onSelectChange}>
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.viewValue}
        </option>
      )}
    </select>
  );
}
