import React from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";


class Navbar extends React.Component {
  
  resetFunction = () => {
    const { dispatch } = this.props;
    let action = {
      type: 'RESET_GAME',
    }
  }

  
  render() {
    return (
    <nav>
      <div>
        <button className="navbar-button" >Player O</button>
        <p>Score</p>
      </div>

      <div>
        <button className="navbar-button" onClick={() => this.resetFunction()}>Reset</button>
      </div>
    </nav>
    )
  }
}

export default Navbar