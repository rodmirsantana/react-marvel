import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const md5 = require('md5');

const publicKey = 'fadb3d6ff2c31aceefc52728631cd643';
const privateKey = '9a5f1bd4bab1b6c2f5f6ba80b1477e7e03ba416c';
const timeStamp = Date.now().toString();

const hash = md5(timeStamp + privateKey + publicKey);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
