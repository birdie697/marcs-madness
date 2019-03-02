const validateBracketNameNotBlank = function(name, context) {
  if (name.trim() === '') {
    let newError = { bracketNameBlank: 'Please provide a bracket name'};
    context.setState({ errors: Object.assign({}, context.state.errors, newError) });
    return false;
  } else {
    let errorState = context.state.errors;
    delete errorState.bracketNameBlank;
    context.setState({ errors: errorState });
    return true;
  }
};

const validateBracketNameNoDuplicate = function(name, names, context) {
  if (names.includes(name.trim()) && name.trim() !== '') {
    let newError = { bracketNameDuplicated: 'Please no duplicate bracket names'};
    context.setState({ errors: Object.assign({}, context.state.errors, newError) });
    return false;
  } else {
    let errorState = context.state.errors;
    delete errorState.bracketNameDuplicated;
    context.setState({ errors: errorState });
    return true;
  }
};

const validateGameSelection = function(input, gameNumber, gameDisplay, context) {
  if (input === '') {
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
