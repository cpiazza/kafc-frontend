import React, { Component } from 'react';
import axios from 'axios';

class Stats extends Component {
    state = {
        stats: []
    };

    componentDidMount() {
        axios.get('stats').then(response => {
            const stats = response.data.stats;
            this.setState({ stats })
        }
      )
    }

    render () {
        return (
          <div>
           <h1>Stats</h1>
           <ul>
           { this.state.stats.map(stat => <li key={stat.id}>{stat.stat_name} - {stat.points} </li>) }
           </ul>
          </div>
        )
    }
}

export default Stats;
