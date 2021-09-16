import React from 'react'
import mineStateReducer from '../reducers/mine-state-reducer';
import displayStateReducer from "../reducers/display-state-reducer";
import Board from './Board'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image';
import { render } from '@testing-library/react';
import { Button } from 'react-bootstrap'


class MineControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameBegun: false
    }
  }

  addMines = (numberOfMines, board) => {
    const { dispatch } = this.props
    let action = {}
    for(let i = 1; i < numberOfMines+1; i++) {
      let x = Math.floor(Math.random() * 5)
      let y = Math.floor(Math.random() * 5)
      if (board[x][y] === "M" ) {
        i--
      }
      action = {
        type: "ADD_SYMBOL",
        symbol: "M",
        xCoord: x,
        yCoord: y
      }
      dispatch(action)
    }
    for (let j = 0; j < 5; j++) {
      for (let m = 0; m < 5; m++) {
        action = mineNumber(j, m, board)
        dispatch(action)
      }
    }
    this.setState({
      gameBegun: true
    })
  }

  showCell = (x, y, gameBoard) => {
    const { dispatch } = this.props
    let action = {
      type: "VISIBILITY_CHANGE",
      symbol: 1,
      xCoord: x,
      yCoord: y
    }
    dispatch(action)
    if (gameBoard[x][y] === "M") {
      alert("you lose")
    }
    this.setState({})
  }

  resetTheBoard = () => {
    const { dispatch } = this.props
    let action = {
      type: 'RESET_GAME'
    }
    dispatch(action)
    this.setState({
      gameBegun: false
    })
  }





  render() {
    let gameBoard = this.props.boardState
    let buttonFunction = null
    let buttonText = null
    let visibleState= null
    let displayCounter = this.props.displayState
    if (this.state.gameBegun) {
        visibleState = <Board
          board={gameBoard}
          display={displayCounter}
          show={this.showCell}
          />
          buttonFunction=() => this.resetTheBoard()
          buttonText = "reset game"
    } else {
      visibleState = <p>This works</p>
      buttonFunction=() => this.addMines(5, gameBoard)
      buttonText = "add 5 mines"
    }
    return (
      <div>
        {visibleState}
        <Button onClick={buttonFunction} > {buttonText} </Button>
      </div>
    )
  }
}


const mineNumber = (x, y, gameBoard) => {
  if (gameBoard[x][y] != "M") {
    return mineChecker(x, y, gameBoard)
  } else {
    console.log("no go")
    return { type: "DO_NOTHING"}
  }
}

const mineChecker = (x, y, gameBoard) => {
  let mineNumber = 0
  if (y > 0) {
    if (gameBoard[x][y-1] === "M") {
      mineNumber++
    }
  }
  if (y < 4) {
    if (gameBoard[x][y+1] === "M") {
      mineNumber++
      }
  }
  if (x > 0) {
    if (gameBoard[x-1][y] === "M") {
      mineNumber++
    }
    if(y < 4) {
      if (gameBoard[x-1][y+1] === "M") {
        mineNumber++
      }
    }
    if (y > 0) {
      if (gameBoard[x-1][y-1] === "M") {
        mineNumber++
      }
    }
  }
  if (x < 4) {
    if (gameBoard[x+1][y] === "M") {
      mineNumber++
    }
    if (y > 0) {
      if (gameBoard[x+1][y-1] === "M") {
        mineNumber++
      }
    }
    if (y < 4) {
      if (gameBoard[x+1][y+1] === "M") {
        mineNumber++
      }
    }
  }
  return {
    type: "ADD_SYMBOL",
    symbol: mineNumber,
    xCoord: x,
    yCoord: y,
  }
}


MineControl.propTypes = {
  boardState: PropTypes.array,
  displayState: PropTypes.array
}

const mapStateToProps = state => {
  return {
    boardState: state.boardState,
    displayState: state.displayState
  }
}

MineControl = connect(mapStateToProps)(MineControl)

export default MineControl; 