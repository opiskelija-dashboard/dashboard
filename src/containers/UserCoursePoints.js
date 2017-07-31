import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchCoursePoints } from '../actions/index';

class UserCoursePoints extends Component {
  render() {
    return (
      <div>
        <button type="button" id="fetchButton" className="btn btn-info" onClick = { this.props.fetchPoints }>
          Request your points.
        </button>
        <div> Points awarded: <b>{this.props.coursePoints}</b> </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coursePoints: state.coursePoints
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPoints: () => dispatch(
      fetchCoursePoints()
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCoursePoints);
