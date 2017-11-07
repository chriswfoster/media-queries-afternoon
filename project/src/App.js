import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav/Nav'
import Services from './components/Services/Services'
import Background from './components/Background'


class App extends Component {




  render() {
    return (
      <div>
        <div className="all">
        <Nav />
        </div>
        
       
            <Background />
                
        




      </div>
    );
  }
}

export default App;
