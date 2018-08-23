import React from 'react';
import Header from './Header';
import Body from './Body';
import { getWeatherInfo, get5dayForecast } from '../utils/api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputText: '' };

    this.logText = this.logText.bind(this);
    this.inputTextHandler = this.inputTextHandler.bind(this);
  }

  logText() {
    getWeatherInfo('Brno');
  }

  inputTextHandler(e) {
    this.setState({
      inputText: e.target.value
    });
  }

  render() {
    return (
      <div className="main-wrapper">
        <Header
          clicked={this.logText}
          textTyped={this.inputTextHandler}
          inputText={this.state.inputText}
        />
        <Body
          clicked={this.logText}
          textTyped={this.inputTextHandler}
          inputText={this.state.inputText}
        />
      </div>
    );
  }
}

export default App;
