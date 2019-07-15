import React, { Component } from 'react';
import ApplicationViews from './ApplicationViews';
import NavBar from './navbar/NavBar';

import "bootstrap/dist/css/bootstrap.min.css"

export default class KandyKorner extends Component {

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}