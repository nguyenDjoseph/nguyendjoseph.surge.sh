import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';
import Three from './components/Three';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      scrollPosition: 0
    }

    this.recordScroll = this.recordScroll.bind(this);
  };

  componentDidMount() {
    window.addEventListener('scroll', this.recordScroll);
    window.addEventListener("resize", this.isMobile);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.recordScroll);
  }

  recordScroll() {
    this.setState({
      scrollPosition: window.pageYOffset
    })
  }

  render() {
    return (
      <div className="App">
        <Content/>
        <Three/>
      </div>
    );
  }
}

export default App;
