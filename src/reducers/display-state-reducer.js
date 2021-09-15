export default (state = [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ], action) => {
  const { symbol, xCoord, yCoord } = action;
  switch (action.type) {
  case 'VISIBILITY_CHANGE':
    state[xCoord][yCoord] = symbol;
    return state
  case 'RESET_VISIBILITY':
    state = [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]];
    return state
  default:
    return state
  };
}