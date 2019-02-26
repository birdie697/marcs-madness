const validateBracketNameNotBlank = function(name, context) {
  // console.log('start of no name')
  if (name.trim() === '') {
    // console.log('no name true')
    let newError = { bracketNameBlank: 'Please provide a bracket name'};
    context.setState({ errors: Object.assign({}, context.state.errors, newError) });
    return false;
  } else {
    // console.log('no name false')
    let errorState = context.state.errors;
    delete errorState.bracketNameBlank;
    context.setState({ errors: errorState });
    return true;
  }
};

const validateBracketNameNoDuplicate = function(name, names, context) {
  // console.log('start of dup')
  if (names.includes(name.trim()) && name.trim() !== '') {
    // console.log('in dup create error')
    let newError = { bracketNameDuplicated: 'Please no duplicate bracket names'};
    context.setState({ errors: Object.assign({}, context.state.errors, newError) });
    return false;
  } else {
    // console.log('in dup reset errors')
    let errorState = context.state.errors;
    delete errorState.bracketNameDuplicated;
    context.setState({ errors: errorState });
    return true;
  }
};

const validateGameSelection = function(input, gameNumber, gameDisplay, context) {
  console.log(`start of game, gameNumber is ${gameNumber}`)
  if (input === '') {
    // console.log(`${gameNumber} is blank`)
    let newError = { gameNumber: `Please select a ${gameDisplay} winner`};
    context.setState({ errors: Object.assign({}, context.state.errors, newError) });
    return false;
  } else {
    // console.log(`${gameNumber} is NOT blank`)
    let errorState = context.state.errors;
    delete errorState.gameNumber;
    context.setState({ errors: errorState });
    return true;
  }
}

module.exports = {
  validateBracketNameNotBlank,
  validateBracketNameNoDuplicate,
  validateGameSelection
 };
