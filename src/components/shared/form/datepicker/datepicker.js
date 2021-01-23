import React, { useState } from "react";

export function Datepicker({initialDate, onChange}) {
  const [value, setValue] = useState(initialDate);

  const onDatepickerChange = event => {
    const value = event.target.value;
    setValue(value);
    onChange(value);
  };

  return (
    <input type="datetime-local" value={value} onChange={onDatepickerChange}/>
  );
};
