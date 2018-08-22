import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Rainy Dayz</h1>
        <div>
          <Input />
          <Button />
        </div>
      </div>
    );
  }
}
