import React, { Component } from 'react';

const withAuthenticate = Content => LoginPage =>
  class extends Component {
    render() {
      if(localStorage.getItem('username')) {
          return <Content />
      } else {
          return <LoginPage />
      }
    }
  };

export default withAuthenticate;