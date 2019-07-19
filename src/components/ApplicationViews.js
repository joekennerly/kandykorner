import React, { Component } from "react";
import { Route } from "react-router-dom";
import EmployeeList from "./Employees/Employees";
import StoreList from "./StoreLocations/StoreLocations";
import CandyTypes from "./CandyTypes/CandyTypes";
import SearchResults from "./SearchResults/SearchResults";

export default class ApplicationViews extends Component {
  //Set placeholder for state to render
  state = {
    stores: [],
    employees: [],
    candyTypes: [],
    candies: []
  };

  //Once init render, update state with an api object and re-render
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

  // Handles all routing to specific pages
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
          path="/search"
          render={props => {
            return <SearchResults results={this.props.results} />;
            // if (this.isAuthenticated()) {
            //   return <SearchResults results={this.props.results} />;
            // } else {
            //   return <Redirect to="/login" />;
            // }
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
