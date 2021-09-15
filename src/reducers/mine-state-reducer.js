export default (state = [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ], action) => {
  const { symbol, xCoord, yCoord } = action;
  switch (action.type) {
  case 'ADD_SYMBOL':
    state[xCoord][yCoord] = symbol;
    return state
  case 'RESET_GAME':
    state = [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]];
    return state
  default:
    return state
  };
}