import React, { Component } from "react";
import candyTypes from './CandyTypes/CandyTypes';

export default class IndividualCandies extends Component {
  render() {
    return (
      <section className="candies">
        {this.props.candies.map(candy => (
          <div key={candy.id}>
            {candy.name}
            of type
            {
              .find().name
            }
          </div>
        ))}
      </section>
    );
  }
}