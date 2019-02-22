import React from 'react';
import { browserHistory } from 'react-router';
import swal from 'sweetalert';
import Bracket from '../components/Bracket';
import BracketFinalFour from '../components/BracketFinalFour';
import BracketWinner from '../components/BracketWinner';
import BracketName from '../components/BracketName';

class BracketForm extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        currentUserId: '',
        currentUserName: '',
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
        selectedGame1Winner: '',
        selectedGame2Winner: '',
        selectedGame3Winner: '',
        selectedGame4Winner: '',
        selectedGame5Winner: '',
        selectedGame6Winner: '',
        selectedGame7Winner: '',
        selectedGame8Winner: '',
        selectedGame9Winner: '',
        selectedGame10Winner: '',
        selectedGame11Winner: '',
        selectedGame12Winner: '',
        selectedGame13Winner: '',
        selectedGame14Winner: '',
        selectedGame15Winner: '',
        selectedGame16Winner: '',
        selectedGame17Winner: '',
        selectedGame18Winner: '',
        selectedGame19Winner: '',
        selectedGame20Winner: '',
        selectedGame21Winner: '',
        selectedGame22Winner: '',
        selectedGame23Winner: '',
        selectedGame24Winner: '',
        selectedGame25Winner: '',
        selectedGame26Winner: '',
        selectedGame27Winner: '',
        selectedGame28Winner: '',
        selectedGame29Winner: '',
        selectedGame30Winner: '',
        selectedGame31Winner: '',
        selectedGame32Winner: '',
        selectedGame33Winner: '',
        selectedGame34Winner: '',
        selectedGame35Winner: '',
        selectedGame36Winner: '',
        selectedGame37Winner: '',
        selectedGame38Winner: '',
        selectedGame39Winner: '',
        selectedGame40Winner: '',
        selectedGame41Winner: '',
        selectedGame42Winner: '',
        selectedGame43Winner: '',
        selectedGame44Winner: '',
        selectedGame45Winner: '',
        selectedGame46Winner: '',
        selectedGame47Winner: '',
        selectedGame48Winner: '',
        selectedGame49Winner: '',
        selectedGame50Winner: '',
        selectedGame51Winner: '',
        selectedGame52Winner: '',
        selectedGame53Winner: '',
        selectedGame54Winner: '',
        selectedGame55Winner: '',
        selectedGame56Winner: '',
        selectedGame57Winner: '',
        selectedGame58Winner: '',
        selectedGame59Winner: '',
        selectedGame60Winner: '',
        selectedGame61Winner: '',
        selectedGame62Winner: '',
        selectedGame63Winner: '',
        selectedGame64Winner: '',
        newBracketName: '',
        bracketScore: 0
      };
      this.handleGame1Selection = this.handleGame1Selection.bind(this);
      this.handleGame2Selection = this.handleGame2Selection.bind(this);
      this.handleGame3Selection = this.handleGame3Selection.bind(this);
      this.handleGame4Selection = this.handleGame4Selection.bind(this);
      this.handleGame5Selection = this.handleGame5Selection.bind(this);
      this.handleGame6Selection = this.handleGame6Selection.bind(this);
      this.handleGame7Selection = this.handleGame7Selection.bind(this);
      this.handleGame8Selection = this.handleGame8Selection.bind(this);
      this.handleGame9Selection = this.handleGame9Selection.bind(this);
      this.handleGame10Selection = this.handleGame10Selection.bind(this);
      this.handleGame11Selection = this.handleGame11Selection.bind(this);
      this.handleGame12Selection = this.handleGame12Selection.bind(this);
      this.handleGame13Selection = this.handleGame13Selection.bind(this);
      this.handleGame14Selection = this.handleGame14Selection.bind(this);
      this.handleGame15Selection = this.handleGame15Selection.bind(this);
      this.handleGame16Selection = this.handleGame16Selection.bind(this);
      this.handleGame17Selection = this.handleGame17Selection.bind(this);
      this.handleGame18Selection = this.handleGame18Selection.bind(this);
      this.handleGame19Selection = this.handleGame19Selection.bind(this);
      this.handleGame20Selection = this.handleGame20Selection.bind(this);
      this.handleGame21Selection = this.handleGame21Selection.bind(this);
      this.handleGame22Selection = this.handleGame22Selection.bind(this);
      this.handleGame23Selection = this.handleGame23Selection.bind(this);
      this.handleGame24Selection = this.handleGame24Selection.bind(this);
      this.handleGame25Selection = this.handleGame25Selection.bind(this);
      this.handleGame26Selection = this.handleGame26Selection.bind(this);
      this.handleGame27Selection = this.handleGame27Selection.bind(this);
      this.handleGame28Selection = this.handleGame28Selection.bind(this);
      this.handleGame29Selection = this.handleGame29Selection.bind(this);
      this.handleGame30Selection = this.handleGame30Selection.bind(this);
      this.handleGame31Selection = this.handleGame31Selection.bind(this);
      this.handleGame32Selection = this.handleGame32Selection.bind(this);
      this.handleGame33Selection = this.handleGame33Selection.bind(this);
      this.handleGame34Selection = this.handleGame34Selection.bind(this);
      this.handleGame35Selection = this.handleGame35Selection.bind(this);
      this.handleGame36Selection = this.handleGame36Selection.bind(this);
      this.handleGame37Selection = this.handleGame37Selection.bind(this);
      this.handleGame38Selection = this.handleGame38Selection.bind(this);
      this.handleGame39Selection = this.handleGame39Selection.bind(this);
      this.handleGame40Selection = this.handleGame40Selection.bind(this);
      this.handleGame41Selection = this.handleGame41Selection.bind(this);
      this.handleGame42Selection = this.handleGame42Selection.bind(this);
      this.handleGame43Selection = this.handleGame43Selection.bind(this);
      this.handleGame44Selection = this.handleGame44Selection.bind(this);
      this.handleGame45Selection = this.handleGame45Selection.bind(this);
      this.handleGame46Selection = this.handleGame46Selection.bind(this);
      this.handleGame47Selection = this.handleGame47Selection.bind(this);
      this.handleGame48Selection = this.handleGame48Selection.bind(this);
      this.handleGame49Selection = this.handleGame49Selection.bind(this);
      this.handleGame50Selection = this.handleGame50Selection.bind(this);
      this.handleGame51Selection = this.handleGame51Selection.bind(this);
      this.handleGame52Selection = this.handleGame52Selection.bind(this);
      this.handleGame53Selection = this.handleGame53Selection.bind(this);
      this.handleGame54Selection = this.handleGame54Selection.bind(this);
      this.handleGame55Selection = this.handleGame55Selection.bind(this);
      this.handleGame56Selection = this.handleGame56Selection.bind(this);
      this.handleGame57Selection = this.handleGame57Selection.bind(this);
      this.handleGame58Selection = this.handleGame58Selection.bind(this);
      this.handleGame59Selection = this.handleGame59Selection.bind(this);
      this.handleGame60Selection = this.handleGame60Selection.bind(this);
      this.handleGame61Selection = this.handleGame61Selection.bind(this);
      this.handleGame62Selection = this.handleGame62Selection.bind(this);
      this.handleGame63Selection = this.handleGame63Selection.bind(this);
      this.handleNewBracketName = this.handleNewBracketName.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleGame1Selection(event) {
      this.setState({ selectedGame1Winner: event.target.value })
    }

    handleGame2Selection(event) {
      this.setState({ selectedGame2Winner: event.target.value })
    }

    handleGame3Selection(event) {
      this.setState({ selectedGame3Winner: event.target.value })
    }

    handleGame4Selection(event) {
      this.setState({ selectedGame4Winner: event.target.value })
    }

    handleGame5Selection(event) {
      this.setState({ selectedGame5Winner: event.target.value})
    }

    handleGame6Selection(event) {
      this.setState({ selectedGame6Winner: event.target.value })
    }

    handleGame7Selection(event) {
      this.setState({ selectedGame7Winner: event.target.value })
    }

    handleGame8Selection(event) {
      this.setState({ selectedGame8Winner: event.target.value })
    }

    handleGame9Selection(event) {
      this.setState({ selectedGame9Winner: event.target.value })
    }

    handleGame10Selection(event) {
      this.setState({ selectedGame10Winner: event.target.value })
    }

    handleGame11Selection(event) {
      this.setState({ selectedGame11Winner: event.target.value })
    }

    handleGame12Selection(event) {
      this.setState({ selectedGame12Winner: event.target.value })
    }

    handleGame13Selection(event) {
      this.setState({ selectedGame13Winner: event.target.value })
    }

    handleGame14Selection(event) {
      this.setState({ selectedGame14Winner: event.target.value })
    }

    handleGame15Selection(event) {
      this.setState({ selectedGame15Winner: event.target.value })
    }

    handleGame16Selection(event) {
      this.setState({ selectedGame16Winner: event.target.value })
    }

    handleGame17Selection(event) {
      this.setState({ selectedGame17Winner: event.target.value })
    }

    handleGame18Selection(event) {
      this.setState({ selectedGame18Winner: event.target.value })
    }

    handleGame19Selection(event) {
      this.setState({ selectedGame19Winner: event.target.value })
    }

    handleGame20Selection(event) {
      this.setState({ selectedGame20Winner: event.target.value })
    }

    handleGame21Selection(event) {
      this.setState({ selectedGame21Winner: event.target.value })
    }

    handleGame22Selection(event) {
      this.setState({ selectedGame22Winner: event.target.value })
    }

    handleGame23Selection(event) {
      this.setState({ selectedGame23Winner: event.target.value })
    }

    handleGame23Selection(event) {
      this.setState({ selectedGame23Winner: event.target.value })
    }

    handleGame24Selection(event) {
      this.setState({ selectedGame24Winner: event.target.value })
    }

    handleGame25Selection(event) {
      this.setState({ selectedGame25Winner: event.target.value })
    }

    handleGame26Selection(event) {
      this.setState({ selectedGame26Winner: event.target.value })
    }

    handleGame27Selection(event) {
      this.setState({ selectedGame27Winner: event.target.value })
    }

    handleGame28Selection(event) {
      this.setState({ selectedGame28Winner: event.target.value })
    }

    handleGame29Selection(event) {
      this.setState({ selectedGame29Winner: event.target.value })
    }

    handleGame30Selection(event) {
      this.setState({ selectedGame30Winner: event.target.value })
    }

    handleGame31Selection(event) {
      this.setState({ selectedGame31Winner: event.target.value })
    }

    handleGame32Selection(event) {
      this.setState({ selectedGame32Winner: event.target.value })
    }

    handleGame33Selection(event) {
      this.setState({ selectedGame33Winner: event.target.value })
    }

    handleGame34Selection(event) {
      this.setState({ selectedGame34Winner: event.target.value })
    }

    handleGame35Selection(event) {
      this.setState({ selectedGame35Winner: event.target.value })
    }

    handleGame36Selection(event) {
      this.setState({ selectedGame36Winner: event.target.value })
    }

    handleGame37Selection(event) {
      this.setState({ selectedGame37Winner: event.target.value })
    }

    handleGame38Selection(event) {
      this.setState({ selectedGame38Winner: event.target.value })
    }

    handleGame39Selection(event) {
      this.setState({ selectedGame39Winner: event.target.value })
    }

    handleGame40Selection(event) {
      this.setState({ selectedGame40Winner: event.target.value })
    }

    handleGame41Selection(event) {
      this.setState({ selectedGame41Winner: event.target.value })
    }

    handleGame42Selection(event) {
      this.setState({ selectedGame42Winner: event.target.value })
    }

    handleGame43Selection(event) {
      this.setState({ selectedGame43Winner: event.target.value })
    }

    handleGame44Selection(event) {
      this.setState({ selectedGame44Winner: event.target.value })
    }

    handleGame45Selection(event) {
      this.setState({ selectedGame45Winner: event.target.value })
    }

    handleGame46Selection(event) {
      this.setState({ selectedGame46Winner: event.target.value })
    }

    handleGame47Selection(event) {
      this.setState({ selectedGame47Winner: event.target.value })
    }

    handleGame48Selection(event) {
      this.setState({ selectedGame48Winner: event.target.value })
    }

    handleGame49Selection(event) {
      this.setState({ selectedGame49Winner: event.target.value })
    }

    handleGame50Selection(event) {
      this.setState({ selectedGame50Winner: event.target.value })
    }

    handleGame51Selection(event) {
      this.setState({ selectedGame51Winner: event.target.value })
    }

    handleGame52Selection(event) {
      this.setState({ selectedGame52Winner: event.target.value })
    }

    handleGame53Selection(event) {
      this.setState({ selectedGame53Winner: event.target.value })
    }

    handleGame54Selection(event) {
      this.setState({ selectedGame54Winner: event.target.value })
    }

    handleGame55Selection(event) {
      this.setState({ selectedGame55Winner: event.target.value })
    }

    handleGame56Selection(event) {
      this.setState({ selectedGame56Winner: event.target.value })
    }

    handleGame57Selection(event) {
      this.setState({ selectedGame57Winner: event.target.value })
    }

    handleGame58Selection(event) {
      this.setState({ selectedGame58Winner: event.target.value })
    }

    handleGame59Selection(event) {
      this.setState({ selectedGame59Winner: event.target.value })
    }

    handleGame60Selection(event) {
      this.setState({ selectedGame60Winner: event.target.value })
    }

    handleGame61Selection(event) {
      this.setState({ selectedGame61Winner: event.target.value })
    }

    handleGame62Selection(event) {
      this.setState({ selectedGame62Winner: event.target.value })
    }

    handleGame63Selection(event) {
      this.setState({ selectedGame63Winner: event.target.value })
    }

    handleNewBracketName(event) {
      this.setState({ newBracketName: event.target.value })
    }

    handleFormSubmit(event) {
      event.preventDefault();
      let formPayload = {
        user_id:  this.state.currentUserId,
        name: this.state.newBracketName,
        game_1_winner: this.state.selectedGame1Winner,
        game_2_winner: this.state.selectedGame2Winner,
        game_3_winner: this.state.selectedGame3Winner,
        game_4_winner: this.state.selectedGame4Winner,
        game_5_winner: this.state.selectedGame5Winner,
        game_6_winner: this.state.selectedGame6Winner,
        game_7_winner: this.state.selectedGame7Winner,
        game_8_winner: this.state.selectedGame8Winner,
        game_9_winner: this.state.selectedGame9Winner,
        game_10_winner: this.state.selectedGame10Winner,
        game_11_winner: this.state.selectedGame11Winner,
        game_12_winner: this.state.selectedGame12Winner,
        game_13_winner: this.state.selectedGame13Winner,
        game_14_winner: this.state.selectedGame14Winner,
        game_15_winner: this.state.selectedGame15Winner,
        game_16_winner: this.state.selectedGame16Winner,
        game_17_winner: this.state.selectedGame17Winner,
        game_18_winner: this.state.selectedGame18Winner,
        game_19_winner: this.state.selectedGame19Winner,
        game_20_winner: this.state.selectedGame20Winner,
        game_21_winner: this.state.selectedGame21Winner,
        game_22_winner: this.state.selectedGame22Winner,
        game_23_winner: this.state.selectedGame23Winner,
        game_24_winner: this.state.selectedGame24Winner,
        game_25_winner: this.state.selectedGame25Winner,
        game_26_winner: this.state.selectedGame26Winner,
        game_27_winner: this.state.selectedGame27Winner,
        game_28_winner: this.state.selectedGame28Winner,
        game_29_winner: this.state.selectedGame29Winner,
        game_30_winner: this.state.selectedGame30Winner,
        game_31_winner: this.state.selectedGame31Winner,
        game_32_winner: this.state.selectedGame32Winner,
        game_33_winner: this.state.selectedGame33Winner,
        game_34_winner: this.state.selectedGame34Winner,
        game_35_winner: this.state.selectedGame35Winner,
        game_36_winner: this.state.selectedGame36Winner,
        game_37_winner: this.state.selectedGame37Winner,
        game_38_winner: this.state.selectedGame38Winner,
        game_39_winner: this.state.selectedGame39Winner,
        game_40_winner: this.state.selectedGame40Winner,
        game_41_winner: this.state.selectedGame41Winner,
        game_42_winner: this.state.selectedGame42Winner,
        game_43_winner: this.state.selectedGame43Winner,
        game_44_winner: this.state.selectedGame44Winner,
        game_45_winner: this.state.selectedGame45Winner,
        game_46_winner: this.state.selectedGame46Winner,
        game_47_winner: this.state.selectedGame47Winner,
        game_48_winner: this.state.selectedGame48Winner,
        game_49_winner: this.state.selectedGame49Winner,
        game_50_winner: this.state.selectedGame50Winner,
        game_51_winner: this.state.selectedGame51Winner,
        game_52_winner: this.state.selectedGame52Winner,
        game_53_winner: this.state.selectedGame53Winner,
        game_54_winner: this.state.selectedGame54Winner,
        game_55_winner: this.state.selectedGame55Winner,
        game_56_winner: this.state.selectedGame56Winner,
        game_57_winner: this.state.selectedGame57Winner,
        game_58_winner: this.state.selectedGame58Winner,
        game_59_winner: this.state.selectedGame59Winner,
        game_60_winner: this.state.selectedGame60Winner,
        game_61_winner: this.state.selectedGame61Winner,
        game_62_winner: this.state.selectedGame62Winner,
        game_63_winner: this.state.selectedGame63Winner
      }
      let jsonPayload = JSON.stringify(formPayload);
      fetch(`api/v1/brackets`, {
        method: 'POST',
        body: jsonPayload,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'},
        credentials: 'same-origin'
        })
        .then(response => response.json())
        .then(body => {
          swal(body.title, body.text, body.type)
          browserHistory.push(`/users`)
        })
        .catch(error => console.error(`Error in fetch: ${error.messaage}`));
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
          team50: body[0].team_50,
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

    fetch('api/v1/users')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`
              erorr = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          currentUserId: body.id,
          currentUserName: body.user_name
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render () {
    // console.log(`bracket name: ${this.state.newBracketName}`)
    // console.log(`game 1 winner is: ${this.state.selectedGame1Winner}`)
    // console.log(`game 63 winner is ${this.state.selectedGame63Winner}`)
    return(

      <form onSubmit={this.handleFormSubmit}>

        <div>

          <BracketName
            newBracketName={this.state.newBracketName}
            handleNewBracketName={this.handleNewBracketName}
            bracketScore={this.state.bracketScore}
          />

          <div className="row fullWidth">
            <div className="bannerTitle">
              <h1>SOUTH</h1>
            </div>
          </div>

          <div className="row fullWidth">
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.team1}
                awayTeam={this.state.team2}
                name="game1"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame1Winner}
                handleOptionChange={this.handleGame1Selection}
              />
              <Bracket
                homeTeam={this.state.team3}
                awayTeam={this.state.team4}
                name="game2"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame2Winner}
                handleOptionChange={this.handleGame2Selection}
              />
              <Bracket
                homeTeam={this.state.team5}
                awayTeam={this.state.team6}
                name="game3"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame3Winner}
                handleOptionChange={this.handleGame3Selection}
              />
              <Bracket
                homeTeam={this.state.team7}
                awayTeam={this.state.team8}
                name="game4"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame4Winner}
                handleOptionChange={this.handleGame4Selection}
              />
              <Bracket
                homeTeam={this.state.team9}
                awayTeam={this.state.team10}
                name="game5"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame5Winner}
                handleOptionChange={this.handleGame5Selection}
              />
              <Bracket
                homeTeam={this.state.team11}
                awayTeam={this.state.team12}
                name="game6"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame6Winner}
                handleOptionChange={this.handleGame6Selection}
              />
              <Bracket
                homeTeam={this.state.team13}
                awayTeam={this.state.team14}
                name="game7"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame7Winner}
                handleOptionChange={this.handleGame7Selection}
              />
              <Bracket
                homeTeam={this.state.team15}
                awayTeam={this.state.team16}
                name="game8"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame8Winner}
                handleOptionChange={this.handleGame8Selection}
              />
            </div>
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.selectedGame1Winner}
                awayTeam={this.state.selectedGame2Winner}
                name="game33"
                round="round2"
                region="south"
                selectedGameWinner={this.state.selectedGame33Winner}
                handleOptionChange={this.handleGame33Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame3Winner}
                awayTeam={this.state.selectedGame4Winner}
                name="game34"
                round="round2"
                region="south"
                selectedGameWinner={this.state.selectedGame34Winner}
                handleOptionChange={this.handleGame34Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame5Winner}
                awayTeam={this.state.selectedGame6Winner}
                name="game35"
                round="round2"
                region="south"
                selectedGameWinner={this.state.selectedGame35Winner}
                handleOptionChange={this.handleGame35Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame7Winner}
                awayTeam={this.state.selectedGame8Winner}
                name="game36"
                round="round2"
                region="south"
                selectedGameWinner={this.state.selectedGame36Winner}
                handleOptionChange={this.handleGame36Selection}
              />
            </div>
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.selectedGame33Winner}
                awayTeam={this.state.selectedGame34Winner}
                name="game49"
                round="round3"
                region="south"
                selectedGameWinner={this.state.selectedGame49Winner}
                handleOptionChange={this.handleGame49Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame35Winner}
                awayTeam={this.state.selectedGame36Winner}
                name="game50"
                round="round3"
                region="south"
                selectedGameWinner={this.state.selectedGame50Winner}
                handleOptionChange={this.handleGame50Selection}
              />
            </div>
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.selectedGame49Winner}
                awayTeam={this.state.selectedGame50Winner}
                name="game57"
                round="round4"
                region="south"
                selectedGameWinner={this.state.selectedGame57Winner}
                handleOptionChange={this.handleGame57Selection}
              />
            </div>
          </div>

          <div className="row fullWidth">
            <div className="bannerTitle">
              <h1>WEST</h1>
            </div>
          </div>

          <div className="row fullWidth">
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.team17}
                awayTeam={this.state.team18}
                name="game9"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame9Winner}
                handleOptionChange={this.handleGame9Selection}
              />
              <Bracket
                homeTeam={this.state.team19}
                awayTeam={this.state.team20}
                name="game10"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame10Winner}
                handleOptionChange={this.handleGame10Selection}
              />
              <Bracket
                homeTeam={this.state.team21}
                awayTeam={this.state.team22}
                name="game11"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame11Winner}
                handleOptionChange={this.handleGame11Selection}
              />
              <Bracket
                homeTeam={this.state.team23}
                awayTeam={this.state.team24}
                name="game12"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame12Winner}
                handleOptionChange={this.handleGame12Selection}
              />
              <Bracket
                homeTeam={this.state.team25}
                awayTeam={this.state.team26}
                name="game13"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame13Winner}
                handleOptionChange={this.handleGame13Selection}
              />
              <Bracket
                homeTeam={this.state.team27}
                awayTeam={this.state.team28}
                name="game14"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame14Winner}
                handleOptionChange={this.handleGame14Selection}
              />
              <Bracket
                homeTeam={this.state.team29}
                awayTeam={this.state.team30}
                name="game15"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame15Winner}
                handleOptionChange={this.handleGame15Selection}
              />
              <Bracket
                homeTeam={this.state.team31}
                awayTeam={this.state.team32}
                name="game16"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame16Winner}
                handleOptionChange={this.handleGame16Selection}
              />
            </div>
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.selectedGame9Winner}
                awayTeam={this.state.selectedGame10Winner}
                name="game37"
                round="round2"
                region="west"
                selectedGameWinner={this.state.selectedGame37Winner}
                handleOptionChange={this.handleGame37Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame11Winner}
                awayTeam={this.state.selectedGame12Winner}
                name="game38"
                round="round2"
                region="west"
                selectedGameWinner={this.state.selectedGame38Winner}
                handleOptionChange={this.handleGame38Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame13Winner}
                awayTeam={this.state.selectedGame14Winner}
                name="game39"
                round="round2"
                region="west"
                selectedGameWinner={this.state.selectedGame39Winner}
                handleOptionChange={this.handleGame39Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame15Winner}
                awayTeam={this.state.selectedGame16Winner}
                name="game40"
                round="round2"
                region="west"
                selectedGameWinner={this.state.selectedGame40Winner}
                handleOptionChange={this.handleGame40Selection}
              />
            </div>
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.selectedGame37Winner}
                awayTeam={this.state.selectedGame38Winner}
                name="game51"
                round="round3"
                region="west"
                selectedGameWinner={this.state.selectedGame51Winner}
                handleOptionChange={this.handleGame51Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame39Winner}
                awayTeam={this.state.selectedGame40Winner}
                name="game52"
                round="round3"
                region="west"
                selectedGameWinner={this.state.selectedGame52Winner}
                handleOptionChange={this.handleGame52Selection}
              />
            </div>
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.selectedGame51Winner}
                awayTeam={this.state.selectedGame52Winner}
                name="game58"
                round="round4"
                region="west"
                selectedGameWinner={this.state.selectedGame58Winner}
                handleOptionChange={this.handleGame58Selection}
              />
            </div>
          </div>

          <div className="row fullWidth">
            <div className="bannerTitle">
              <h1>EAST</h1>
            </div>
          </div>

          <div className="row fullWidth">
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.team33}
                awayTeam={this.state.team34}
                name="game17"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame17Winner}
                handleOptionChange={this.handleGame17Selection}
              />
              <Bracket
                homeTeam={this.state.team35}
                awayTeam={this.state.team36}
                name="game218"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame18Winner}
                handleOptionChange={this.handleGame18Selection}
              />
              <Bracket
                homeTeam={this.state.team37}
                awayTeam={this.state.team38}
                name="game19"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame19Winner}
                handleOptionChange={this.handleGame19Selection}
              />
              <Bracket
                homeTeam={this.state.team39}
                awayTeam={this.state.team40}
                name="game20"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame20Winner}
                handleOptionChange={this.handleGame20Selection}
              />
              <Bracket
                homeTeam={this.state.team41}
                awayTeam={this.state.team42}
                name="game21"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame21Winner}
                handleOptionChange={this.handleGame21Selection}
              />
              <Bracket
                homeTeam={this.state.team43}
                awayTeam={this.state.team44}
                name="game22"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame22Winner}
                handleOptionChange={this.handleGame22Selection}
              />
              <Bracket
                homeTeam={this.state.team45}
                awayTeam={this.state.team46}
                name="game23"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame23Winner}
                handleOptionChange={this.handleGame23Selection}
              />
              <Bracket
                homeTeam={this.state.team47}
                awayTeam={this.state.team48}
                name="game24"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame24Winner}
                handleOptionChange={this.handleGame24Selection}
              />
            </div>
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.selectedGame17Winner}
                awayTeam={this.state.selectedGame18Winner}
                name="game41"
                round="round2"
                region="east"
                selectedGameWinner={this.state.selectedGame41Winner}
                handleOptionChange={this.handleGame41Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame19Winner}
                awayTeam={this.state.selectedGame20Winner}
                name="game42"
                round="round2"
                region="east"
                selectedGameWinner={this.state.selectedGame42Winner}
                handleOptionChange={this.handleGame42Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame21Winner}
                awayTeam={this.state.selectedGame22Winner}
                name="game43"
                round="round2"
                region="east"
                selectedGameWinner={this.state.selectedGame43Winner}
                handleOptionChange={this.handleGame43Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame23Winner}
                awayTeam={this.state.selectedGame24Winner}
                name="game44"
                round="round2"
                region="east"
                selectedGameWinner={this.state.selectedGame44Winner}
                handleOptionChange={this.handleGame44Selection}
              />
            </div>
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.selectedGame41Winner}
                awayTeam={this.state.selectedGame42Winner}
                name="game53"
                round="round3"
                region="east"
                selectedGameWinner={this.state.selectedGame53Winner}
                handleOptionChange={this.handleGame53Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame43Winner}
                awayTeam={this.state.selectedGame44Winner}
                name="game54"
                round="round3"
                region="east"
                selectedGameWinner={this.state.selectedGame54Winner}
                handleOptionChange={this.handleGame54Selection}
              />
            </div>
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.selectedGame53Winner}
                awayTeam={this.state.selectedGame54Winner}
                name="game59"
                round="round4"
                region="east"
                selectedGameWinner={this.state.selectedGame59Winner}
                handleOptionChange={this.handleGame59Selection}
              />
            </div>
          </div>

          <div className="row fullWidth">
            <div className="bannerTitle">
              <h1>MIDWEST</h1>
            </div>
          </div>

          <div className="row fullWidth">
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.team49}
                awayTeam={this.state.team50}
                name="game25"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame25Winner}
                handleOptionChange={this.handleGame25Selection}
              />
              <Bracket
                homeTeam={this.state.team51}
                awayTeam={this.state.team52}
                name="game26"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame26Winner}
                handleOptionChange={this.handleGame26Selection}
              />
              <Bracket
                homeTeam={this.state.team53}
                awayTeam={this.state.team54}
                name="game27"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame27Winner}
                handleOptionChange={this.handleGame27Selection}
              />
              <Bracket
                homeTeam={this.state.team55}
                awayTeam={this.state.team56}
                name="game28"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame28Winner}
                handleOptionChange={this.handleGame28Selection}
              />
              <Bracket
                homeTeam={this.state.team57}
                awayTeam={this.state.team58}
                name="game29"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame29Winner}
                handleOptionChange={this.handleGame29Selection}
              />
              <Bracket
                homeTeam={this.state.team59}
                awayTeam={this.state.team60}
                name="game30"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame30Winner}
                handleOptionChange={this.handleGame30Selection}
              />
              <Bracket
                homeTeam={this.state.team61}
                awayTeam={this.state.team62}
                name="game31"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame31Winner}
                handleOptionChange={this.handleGame31Selection}
              />
              <Bracket
                homeTeam={this.state.team63}
                awayTeam={this.state.team64}
                name="game32"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame32Winner}
                handleOptionChange={this.handleGame32Selection}
              />
            </div>
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.selectedGame25Winner}
                awayTeam={this.state.selectedGame26Winner}
                name="game45"
                round="round2"
                region="midwest"
                selectedGameWinner={this.state.selectedGame45Winner}
                handleOptionChange={this.handleGame45Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame27Winner}
                awayTeam={this.state.selectedGame28Winner}
                name="game46"
                round="round2"
                region="midwest"
                selectedGameWinner={this.state.selectedGame46Winner}
                handleOptionChange={this.handleGame46Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame29Winner}
                awayTeam={this.state.selectedGame30Winner}
                name="game47"
                round="round2"
                region="midwest"
                selectedGameWinner={this.state.selectedGame47Winner}
                handleOptionChange={this.handleGame47Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame31Winner}
                awayTeam={this.state.selectedGame32Winner}
                name="game48"
                round="round2"
                region="midwest"
                selectedGameWinner={this.state.selectedGame48Winner}
                handleOptionChange={this.handleGame48Selection}
              />
            </div>
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.selectedGame45Winner}
                awayTeam={this.state.selectedGame46Winner}
                name="game55"
                round="round3"
                region="midwest"
                selectedGameWinner={this.state.selectedGame55Winner}
                handleOptionChange={this.handleGame55Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame47Winner}
                awayTeam={this.state.selectedGame48Winner}
                name="game56"
                round="round3"
                region="midwest"
                selectedGameWinner={this.state.selectedGame56Winner}
                handleOptionChange={this.handleGame56Selection}
              />
            </div>
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.selectedGame55Winner}
                awayTeam={this.state.selectedGame56Winner}
                name="game60"
                round="round4"
                region="midwest"
                selectedGameWinner={this.state.selectedGame60Winner}
                handleOptionChange={this.handleGame60Selection}
              />
            </div>
          </div>

          <div className="row fullWidth">
            <div className="bannerTitle">
              <h1>THE FINAL FOUR</h1>
            </div>
          </div>

          <div className="row fullWidth">
            <div className="small-4 columns">
              <BracketFinalFour
                homeTeam={this.state.selectedGame57Winner}
                awayTeam={this.state.selectedGame58Winner}
                name="game61"
                round="finalFour"
                regionHome="south"
                regionAway="west"
                selectedGameWinner={this.state.selectedGame61Winner}
                handleOptionChange={this.handleGame61Selection}
              />
              <BracketFinalFour
                homeTeam={this.state.selectedGame59Winner}
                awayTeam={this.state.selectedGame60Winner}
                name="game62"
                round="finalFour"
                regionHome="east"
                regionAway="midwest"
                selectedGameWinner={this.state.selectedGame62Winner}
                handleOptionChange={this.handleGame62Selection}
              />
            </div>
            <div className="small-4 columns">
              <BracketFinalFour
                homeTeam={this.state.selectedGame61Winner}
                awayTeam={this.state.selectedGame62Winner}
                name="game63"
                round="finals"
                selectedGameWinner={this.state.selectedGame63Winner}
                handleOptionChange={this.handleGame63Selection}
              />
            </div>
            <div className="small-4 columns">
              <BracketWinner
                round="finals"
                region="finalist"
                winner={this.state.selectedGame63Winner}
              />
            </div>
          </div>


          <button className="bannerTitleStyleButton"
            type="submit"
            name="submit"
            value="Save New Bracket"
            >Save New Bracket
          </button>

        </div>

      </form>
    )
  }
}
export default BracketForm;
