import React, { useState } from "react";
import './text-input.css';

export function TextInput({initialValue, onChange}) {
  const [value, setValue] = useState(initialValue || '');

  const onInputChange = event => {
    const inputValue = event.target.value;
    setValue(inputValue);
    onChange(inputValue);
  };

  // Элементу формы надо дать value и обработчик onChange,
  // таким способом мы делаем компонент Controlled реактом,
  // вот ссылка на Controlled Components https://reactjs.org/docs/forms.html#controlled-components
  //
  // Но, это вовсе необязательно и можно, чтобы элемент формы не был Controlled реактом,
  // тогда компонент будет Uncontrolled https://reactjs.org/docs/uncontrolled-components.html,
  // но все таки рекомендуется использовать Controlled
  return (
    <input type="text" value={value} onChange={onInputChange}/>
  );
}
