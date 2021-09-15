
import mineStateReducer from '../../reducers/mine-state-reducer'

describe('mineListReducer', () => {

  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(mineStateReducer([ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ], { type: null })).toEqual([[0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]])
  });

  test('Should add a symbol to the state at the upper right position', () => {
    action = {
      type: 'ADD_SYMBOL',
      symbol: "M",
      xCoord: 0,
      yCoord: 4,
    };
    expect(mineStateReducer([ 
      [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]
    ], action)).toEqual([ [0,0,0,0,"M"], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ])
  });

  test('Should reset the game board', () => {
    action = {
      type: 'RESET_GAME',
    };
    expect(mineStateReducer([ [0,"Y",0,"Y",0], [0,0,0,"Y",0], [0,0,0,0,0] ], action)).toEqual([ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0]])
  });

});

// for (let i = 1; i === number of mineStateReducer; i++) {
//   math random = x
//   math random = y
//   action = {
//     symbol: mine
//     xCoord: x
//     yCoord: y
//   }
//   dispatch(action)
// }

// Random bombs
// Counting bombs around cell
// Having a blank perimeter around our grid