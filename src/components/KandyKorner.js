import React, { Component } from 'react';
import EmployeeList from './Employees/Employees';
import StoreList from './StoreLocations/StoreLocations';
import CandyList from './CandyTypes/CandyTypes';

export default class KandyKorner extends Component {

  storeArray = [
    {id:1, name:"big store"},
    {id:2, name:"bing bong"},
    {id:3, name:"woo woo"},
    {id:4, name:"kroger"},
    {id:5, name:"publix"}
  ]
  employeeArray = [
    {id:1, name:"jeff"},
    {id:2, name:"jimmy"},
    {id:3, name:"jeremy"},
    {id:4, name:"jack"},
    {id:5, name:"joe"}
  ]
  candyTypeArray = [
    {id:1, name:"chocolates"},
    {id:2, name:"sweets"},
    {id:3, name:"sours"}
  ]
  candyArray = [
    {id:1, name:"snickers"},
    {id:2, name:"skittles"},
    {id:3, name:"jolly ranchers"},
    {id:4, name:"warheads"}
  ]

  state = {
    stores: this.storeArray,
    employees: this.employeeArray,
    candyTypes: this.candyTypeArray,
    candies: this.candyArray
  }

  render() {
    return (
      <article className="kandykorner">
        <StoreList stores={this.state.stores} />
        <EmployeeList employees={this.state.employees} />
        <CandyList candyTypes={this.state.candyTypes} />
      </article>
    );
  }
}