import React, {Component} from 'react';
import './App.css';

// Import components

import PlayerList from './components/PlayerList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
        .then((res) => res.json())
        .then((res) => this.setState({data: res}))
        .catch((err) => {
            console.log("Error:", err)
        })
  }

  render() {
    return (
      <div className="App">
        <PlayerList players={this.state.data} />
      </div>
    );
  }
}

export default App;
