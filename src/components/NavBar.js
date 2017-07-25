import React, { Component } from "react";
import "../App.css";
import NavButton from "../containers/NavButton";

export default class NavBar extends Component {

  render() {
    return (
      <div >
        <NavButton text="Oma sivu" />

        <NavButton text="Leaderboard" />

        <NavButton text="Badget" />
      </div>
    )
  }
}

/*import { Nav, Navbar, MenuItem, NavItem, NavDropdown } from "react-bootstrap";
import { connect } from 'react-redux';
import { toggleVisibility } from '../actions/index';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
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


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
*/