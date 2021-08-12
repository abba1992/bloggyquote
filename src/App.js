import React, { Component } from 'react'
import Body from './components/Body/Body';
import Intro from './components/Intro/Intro';
import Toolbar from './components/Toolbar/Toolbar';
class App extends Component {

  render() {
    return (
      <div>
        <Toolbar />
        <Intro />
        <Body />
        <h3>footer</h3>

      </div>
    );
  }
}

export default App;
