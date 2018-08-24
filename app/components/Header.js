import React from 'react';

export default props => {
  return (
    <div className="header">
      <h1>Rainy Dayz</h1>
      <div>
        <input
          type="text"
          className="mainInput"
          placeholder="Brno, Czech Republic"
          value={props.inputText}
          onChange={props.textTyped}
        />
        <button className="btn" onClick={props.clicked}>
          Get Weather
        </button>
      </div>
    </div>
  );
};
