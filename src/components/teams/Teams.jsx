import React, { Component } from 'react';
import axios from 'axios';

class Teams extends Component {
    state = {
        teams: []
    };

    componentDidMount() {
        axios.get('teams').then(response => {
            const teams = response.data.teams;
            this.setState({ teams })
        }
      )
    }
    render () {
        return (
           <div>
               <h1>All The Chelsea's </h1>
               <ul>
                 { this.state.teams.map(team => <li key={team.id}>{team.name} - {team.color}</li>) }
               </ul>
           </div>
        )
    }
}

export default Teams;
