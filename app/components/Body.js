import React from 'react';

export default (props) => {
  return (
    <div className="body-wrapper">
      <h1>Enter a City and State</h1>
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
  );
};
