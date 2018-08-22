import React from 'react';
import Header from './Header';
import Body from './Body';

class App extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
