import React, { Component } from 'react';
import axios from 'axios';

class Players extends Component {
    state = {
        players: []
    };

    componentDidMount() {
        axios.get('players').then(response => {
            const players = response.data.players;
            this.setState({ players })
            }
        )
    }

  render () {
    return (
      <div>
        <h1>Best Players Ever </h1>
        <ul>
          { this.state.players.map(player => <li key={player.id}>{player.first_name} {player.last_name} - {player.age} years old</li>) }
          </ul>
      </div>
    )
  }
}

export default Players;
