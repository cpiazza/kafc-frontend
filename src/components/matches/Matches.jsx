import React, { Component } from 'react';
import axios from 'axios';

class Matches extends Component {
    state = {
        matches: []
    };

    componentDidMount() {
        let config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
        axios.get('matches', config).then(response => {
            const matches = response.data.matches;
            this.setState({ matches })
        }
      )
    }

    render () {
      return (
        <div>
          <h1>Matches </h1>
          <ul>
            { this.state.matches.map(match => <li key={match.id}>{match.home_team.name} vs {match.away_team.name} - Week {match.matchweek} - Chelsea wins! - {match.date} - And the blues, lead by the mighty Kurt (Zouma), go marching on! </li>) }
            </ul>
        </div>
      )
    }
  }

  export default Matches;
