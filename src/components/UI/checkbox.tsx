import React from 'react';
import { createID } from '../../libs/helpers';

interface Iprops {
    callback: (value: boolean) => void,
    title: string
}

function CheckBox({ callback, title } : Iprops) {
  const myId = createID();

  const onInputChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    callback(value.currentTarget.checked);
  };

  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={myId}
        onChange={onInputChange}
      />
      <label className="form-check-label" htmlFor={myId}>{title}</label>
    </div>
  );
}

export default CheckBox;
