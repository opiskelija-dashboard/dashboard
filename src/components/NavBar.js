import React from "react";
import "../App.css";
import ButtonContainer from '../containers/ButtonContainer'

export const NavBar = props => (
  <div>
    <ButtonContainer text="Oma sivu" />

    <ButtonContainer text="Leaderboard" />


    {/*
      *Täältä tulee badgenappula
      <ButtonContainer text="Badget" />
      */}

    {props.admin &&
      <ButtonContainer text="Admin page" />
    }
  </div>
)
