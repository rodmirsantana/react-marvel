import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import logo from './marvel-logo.png'
import Card from './components/Card/index';

const md5 = require('md5');

const publicKey = 'fadb3d6ff2c31aceefc52728631cd643';
const privateKey = '9a5f1bd4bab1b6c2f5f6ba80b1477e7e03ba416c';
const timeStamp = Date.now().toString();

const hash = md5(timeStamp + privateKey + publicKey);

class App extends Component {

  state = {
    heroes : []
  }

  async componentDidMount(){
    const result = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    })
    const heroes = result.data.results;
    this.setState({ heroes });
}

  render() {
    return (
      <div className="App">
        <header className="card-header">
          <div className="header-logo">
            <img src={logo} alt="logo" className="marvel-logo"/>
          </div>
          <div className="header-text">
            <h1>SUPERHEROES</h1>
          </div>
        </header>
        <div className="cards">
          {
            this.state.heroes.map((hero) => (
              <Card heroItem={hero} key={hero.id} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
