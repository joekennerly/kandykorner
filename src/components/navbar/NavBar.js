import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom";

class NavBar extends Component {

  getData = (word) => {
    console.log(word)
    const searchObj = {}
    fetch(`http://localhost:5002/stores?name_like=${word}`)
    .then(r => r.json())
    .then(store => searchObj.store = store)
    .then(() => fetch(`http://localhost:5002/candyTypes?name_like=${word}`))
    .then(r => r.json())
    .then(animal => searchObj.animals = animal)
    .then(() => fetch(`http://localhost:5002/employees?name_like=${word}`))
    .then(r => r.json())
    .then(employee => searchObj.employees = employee)
    .then(() => this.setState(searchObj))
    .then(() => this.props.history.push("/search"))
}

  handleKeyPress = event => {
    if (event.key === "Enter") {
      console.log("enter press here!");
      let keyword = event.target.value;
      console.log(keyword);
      // this.getData(keyword);
    }
  };

  render() {
    return (
      <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Stores
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/candyTypes">
              Candies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/employees">
              Employees
            </Link>
          </li>
          <li className="nav-item">
            <div className="md-form active-cyan active-cyan-2 m-2">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onKeyPress={this.handleKeyPress}
              />
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavBar);
