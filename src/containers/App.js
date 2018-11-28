import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import axios from 'axios';
import { playersList } from '../players.js';

import Card from '../components/Card';

class App extends Component {
  constructor () {
    super()
    this.state = {
      players: [],
      searchState: ''
    }
  }

  componentDidMount() {
    this.setState({ players: playersList});
  }

//<CardList players={filteredPlayers} />
//<SearchBox searchChange={onSearchChange}/>
  render() {
    const players = this.state.players;
    //const { searchField, onSearchChange } = this.props;
    //const filteredPlayers = players.filter( player => {
    //  return player.owl_id.toLowerCase().includes(searchField.toLowerCase());
    //})
    return !players.length ? 
    <h1>Loading...</h1> :
    (
      <div className="App">
        <h1>OWL Twitch Directory</h1>
        <CardList players={players} />
      </div>
    );
  }
}

export default App;
