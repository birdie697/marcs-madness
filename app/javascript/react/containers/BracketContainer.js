import React from 'react';
import Bracket from '../components/Bracket';

class BracketContainer extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        team1: '',   team2: '', team3: '',  team4: '',
        team5: '',   team6: '', team7: '',  team8: '',
        team9: '',  team10: '', team11: '', team12: '',
        team13: '', team14: '', team15: '', team16: '',
        team17: '', team18: '', team19: '', team20: '',
        team21: '', team22: '', team23: '', team24: '',
        team25: '', team26: '', team27: '', team28: '',
        team29: '', team30: '', team31: '', team32: '',
        team33: '', team34: '', team35: '', team36: '',
        team37: '', team38: '', team39: '', team40: '',
        team41: '', team42: '', team43: '', team44: '',
        team45: '', team46: '', team47: '', team48: '',
        team49: '', team50: '', team51: '', team52: '',
        team53: '', team54: '', team55: '', team56: '',
        team57: '', team58: '', team59: '', team60: '',
        team61: '', team62: '', team63: '', team64: '',
        selectedGame1Winner: ''
      }
      this.handleGame1Selection = this.handleGame1Selection.bind(this)
      this.handleGame2Selection = this.handleGame2Selection.bind(this)
    }

    handleGame1Selection(event) {
      this.setState({ selectedGame1Winner: event.target.value })
    }

    handleGame2Selection(event) {
      this.setState({ selectedGame2Winner: event.target.value })
    }

    componentDidMount(){
      fetch('api/v1/teams')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`;
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          team1: body[0].team_1,
          team2: body[0].team_2,
          team3: body[0].team_3,
          team4: body[0].team_4,
          team5: body[0].team_5,
          team6: body[0].team_6,
          team7: body[0].team_7,
          team8: body[0].team_8,
          team9: body[0].team_9,
          team10: body[0].team_10,
          team11: body[0].team_11,
          team12: body[0].team_12,
          team13: body[0].team_13,
          team14: body[0].team_14,
          team15: body[0].team_15,
          team16: body[0].team_16,
          team17: body[0].team_17,
          team18: body[0].team_18,
          team19: body[0].team_19,
          team20: body[0].team_20,
          team21: body[0].team_21,
          team22: body[0].team_22,
          team23: body[0].team_23,
          team24: body[0].team_24,
          team25: body[0].team_25,
          team26: body[0].team_26,
          team27: body[0].team_27,
          team28: body[0].team_28,
          team29: body[0].team_29,
          team30: body[0].team_30,
          team31: body[0].team_31,
          team32: body[0].team_32,
          team33: body[0].team_33,
          team34: body[0].team_34,
          team35: body[0].team_35,
          team36: body[0].team_36,
          team37: body[0].team_37,
          team38: body[0].team_38,
          team39: body[0].team_39,
          team40: body[0].team_40,
          team41: body[0].team_41,
          team42: body[0].team_42,
          team43: body[0].team_43,
          team44: body[0].team_44,
          team45: body[0].team_45,
          team46: body[0].team_46,
          team47: body[0].team_47,
          team48: body[0].team_48,
          team49: body[0].team_49,
          team50: body[0].team_30,
          team51: body[0].team_51,
          team52: body[0].team_52,
          team53: body[0].team_53,
          team54: body[0].team_54,
          team55: body[0].team_55,
          team56: body[0].team_56,
          team57: body[0].team_57,
          team58: body[0].team_58,
          team59: body[0].team_59,
          team60: body[0].team_60,
          team61: body[0].team_61,
          team62: body[0].team_62,
          team63: body[0].team_63,
          team64: body[0].team_64
        });
      })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render () {
    return(
      <div>
        <Bracket
          homeTeam={this.state.team1}
          awayTeam={this.state.team2}
          name="game1"
          selectedGameWinner={this.state.selectedGame1Winner}
          handleOptionChange={this.handleGame1Selection}
        />
        <Bracket
          homeTeam={this.state.team3}
          awayTeam={this.state.team4}
          name="game2"
          selectedGameWinner={this.state.selectedGame2Winner}
          handleOptionChange={this.handleGame2Selection}
        />
      </div>
    )
  }
}
export default BracketContainer;
