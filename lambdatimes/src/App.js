import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import withAuthenticate from "./components/authentication/withAuthenticate";
import Login from './components/Login';

const ComponentfromWithAuthenticate = withAuthenticate(Content)(Login);

const App = () => {
  return (
    <div className="App">
      <ComponentfromWithAuthenticate />
    </div>
  );
}

export default App;
