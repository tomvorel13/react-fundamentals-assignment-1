import React from 'react';

const Input = (props) => {
  return (
    <input
      type="text"
      className="mainInput"
      placeholder="Brno, Czech Republic"
      value={props.inputText}
      onChange={props.textTyped}
    />
  );
};

export default Input;
