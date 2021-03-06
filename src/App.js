import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { makeNetworkRequest } from './network';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "",
    }
  }
  componentDidMount() {
    this.getJoke();
  }

  getJoke = async () => {
    let joke = await makeNetworkRequest("GET", process.env.REACT_APP_GATEWAY_API_URL);
    this.setState({
      joke: joke.message
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> {this.state.joke} </p>
        </header>
        <p>
          <a href = "https://www.linkedin.com/in/jodhawat/">Raunak Jodhawat</a> ||  
          <a href = "https://github.com/raunakjodhawat">Git</a> ||
          <a href = "https://github.com/raunakjodhawat/jokes-apart-client">Fork this project</a> ||
          <a href = "http://api.icndb.com/jokes/random/">Credits</a>
        </p>
      </div>
    );
  }
}

export default App;
