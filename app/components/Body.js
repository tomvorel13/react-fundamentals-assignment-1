import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

export default class Body extends Component {
  render() {
    return (
      <div className="body-wrapper">
        <h1>Enter a City and State</h1>
        <Input textTyped={this.props.textTyped} inputText={this.props.inputText} />
        <Button clicked={this.props.clicked} />
      </div>
    );
  }
}
