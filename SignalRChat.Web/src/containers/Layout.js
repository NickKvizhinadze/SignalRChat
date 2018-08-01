import React from 'react';
import '../App.css';
import logo from '../assets/images/logo.svg';


export const NoLayout = props => (
  <div>
    {props.children}
  </div>
);

export const DefaultLayout = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    {props.children}
  </div>
);
