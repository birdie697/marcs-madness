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
  if (names.includes(name.trim())) {
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

module.exports = {
  validateBracketNameNotBlank,
  validateBracketNameNoDuplicate
 };
