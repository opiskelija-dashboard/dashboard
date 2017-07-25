import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { toggleVisibility } from '../actions/index';
import { Button } from 'react-bootstrap';

class NavButton extends Component {

  render() {
    const text = this.props.text;

    return (
      <button onClick={() => this.props.toggleFilter({text})}>{ text }</button>
    )
  };


}

const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: (input) => dispatch(
      toggleVisibility(input)
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavButton);
