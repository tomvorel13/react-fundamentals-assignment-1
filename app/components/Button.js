import React from 'react';

const Button = (props) => {
  return <button className="btn" onClick={props.clicked}>Get Weather</button>;
};

export default Button;
