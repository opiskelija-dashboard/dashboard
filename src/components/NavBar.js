import React, { Component } from "react";
import "../App.css";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { connect } from "react-redux";
import { toggleVisibility } from "../actions/index";

export class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Dashboard</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem onClick={() => this.props.toggleFilter("Oma sivu")}>
            Oma Sivu
          </NavItem>
          <NavItem onClick={() => this.props.toggleFilter("Leaderboard")}>
            Leaderboard
          </NavItem>
          <NavItem onClick={() => this.props.toggleFilter("Badget")}>
            Oma Sivu
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFilter: input => dispatch(toggleVisibility(input))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
