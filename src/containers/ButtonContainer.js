import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { toggleVisibility } from '../actions/index';
import { Button } from 'semantic-ui-react';

export class ButtonContainer extends Component {

  render() {
    const text = this.props.text;
    const actived = (this.props.filter === text) ? true : false;

    return (
      <Button active={actived} onClick={() => this.props.toggleFilter(text)}>{ text }</Button>
    )
  };
}

const mapStateToProps = state => {
  return {
    filter: state.widgets.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: (input) => dispatch(
      toggleVisibility(input)
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonContainer);
