import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import mineStateReducer from '../../reducers/mine-state-reducer'
import displayStateReducer from '../../reducers/display-state-reducer'

let store = createStore(rootReducer);


describe("rootReducer", () => {
  
  let action;

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      boardState: [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ],
      displayState: [ [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0], [0,0,0,0,0] ]
    });
  });

  test('check the initial state of mine state reducer and see if it matches rootReducer', () => {
    expect(store.getState().boardState).toEqual(mineStateReducer(undefined, {type: null}))
  })

  test('check the initial state of mine state reducer and see if it matches rootReducer', () => {
    expect(store.getState().displayState).toEqual(displayStateReducer(undefined, {type: null}))
  })

  test('should add a mine to the board state', () => {
    action = {
      type: 'ADD_SYMBOL',
      symbol: "M",
      xCoord: 0,
      yCoord: 4,
    };
    store.dispatch(action);
    expect(store.getState().boardState).toEqual(mineStateReducer(undefined, action))
  });

  test('should add a 1 to the display state', () => {
    action = {
      type: 'VISIBILITY_CHANGE',
      symbol: 1,
      xCoord: 0,
      yCoord: 4,
    };
    store.dispatch(action);
    expect(store.getState().displayState).toEqual(displayStateReducer(undefined, action))
  });
  
})