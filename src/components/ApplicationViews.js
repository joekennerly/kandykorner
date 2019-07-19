import React, { Component } from "react";
import EmployeeList from "./Employees/Employees";
import StoreList from "./StoreLocations/StoreLocations";
import CandyTypes from "./CandyTypes/CandyTypes";
import { Route } from "react-router-dom";

export default class ApplicationViews extends Component {
  state = {
    stores: [],
    employees: [],
    candyTypes: [],
    candies: []
  };

  componentDidMount() {
    const newState = {};

    fetch("http://localhost:5002/stores")
      .then(r => r.json())
      .then(stores => (newState.stores = stores))
      .then(() => fetch("http://localhost:5002/employees").then(r => r.json()))
      .then(employees => (newState.employees = employees))
      .then(() => fetch("http://localhost:5002/candyTypes").then(r => r.json()))
      .then(candyTypes => (newState.candyTypes = candyTypes))
      .then(() => this.setState(newState));
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <StoreList stores={this.state.stores} />;
          }}
        />
        <Route
          path="/candyTypes"
          render={props => {
            return <CandyTypes candyTypes={this.state.candyTypes} />;
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return <EmployeeList employees={this.state.employees} />;
          }}
        />
      </React.Fragment>
    );
  }
}
