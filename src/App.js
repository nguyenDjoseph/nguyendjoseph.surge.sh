import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';
import Three from './components/Three';

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      scrollPosition: 0,
      isMobile: false,
    }

    this.recordScroll = this.recordScroll.bind(this);
    this.isMobile = this.isMobile.bind(this);
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

  isMobile(){
    if (window.outerWidth < 768) {
      this.setState({
        isMobile: true
      })
    } else {
      this.setState({
        isMobile: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Content
            isMobile = {this.state.isMobile}
          />
        <Three/>
      </div>
    );
  }
}

export default App;
