import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import PropTypes from "prop-types"
import { propTypes } from 'react-bootstrap/esm/Image'
import './Board.css';

function Board(props) {
  const board = props.board
  
  return (
    <Container>
      <Row className="boardRow">
        <Col onClick={() => props.show(0,0, board)}>{ props.display[0][0] === 1 ? board[0][0] : ""}</Col> 
        <Col onClick={() => props.show(0,1, board)}>{ props.display[0][1] === 1 ? board[0][1] : ""}</Col>
        <Col onClick={() => props.show(0,2, board)}>{ props.display[0][2] === 1 ? board[0][2] : ""}</Col>
        <Col onClick={() => props.show(0,3, board)}>{ props.display[0][3] === 1 ? board[0][3] : ""}</Col>
        <Col onClick={() => props.show(0,4, board)}>{ props.display[0][4] === 1 ? board[0][4] : ""}</Col>
      </Row>
      <Row className="boardRow">
        <Col onClick={() => props.show(1,0, board)}>{ props.display[1][0] === 1 ? board[1][0] : ""}</Col>
        <Col onClick={() => props.show(1,1, board)}>{ props.display[1][1] === 1 ? board[1][1] : ""}</Col>
        <Col onClick={() => props.show(1,2, board)}>{ props.display[1][2] === 1 ? board[1][2] : ""}</Col>
        <Col onClick={() => props.show(1,3, board)}>{ props.display[1][3] === 1 ? board[1][3] : ""}</Col>
        <Col onClick={() => props.show(1,4, board)}>{ props.display[1][4] === 1 ? board[1][4] : ""}</Col>
      </Row>
      <Row className="boardRow">
        <Col onClick={() => props.show(2,0, board)}>{ props.display[2][0] === 1 ? board[2][0] : ""}</Col>
        <Col onClick={() => props.show(2,1, board)}>{ props.display[2][1] === 1 ? board[2][1] : ""}</Col>
        <Col onClick={() => props.show(2,2, board)}>{ props.display[2][2] === 1 ? board[2][2] : ""}</Col>
        <Col onClick={() => props.show(2,3, board)}>{ props.display[2][3] === 1 ? board[2][3] : ""}</Col>
        <Col onClick={() => props.show(2,4, board)}>{ props.display[2][4] === 1 ? board[2][4] : ""}</Col>
      </Row>
      <Row className="boardRow">
        <Col onClick={() => props.show(3,0, board)}>{ props.display[3][0] === 1 ? board[3][0] : ""}</Col>
        <Col onClick={() => props.show(3,1, board)}>{ props.display[3][1] === 1 ? board[3][1] : ""}</Col>
        <Col onClick={() => props.show(3,2, board)}>{ props.display[3][2] === 1 ? board[3][2] : ""}</Col>
        <Col onClick={() => props.show(3,3, board)}>{ props.display[3][3] === 1 ? board[3][3] : ""}</Col>
        <Col onClick={() => props.show(3,4, board)}>{ props.display[3][4] === 1 ? board[3][4] : ""}</Col>
      </Row>
      <Row className="boardRow">
        <Col onClick={() => props.show(4,0, board)}>{ props.display[4][0] === 1 ? board[4][0] : ""}</Col>
        <Col onClick={() => props.show(4,1, board)}>{ props.display[4][1] === 1 ? board[4][1] : ""}</Col>
        <Col onClick={() => props.show(4,2, board)}>{ props.display[4][2] === 1 ? board[4][2] : ""}</Col>
        <Col onClick={() => props.show(4,3, board)}>{ props.display[4][3] === 1 ? board[4][3] : ""}</Col>
        <Col onClick={() => props.show(4,4, board)}>{ props.display[4][4] === 1 ? board[4][4] : ""}</Col>
      </Row>
    </Container>
  )
}

Board.propTypes = {
  board: PropTypes.array,
  mineNumber: PropTypes.func
}

export default Board; 