import './App.css';
import Greeting from './Greeting.js';
import Nav from './Nav.js';
import Footer from './Footer.js';
import LottieAnimation from './Lottie.js';
import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isLoading:true}
  }
  componentDidMount() {
    setTimeout(() => this.setState({isLoading: false}), 2000)
  }
  render() {
    if(this.state.isLoading) {
      return (
        <div className='loading'>
        <LottieAnimation />
        </div>
      )
    } else {
      return (
        <div className='app'>
          <Greeting />

          <Footer />

        </div>
      );
    }
  }
}
