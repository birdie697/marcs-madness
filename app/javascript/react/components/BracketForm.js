import React from 'react';
import { browserHistory } from 'react-router';
import swal from 'sweetalert';
import Bracket from '../components/Bracket';
import BracketFinalFour from '../components/BracketFinalFour';
import BracketWinner from '../components/BracketWinner';
import BracketName from '../components/BracketName';
import { validateBracketNameNotBlank,
         validateBracketNameNoDuplicate,
         validateGameSelection } from '../lib/validators';

class BracketForm extends React.Component {
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
        bracketName: '',
        bracketNames: {},
        bracketScore: 0,
        errors: {}
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
      this.handleBracketName = this.handleBracketName.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.doNothing = this.doNothing.bind(this);
    }

    doNothing() {
      swal({
        title: "View Only",
        text: "Please click the 'EDIT' icon to make changes",
        icon: "warning",
        dangerMode: true
      })
      .then(
        browserHistory.push(`/users/${window.currentUser.id}`)
      )

    }

    handleGame1Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame1Winner: event.target.value })
      }
    }

    handleGame2Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame2Winner: event.target.value })
      }
    }

    handleGame3Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame3Winner: event.target.value })
      }
    }

    handleGame4Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame4Winner: event.target.value })
      }
    }

    handleGame5Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame5Winner: event.target.value})
      }
    }

    handleGame6Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame6Winner: event.target.value })
      }
    }

    handleGame7Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame7Winner: event.target.value })
      }
    }

    handleGame8Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame8Winner: event.target.value })
      }
    }

    handleGame9Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame9Winner: event.target.value })
      }
    }

    handleGame10Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame10Winner: event.target.value })
      }
    }

    handleGame11Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame11Winner: event.target.value })
      }
    }

    handleGame12Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame12Winner: event.target.value })
      }
    }

    handleGame13Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame13Winner: event.target.value })
      }
    }

    handleGame14Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame14Winner: event.target.value })
      }
    }

    handleGame15Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame15Winner: event.target.value })
      }
    }

    handleGame16Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame16Winner: event.target.value })
      }
    }

    handleGame17Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame17Winner: event.target.value })
      }
    }

    handleGame18Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame18Winner: event.target.value })
      }
    }

    handleGame19Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame19Winner: event.target.value })
      }
    }

    handleGame20Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame20Winner: event.target.value })
      }
    }

    handleGame21Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame21Winner: event.target.value })
      }
    }

    handleGame22Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame22Winner: event.target.value })
      }
    }

    handleGame23Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame23Winner: event.target.value })
      }
    }

    handleGame23Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame23Winner: event.target.value })
      }
    }

    handleGame24Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame24Winner: event.target.value })
      }
    }

    handleGame25Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame25Winner: event.target.value })
      }
    }

    handleGame26Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame26Winner: event.target.value })
      }
    }

    handleGame27Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame27Winner: event.target.value })
      }
    }

    handleGame28Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame28Winner: event.target.value })
      }
    }

    handleGame29Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame29Winner: event.target.value })
      }
    }

    handleGame30Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame30Winner: event.target.value })
      }
    }

    handleGame31Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame31Winner: event.target.value })
      }
    }

    handleGame32Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame32Winner: event.target.value })
      }
    }

    handleGame33Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame33Winner: event.target.value })
      }
    }

    handleGame34Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame34Winner: event.target.value })
      }
    }

    handleGame35Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame35Winner: event.target.value })
      }
    }

    handleGame36Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame36Winner: event.target.value })
      }
    }

    handleGame37Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame37Winner: event.target.value })
      }
    }

    handleGame38Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame38Winner: event.target.value })
      }
    }

    handleGame39Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame39Winner: event.target.value })
      }
    }

    handleGame40Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame40Winner: event.target.value })
      }
    }

    handleGame41Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame41Winner: event.target.value })
      }
    }

    handleGame42Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame42Winner: event.target.value })
      }
    }

    handleGame43Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame43Winner: event.target.value })
      }
    }

    handleGame44Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame44Winner: event.target.value })
      }
    }

    handleGame45Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame45Winner: event.target.value })
      }
    }

    handleGame46Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame46Winner: event.target.value })
      }
    }

    handleGame47Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame47Winner: event.target.value })
      }
    }

    handleGame48Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame48Winner: event.target.value })
      }
    }

    handleGame49Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame49Winner: event.target.value })
      }
    }

    handleGame50Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame50Winner: event.target.value })
      }
    }

    handleGame51Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame51Winner: event.target.value })
      }
    }

    handleGame52Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame52Winner: event.target.value })
      }
    }

    handleGame53Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame53Winner: event.target.value })
      }
    }

    handleGame54Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame54Winner: event.target.value })
      }
    }

    handleGame55Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame55Winner: event.target.value })
      }
    }

    handleGame56Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame56Winner: event.target.value })
      }
    }

    handleGame57Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame57Winner: event.target.value })
      }
    }

    handleGame58Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame58Winner: event.target.value })
      }
    }

    handleGame59Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame59Winner: event.target.value })
      }
    }

    handleGame60Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame60Winner: event.target.value })
      }
    }

    handleGame61Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame61Winner: event.target.value })
      }
    }

    handleGame62Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame62Winner: event.target.value })
      }
    }

    handleGame63Selection(event) {
      if (this.props.formType !== 'show') {
        this.setState({ selectedGame63Winner: event.target.value })
      }
    }

    handleBracketName(event) {
      validateBracketNameNotBlank(this.state.bracketName, this)
      validateBracketNameNoDuplicate(this.state.bracketName, this.state.bracketNames, this.props.backetId, this.props.formType, this)
      this.setState({ bracketName: event.target.value })
    }



    handleFormSubmit(event) {
      event.preventDefault();
      if (
        validateBracketNameNotBlank(this.state.bracketName, this) &&
        validateBracketNameNoDuplicate(this.state.bracketName, this.state.bracketNames, this.props.bracketId, this.props.formType, this) &&
        validateGameSelection(this.state.selectedGame1Winner, 'game1', 'Game 1', this) &&
        validateGameSelection(this.state.selectedGame2Winner, 'game2', 'Game 2', this) &&
        validateGameSelection(this.state.selectedGame3Winner, 'game3', 'Game 3', this) &&
        validateGameSelection(this.state.selectedGame4Winner, 'game4', 'Game 4', this) &&
        validateGameSelection(this.state.selectedGame5Winner, 'game5', 'Game 5', this) &&
        validateGameSelection(this.state.selectedGame6Winner, 'game6', 'Game 6', this) &&
        validateGameSelection(this.state.selectedGame7Winner, 'game7', 'Game 7', this) &&
        validateGameSelection(this.state.selectedGame8Winner, 'game8', 'Game 8', this) &&
        validateGameSelection(this.state.selectedGame9Winner, 'game9', 'Game 9', this) &&
        validateGameSelection(this.state.selectedGame10Winner, 'game10', 'Game 10', this) &&
        validateGameSelection(this.state.selectedGame11Winner, 'game11', 'Game 11', this) &&
        validateGameSelection(this.state.selectedGame12Winner, 'game12', 'Game 12', this) &&
        validateGameSelection(this.state.selectedGame13Winner, 'game13', 'Game 13', this) &&
        validateGameSelection(this.state.selectedGame14Winner, 'game14', 'Game 14', this) &&
        validateGameSelection(this.state.selectedGame15Winner, 'game15', 'Game 15', this) &&
        validateGameSelection(this.state.selectedGame16Winner, 'game16', 'Game 16', this) &&
        validateGameSelection(this.state.selectedGame17Winner, 'game17', 'Game 17', this) &&
        validateGameSelection(this.state.selectedGame18Winner, 'game18', 'Game 18', this) &&
        validateGameSelection(this.state.selectedGame19Winner, 'game19', 'Game 19', this) &&
        validateGameSelection(this.state.selectedGame20Winner, 'game20', 'Game 20', this) &&
        validateGameSelection(this.state.selectedGame21Winner, 'game21', 'Game 21', this) &&
        validateGameSelection(this.state.selectedGame22Winner, 'game22', 'Game 22', this) &&
        validateGameSelection(this.state.selectedGame23Winner, 'game23', 'Game 23', this) &&
        validateGameSelection(this.state.selectedGame24Winner, 'game24', 'Game 24', this) &&
        validateGameSelection(this.state.selectedGame25Winner, 'game25', 'Game 25', this) &&
        validateGameSelection(this.state.selectedGame26Winner, 'game26', 'Game 26', this) &&
        validateGameSelection(this.state.selectedGame27Winner, 'game27', 'Game 27', this) &&
        validateGameSelection(this.state.selectedGame28Winner, 'game28', 'Game 28', this) &&
        validateGameSelection(this.state.selectedGame29Winner, 'game29', 'Game 29', this) &&
        validateGameSelection(this.state.selectedGame30Winner, 'game30', 'Game 30', this) &&
        validateGameSelection(this.state.selectedGame31Winner, 'game31', 'Game 31', this) &&
        validateGameSelection(this.state.selectedGame32Winner, 'game32', 'Game 32', this) &&
        validateGameSelection(this.state.selectedGame33Winner, 'game33', 'Game 33', this) &&
        validateGameSelection(this.state.selectedGame34Winner, 'game34', 'Game 34', this) &&
        validateGameSelection(this.state.selectedGame35Winner, 'game35', 'Game 35', this) &&
        validateGameSelection(this.state.selectedGame36Winner, 'game36', 'Game 36', this) &&
        validateGameSelection(this.state.selectedGame37Winner, 'game37', 'Game 37', this) &&
        validateGameSelection(this.state.selectedGame38Winner, 'game38', 'Game 38', this) &&
        validateGameSelection(this.state.selectedGame39Winner, 'game39', 'Game 39', this) &&
        validateGameSelection(this.state.selectedGame40Winner, 'game40', 'Game 40', this) &&
        validateGameSelection(this.state.selectedGame41Winner, 'game41', 'Game 41', this) &&
        validateGameSelection(this.state.selectedGame42Winner, 'game42', 'Game 42', this) &&
        validateGameSelection(this.state.selectedGame43Winner, 'game43', 'Game 43', this) &&
        validateGameSelection(this.state.selectedGame44Winner, 'game44', 'Game 44', this) &&
        validateGameSelection(this.state.selectedGame45Winner, 'game45', 'Game 45', this) &&
        validateGameSelection(this.state.selectedGame46Winner, 'game46', 'Game 46', this) &&
        validateGameSelection(this.state.selectedGame47Winner, 'game47', 'Game 47', this) &&
        validateGameSelection(this.state.selectedGame48Winner, 'game48', 'Game 48', this) &&
        validateGameSelection(this.state.selectedGame49Winner, 'game49', 'Game 49', this) &&
        validateGameSelection(this.state.selectedGame50Winner, 'game50', 'Game 50', this) &&
        validateGameSelection(this.state.selectedGame51Winner, 'game51', 'Game 51', this) &&
        validateGameSelection(this.state.selectedGame52Winner, 'game52', 'Game 52', this) &&
        validateGameSelection(this.state.selectedGame53Winner, 'game53', 'Game 53', this) &&
        validateGameSelection(this.state.selectedGame54Winner, 'game54', 'Game 54', this) &&
        validateGameSelection(this.state.selectedGame55Winner, 'game55', 'Game 55', this) &&
        validateGameSelection(this.state.selectedGame56Winner, 'game56', 'Game 56', this) &&
        validateGameSelection(this.state.selectedGame57Winner, 'game57', 'Game 57', this) &&
        validateGameSelection(this.state.selectedGame58Winner, 'game58', 'Game 58', this) &&
        validateGameSelection(this.state.selectedGame59Winner, 'game59', 'Game 59', this) &&
        validateGameSelection(this.state.selectedGame60Winner, 'game60', 'Game 60', this) &&
        validateGameSelection(this.state.selectedGame61Winner, 'game61', 'Game 61', this) &&
        validateGameSelection(this.state.selectedGame62Winner, 'game62', 'Game 62', this) &&
        validateGameSelection(this.state.selectedGame63Winner, 'game63', 'Game 63', this)
      ) {
      let formPayload = {
        user_id:  parseInt(`${window.currentUser.id}`),
        name: this.state.bracketName,
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
      // this needs to be either create or update

      if (this.props.formType === 'new') {

        fetch(`/api/v1/brackets`, {
          method: 'POST',
          body: jsonPayload,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
          credentials: 'same-origin'
          })
          .then(response => {
            if (response.ok) {
              return response;
            } else {
              let errorMessage = `${response.status} (${response.statusText})`,
                  error = new Error(errorMessage);
              throw(error);
            }
          })
          .then(response => response.json())
          .then(body => {
            swal(body.title, body.text, body.type)
            browserHistory.push(`/users/${window.currentUser.id}`)
          })
          .catch(error => console.error(`Error in fetch: ${error.messaage}`));
          //  end of create or update

        } else {

          let bracketId = this.props.bracketId
          fetch(`/api/v1/brackets/${bracketId}`, {
            method: 'PATCH',
            body: jsonPayload,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'},
            credentials: 'same-origin'
            })
            .then(response => {
              if (response.ok) {
                return response;
              } else {
                let errorMessage = `${response.status} (${response.statusText})`,
                    error = new Error(errorMessage);
                throw(error);
              }
            })
            .then(response => response.json())
            .then(body => {
              swal(body.title, body.text, body.type)
              browserHistory.push(`/users/${window.currentUser.id}`)
            })
            .catch(error => console.error(`Error in fetch: ${error.messaage}`));
            //  end of create or update

        }
      }
    }

    componentDidMount(){

      fetch(`/api/v1/users/${window.currentUser.id}/brackets`)
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
        let holder = {};
        body.forEach((bracket) => {
          holder[bracket.id] = bracket.name
          // holder.push(bracket.name)
        })
        this.setState({ bracketNames: holder })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))

      fetch('/api/v1/teams')
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

    let bracketId = this.props.bracketId

    if (bracketId !== '') {

      fetch(`/api/v1/users/${window.currentUser.id}/brackets/${bracketId}`)
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
          selectedGame1Winner: body.game_1_winner,
          selectedGame2Winner: body.game_2_winner,
          selectedGame3Winner: body.game_3_winner,
          selectedGame4Winner: body.game_4_winner,
          selectedGame5Winner: body.game_5_winner,
          selectedGame6Winner: body.game_6_winner,
          selectedGame7Winner: body.game_7_winner,
          selectedGame8Winner: body.game_8_winner,
          selectedGame9Winner: body.game_9_winner,
          selectedGame10Winner: body.game_10_winner,
          selectedGame11Winner: body.game_11_winner,
          selectedGame12Winner: body.game_12_winner,
          selectedGame13Winner: body.game_13_winner,
          selectedGame14Winner: body.game_14_winner,
          selectedGame15Winner: body.game_15_winner,
          selectedGame16Winner: body.game_16_winner,
          selectedGame17Winner: body.game_17_winner,
          selectedGame18Winner: body.game_18_winner,
          selectedGame19Winner: body.game_19_winner,
          selectedGame20Winner: body.game_20_winner,
          selectedGame21Winner: body.game_21_winner,
          selectedGame22Winner: body.game_22_winner,
          selectedGame23Winner: body.game_23_winner,
          selectedGame24Winner: body.game_24_winner,
          selectedGame25Winner: body.game_25_winner,
          selectedGame26Winner: body.game_26_winner,
          selectedGame27Winner: body.game_27_winner,
          selectedGame28Winner: body.game_28_winner,
          selectedGame29Winner: body.game_29_winner,
          selectedGame30Winner: body.game_30_winner,
          selectedGame31Winner: body.game_31_winner,
          selectedGame32Winner: body.game_32_winner,
          selectedGame33Winner: body.game_33_winner,
          selectedGame34Winner: body.game_34_winner,
          selectedGame35Winner: body.game_35_winner,
          selectedGame36Winner: body.game_36_winner,
          selectedGame37Winner: body.game_37_winner,
          selectedGame38Winner: body.game_38_winner,
          selectedGame39Winner: body.game_39_winner,
          selectedGame40Winner: body.game_40_winner,
          selectedGame41Winner: body.game_41_winner,
          selectedGame42Winner: body.game_42_winner,
          selectedGame43Winner: body.game_43_winner,
          selectedGame44Winner: body.game_44_winner,
          selectedGame45Winner: body.game_45_winner,
          selectedGame46Winner: body.game_46_winner,
          selectedGame47Winner: body.game_47_winner,
          selectedGame48Winner: body.game_48_winner,
          selectedGame49Winner: body.game_49_winner,
          selectedGame50Winner: body.game_50_winner,
          selectedGame51Winner: body.game_51_winner,
          selectedGame52Winner: body.game_52_winner,
          selectedGame53Winner: body.game_53_winner,
          selectedGame54Winner: body.game_54_winner,
          selectedGame55Winner: body.game_55_winner,
          selectedGame56Winner: body.game_56_winner,
          selectedGame57Winner: body.game_57_winner,
          selectedGame58Winner: body.game_58_winner,
          selectedGame59Winner: body.game_59_winner,
          selectedGame60Winner: body.game_60_winner,
          selectedGame61Winner: body.game_61_winner,
          selectedGame62Winner: body.game_62_winner,
          selectedGame63Winner: body.game_63_winner,
          bracketName: body.name
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

  }

  render () {

    let errorDiv;
    let errorItems;

    if(Object.keys(this.state.errors).length >0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className='error'>{errorItems}</div>
    }

    let howToHandle;
    let buttonText;
    let viewOnlyBanner;

    if (this.props.formType === 'show') {
      howToHandle = this.doNothing
      buttonText = "View Only"
      viewOnlyBanner = <div className='viewOnly'><h4>View Only</h4></div>
    } else {
      howToHandle = this.handleFormSubmit
      buttonText = "Save Bracket"
    }


    return(

      <form onSubmit={howToHandle}>

        {errorDiv}

        <div>

          <BracketName
            bracketName={this.state.bracketName}
            handleBracketName={this.handleBracketName}
            bracketScore={this.state.bracketScore}
          />

          <div className="row fullWidth">
            <div className="bannerTitle">
              <h1>SOUTH</h1>
            </div>
            <div>
              <div>{viewOnlyBanner}</div>
            </div>
          </div>

          <div className="row fullWidth">
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.team1}
                awayTeam={this.state.team2}
                name="Game 1"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame1Winner}
                handleOptionChange={this.handleGame1Selection}
              />
              <Bracket
                homeTeam={this.state.team3}
                awayTeam={this.state.team4}
                name="Game 2"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame2Winner}
                handleOptionChange={this.handleGame2Selection}
              />
              <Bracket
                homeTeam={this.state.team5}
                awayTeam={this.state.team6}
                name="Game 3"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame3Winner}
                handleOptionChange={this.handleGame3Selection}
              />
              <Bracket
                homeTeam={this.state.team7}
                awayTeam={this.state.team8}
                name="Game 4"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame4Winner}
                handleOptionChange={this.handleGame4Selection}
              />
              <Bracket
                homeTeam={this.state.team9}
                awayTeam={this.state.team10}
                name="Game 5"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame5Winner}
                handleOptionChange={this.handleGame5Selection}
              />
              <Bracket
                homeTeam={this.state.team11}
                awayTeam={this.state.team12}
                name="Game 6"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame6Winner}
                handleOptionChange={this.handleGame6Selection}
              />
              <Bracket
                homeTeam={this.state.team13}
                awayTeam={this.state.team14}
                name="Game 7"
                round="round1"
                region="south"
                selectedGameWinner={this.state.selectedGame7Winner}
                handleOptionChange={this.handleGame7Selection}
              />
              <Bracket
                homeTeam={this.state.team15}
                awayTeam={this.state.team16}
                name="Game 8"
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
                name="Game 33"
                round="round2"
                region="south"
                selectedGameWinner={this.state.selectedGame33Winner}
                handleOptionChange={this.handleGame33Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame3Winner}
                awayTeam={this.state.selectedGame4Winner}
                name="Game 34"
                round="round2"
                region="south"
                selectedGameWinner={this.state.selectedGame34Winner}
                handleOptionChange={this.handleGame34Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame5Winner}
                awayTeam={this.state.selectedGame6Winner}
                name="Game 35"
                round="round2"
                region="south"
                selectedGameWinner={this.state.selectedGame35Winner}
                handleOptionChange={this.handleGame35Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame7Winner}
                awayTeam={this.state.selectedGame8Winner}
                name="Game 36"
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
                name="Game 49"
                round="round3"
                region="south"
                selectedGameWinner={this.state.selectedGame49Winner}
                handleOptionChange={this.handleGame49Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame35Winner}
                awayTeam={this.state.selectedGame36Winner}
                name="Game 50"
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
                name="Game 57"
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
            <div>
              <div>{viewOnlyBanner}</div>
            </div>
          </div>

          <div className="row fullWidth">
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.team17}
                awayTeam={this.state.team18}
                name="Game 9"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame9Winner}
                handleOptionChange={this.handleGame9Selection}
              />
              <Bracket
                homeTeam={this.state.team19}
                awayTeam={this.state.team20}
                name="Game 10"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame10Winner}
                handleOptionChange={this.handleGame10Selection}
              />
              <Bracket
                homeTeam={this.state.team21}
                awayTeam={this.state.team22}
                name="Game 11"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame11Winner}
                handleOptionChange={this.handleGame11Selection}
              />
              <Bracket
                homeTeam={this.state.team23}
                awayTeam={this.state.team24}
                name="Game 12"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame12Winner}
                handleOptionChange={this.handleGame12Selection}
              />
              <Bracket
                homeTeam={this.state.team25}
                awayTeam={this.state.team26}
                name="Game 13"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame13Winner}
                handleOptionChange={this.handleGame13Selection}
              />
              <Bracket
                homeTeam={this.state.team27}
                awayTeam={this.state.team28}
                name="Game 14"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame14Winner}
                handleOptionChange={this.handleGame14Selection}
              />
              <Bracket
                homeTeam={this.state.team29}
                awayTeam={this.state.team30}
                name="Game 15"
                round="round1"
                region="west"
                selectedGameWinner={this.state.selectedGame15Winner}
                handleOptionChange={this.handleGame15Selection}
              />
              <Bracket
                homeTeam={this.state.team31}
                awayTeam={this.state.team32}
                name="Game 16"
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
                name="Game 37"
                round="round2"
                region="west"
                selectedGameWinner={this.state.selectedGame37Winner}
                handleOptionChange={this.handleGame37Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame11Winner}
                awayTeam={this.state.selectedGame12Winner}
                name="Game 38"
                round="round2"
                region="west"
                selectedGameWinner={this.state.selectedGame38Winner}
                handleOptionChange={this.handleGame38Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame13Winner}
                awayTeam={this.state.selectedGame14Winner}
                name="Game 39"
                round="round2"
                region="west"
                selectedGameWinner={this.state.selectedGame39Winner}
                handleOptionChange={this.handleGame39Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame15Winner}
                awayTeam={this.state.selectedGame16Winner}
                name="Game 40"
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
                name="Game 51"
                round="round3"
                region="west"
                selectedGameWinner={this.state.selectedGame51Winner}
                handleOptionChange={this.handleGame51Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame39Winner}
                awayTeam={this.state.selectedGame40Winner}
                name="Game 52"
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
                name="Game 58"
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
            <div>
              <div>{viewOnlyBanner}</div>
            </div>
          </div>

          <div className="row fullWidth">
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.team33}
                awayTeam={this.state.team34}
                name="Game 17"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame17Winner}
                handleOptionChange={this.handleGame17Selection}
              />
              <Bracket
                homeTeam={this.state.team35}
                awayTeam={this.state.team36}
                name="Game 18"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame18Winner}
                handleOptionChange={this.handleGame18Selection}
              />
              <Bracket
                homeTeam={this.state.team37}
                awayTeam={this.state.team38}
                name="Game 19"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame19Winner}
                handleOptionChange={this.handleGame19Selection}
              />
              <Bracket
                homeTeam={this.state.team39}
                awayTeam={this.state.team40}
                name="Game 20"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame20Winner}
                handleOptionChange={this.handleGame20Selection}
              />
              <Bracket
                homeTeam={this.state.team41}
                awayTeam={this.state.team42}
                name="Game 21"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame21Winner}
                handleOptionChange={this.handleGame21Selection}
              />
              <Bracket
                homeTeam={this.state.team43}
                awayTeam={this.state.team44}
                name="Game 22"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame22Winner}
                handleOptionChange={this.handleGame22Selection}
              />
              <Bracket
                homeTeam={this.state.team45}
                awayTeam={this.state.team46}
                name="Game 23"
                round="round1"
                region="east"
                selectedGameWinner={this.state.selectedGame23Winner}
                handleOptionChange={this.handleGame23Selection}
              />
              <Bracket
                homeTeam={this.state.team47}
                awayTeam={this.state.team48}
                name="Game 24"
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
                name="Game 41"
                round="round2"
                region="east"
                selectedGameWinner={this.state.selectedGame41Winner}
                handleOptionChange={this.handleGame41Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame19Winner}
                awayTeam={this.state.selectedGame20Winner}
                name="Game 42"
                round="round2"
                region="east"
                selectedGameWinner={this.state.selectedGame42Winner}
                handleOptionChange={this.handleGame42Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame21Winner}
                awayTeam={this.state.selectedGame22Winner}
                name="Game 43"
                round="round2"
                region="east"
                selectedGameWinner={this.state.selectedGame43Winner}
                handleOptionChange={this.handleGame43Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame23Winner}
                awayTeam={this.state.selectedGame24Winner}
                name="Game 44"
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
                name="Game 53"
                round="round3"
                region="east"
                selectedGameWinner={this.state.selectedGame53Winner}
                handleOptionChange={this.handleGame53Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame43Winner}
                awayTeam={this.state.selectedGame44Winner}
                name="Game 54"
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
                name="Game 59"
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
            <div>
              <div>{viewOnlyBanner}</div>
            </div>
          </div>

          <div className="row fullWidth">
            <div className="small-3 columns">
              <Bracket
                homeTeam={this.state.team49}
                awayTeam={this.state.team50}
                name="Game 25"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame25Winner}
                handleOptionChange={this.handleGame25Selection}
              />
              <Bracket
                homeTeam={this.state.team51}
                awayTeam={this.state.team52}
                name="Game 26"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame26Winner}
                handleOptionChange={this.handleGame26Selection}
              />
              <Bracket
                homeTeam={this.state.team53}
                awayTeam={this.state.team54}
                name="Game 27"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame27Winner}
                handleOptionChange={this.handleGame27Selection}
              />
              <Bracket
                homeTeam={this.state.team55}
                awayTeam={this.state.team56}
                name="Game 28"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame28Winner}
                handleOptionChange={this.handleGame28Selection}
              />
              <Bracket
                homeTeam={this.state.team57}
                awayTeam={this.state.team58}
                name="Game 29"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame29Winner}
                handleOptionChange={this.handleGame29Selection}
              />
              <Bracket
                homeTeam={this.state.team59}
                awayTeam={this.state.team60}
                name="Game 30"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame30Winner}
                handleOptionChange={this.handleGame30Selection}
              />
              <Bracket
                homeTeam={this.state.team61}
                awayTeam={this.state.team62}
                name="Game 31"
                round="round1"
                region="midwest"
                selectedGameWinner={this.state.selectedGame31Winner}
                handleOptionChange={this.handleGame31Selection}
              />
              <Bracket
                homeTeam={this.state.team63}
                awayTeam={this.state.team64}
                name="Game 32"
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
                name="Game 45"
                round="round2"
                region="midwest"
                selectedGameWinner={this.state.selectedGame45Winner}
                handleOptionChange={this.handleGame45Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame27Winner}
                awayTeam={this.state.selectedGame28Winner}
                name="Game 46"
                round="round2"
                region="midwest"
                selectedGameWinner={this.state.selectedGame46Winner}
                handleOptionChange={this.handleGame46Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame29Winner}
                awayTeam={this.state.selectedGame30Winner}
                name="Game 47"
                round="round2"
                region="midwest"
                selectedGameWinner={this.state.selectedGame47Winner}
                handleOptionChange={this.handleGame47Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame31Winner}
                awayTeam={this.state.selectedGame32Winner}
                name="Game 48"
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
                name="Game 55"
                round="round3"
                region="midwest"
                selectedGameWinner={this.state.selectedGame55Winner}
                handleOptionChange={this.handleGame55Selection}
              />
              <Bracket
                homeTeam={this.state.selectedGame47Winner}
                awayTeam={this.state.selectedGame48Winner}
                name="Game 56"
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
                name="Game 60"
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
            <div>
              <div>{viewOnlyBanner}</div>
            </div>
          </div>

          <div className="row fullWidth">
            <div className="small-4 columns">
              <BracketFinalFour
                homeTeam={this.state.selectedGame57Winner}
                awayTeam={this.state.selectedGame58Winner}
                name="Game 61"
                round="finalFour"
                regionHome="south"
                regionAway="west"
                selectedGameWinner={this.state.selectedGame61Winner}
                handleOptionChange={this.handleGame61Selection}
              />
              <BracketFinalFour
                homeTeam={this.state.selectedGame59Winner}
                awayTeam={this.state.selectedGame60Winner}
                name="Game 62"
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
                name="Game 63"
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

          {errorDiv}

          <button className="bannerTitleStyleButton"
            type="submit"
            name="submit"
            value="Save New Bracket"
            >{buttonText}
          </button>

        </div>

      </form>
    )
  }
}
export default BracketForm;
