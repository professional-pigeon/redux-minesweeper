import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image'

function Board(props) {
  const board = props.board
  
  return (
    <Container >
      <Row className="boardRow">
        <Col onClick={() => props.show(0,0)}>{ props.display[0][0] === 1 ? mineNumber(0, 0, board) : "click"}</Col>
        <Col onClick={() => props.show(0,1)}>{ props.display[0][1] === 1 ? mineNumber(0, 1, board) : "click"}</Col>
        <Col onClick={() => props.show(0,2)}>{ props.display[0][2] === 1 ? mineNumber(0, 2, board) : "click"}</Col>
        <Col onClick={() => props.show(0,3)}>{ props.display[0][3] === 1 ? mineNumber(0, 3, board) : "click"}</Col>
        <Col onClick={() => props.show(0,4)}>{ props.display[0][4] === 1 ? mineNumber(0, 4, board) : "click"}</Col>
      </Row>
      <Row className="boardRow">
        <Col onClick={() => props.show(1,0)}>{ props.display[1][0] === 1 ? mineNumber(1, 0, board) : "click"}</Col>
        <Col onClick={() => props.show(1,1)}>{ props.display[1][1] === 1 ? mineNumber(1, 1, board) : "click"}</Col>
        <Col onClick={() => props.show(1,2)}>{ props.display[1][2] === 1 ? mineNumber(1, 2, board) : "click"}</Col>
        <Col onClick={() => props.show(1,3)}>{ props.display[1][3] === 1 ? mineNumber(1, 3, board) : "click"}</Col>
        <Col onClick={() => props.show(1,4)}>{ props.display[1][4] === 1 ? mineNumber(1, 4, board) : "click"}</Col>
      </Row>
      <Row className="boardRow">
        <Col onClick={() => props.show(2,0)}>{ props.display[2][0] === 1 ? mineNumber(2, 0, board) : "click"}</Col>
        <Col onClick={() => props.show(2,1)}>{ props.display[2][1] === 1 ? mineNumber(2, 1, board) : "click"}</Col>
        <Col onClick={() => props.show(2,2)}>{ props.display[2][2] === 1 ? mineNumber(2, 2, board) : "click"}</Col>
        <Col onClick={() => props.show(2,3)}>{ props.display[2][3] === 1 ? mineNumber(2, 3, board) : "click"}</Col>
        <Col onClick={() => props.show(2,4)}>{ props.display[2][4] === 1 ? mineNumber(2, 4, board) : "click"}</Col>
      </Row>
      <Row className="boardRow">
        <Col onClick={() => props.show(3,0)}>{ props.display[3][0] === 1 ? mineNumber(3, 0, board) : "click"}</Col>
        <Col onClick={() => props.show(3,1)}>{ props.display[3][1] === 1 ? mineNumber(3, 1, board) : "click"}</Col>
        <Col onClick={() => props.show(3,2)}>{ props.display[3][2] === 1 ? mineNumber(3, 2, board) : "click"}</Col>
        <Col onClick={() => props.show(3,3)}>{ props.display[3][3] === 1 ? mineNumber(3, 3, board) : "click"}</Col>
        <Col onClick={() => props.show(3,4)}>{ props.display[3][4] === 1 ? mineNumber(3, 4, board) : "click"}</Col>
      </Row>
      <Row className="boardRow">
        <Col onClick={() => props.show(4,0)}>{ props.display[4][0] === 1 ? mineNumber(4, 0, board) : "click"}</Col>
        <Col onClick={() => props.show(4,1)}>{ props.display[4][1] === 1 ? mineNumber(4, 1, board) : "click"}</Col>
        <Col onClick={() => props.show(4,2)}>{ props.display[4][2] === 1 ? mineNumber(4, 2, board) : "click"}</Col>
        <Col onClick={() => props.show(4,3)}>{ props.display[4][3] === 1 ? mineNumber(4, 3, board) : "click"}</Col>
        <Col onClick={() => props.show(4,4)}>{ props.display[4][4] === 1 ? mineNumber(4, 4, board) : "click"}</Col>
      </Row>
    </Container>
  )
}

Board.propTypes = {
  board: PropTypes.array
}

const mineNumber = (x, y, gameBoard) => {
  let mineNumber = 0
  if (gameBoard[x][y] != "M") {
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
    return mineNumber
  } else {
    return "you lose"
  }
}

export default Board; 