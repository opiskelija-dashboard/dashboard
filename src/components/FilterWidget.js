import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';

class FilterWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.filter
    };
  }

  render() {
    return (
      <div className="Widget">
        asdasd
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    filter: state.filter
  }
}


export default connect(mapStateToProps, null)(FilterWidget);
