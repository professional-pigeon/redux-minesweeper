
import displayStateReducer from '../../reducers/display-state-reducer'

describe('displayListReducer', () => {

  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(displayStateReducer([ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ], { type: null })).toEqual([[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]])
  });

  test('Should add a symbol to the state at the upper right position', () => {
    action = {
      type: 'VISIBILITY_CHANGE',
      symbol: "M",
      xCoord: 0,
      yCoord: 4,
    };
    expect(displayStateReducer([ 
      [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]
    ], action)).toEqual([ [0,0,0,0,"M"], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ])
  });

  test('Should reset the game board', () => {
    action = {
      type: 'RESET_VISIBILITY',
    };
    expect(displayStateReducer([ [0,"Y",0,"Y",0], [0,0,0,"Y",0], [0,0,0,0,0] ], action)).toEqual([ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]])
  });

});