import React, { Component } from "react";
import "../App.css";
import ButtonContainer from '../containers/ButtonContainer'

export const NavBar = () => (
  <div>
    <ButtonContainer text="Oma sivu" />

    <ButtonContainer text="Leaderboard" />

    <ButtonContainer text="Badget" />
  </div>
)
