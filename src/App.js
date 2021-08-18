import React, { Component } from 'react'
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Toolbar from './components/Toolbar/Toolbar';
class App extends Component {

  render() {
    return (
      <div>
        <Toolbar />
        <Intro />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
