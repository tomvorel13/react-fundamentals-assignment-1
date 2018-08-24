import React from 'react';
import Header from './Header';
import Body from './Body';
import Forecast from './Forecast';
import { ReactRouter, Switch, BrowserRouter, Route } from 'react-router-dom';
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
      <BrowserRouter>
        <div className="main-wrapper">
          <Route
            render={props => (
              <Header
                clicked={this.logText}
                textTyped={this.inputTextHandler}
                inputText={this.state.inputText}
              />
            )}
          />
          <Route
            path="/"
            exact
            render={props => (
              <Body
                clicked={this.logText}
                textTyped={this.inputTextHandler}
                inputText={this.state.inputText}
              />
            )}
          />
          <Route path="/forecast" render={props => <Forecast />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
