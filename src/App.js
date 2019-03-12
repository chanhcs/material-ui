import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';

class App extends Component { 

  render() {
    
    return (
      <div className="App">
     
        <Header/>           
        <Aside/>
        <Section/>
        <Footer/>
      </div>
    );
  }
}

export default App;
