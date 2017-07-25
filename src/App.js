import React, { Component } from 'react';
import './App.css';
import UserCoursePoints from './containers/UserCoursePoints'

class App extends Component {
  render() {
    return (
      <div class="centered">
        <UserCoursePoints />
      </div>
    );
  }
}

export default App;
