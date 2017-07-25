import React, { Component } from 'react';
import '../App.css';
import UserCoursePoints from '../containers/UserCoursePoints';
import FilterWidget from './FilterWidget';
import { toggleVisibility } from '../actions/index';
import { connect } from 'react-redux';
import NavBar from './NavBar';

export default class App extends Component {





  render() {
    return (

      <div className="centered">
        <NavBar />

        <FilterWidget />
      </div>
    );
  }


}
