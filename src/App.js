import React from 'react';
import Header from './Header';
import Main from './main'
import About from './About'
import Skils from './Skils'
import Portfolio from './Portfolio'
import Footer from './Footer'
import './App.css';

export default class App extends React.Component{
  render(){
      return(
       <div className="wrapper" >
        <div className="big-container">
          <Header/>
          <Main/> 
        </div>
          <About/> 
          <Skils/>
          <Portfolio/>
          <Footer/>
       </div> 
      )
  }
}