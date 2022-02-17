import React from 'react';

interface Iprops {
    placeholder?: string,
    callback: (value: string) => void,
    defaultValue?: string,
}

function Input({ placeholder, callback, defaultValue }: Iprops) {
  const onInputChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    callback(value.currentTarget.value);
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onInputChange}
    />
  );
}

export default Input;
