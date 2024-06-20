import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank';
import './App.css';


class App extends Component {
constructor() {
  super();
  this.state = {
    input: '',
  }
}

 onInputChange = (event) => {
  console.log(event.target.value);
 }

 onButtonSubmit = () => {
  console.log('click');
 }

  render() {
  return (
    <div className="App">

      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit}/> 

      {/*<FaceRecognition />*/}
    </div>
  );
}
}

export default App;
