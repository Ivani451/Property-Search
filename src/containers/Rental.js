import React, { Component } from "react";

class Rental extends Component {
  renderRentals(rentals) {
    return (
      <div className="rentals-list">
        {rentals.map((rental) => {
          return (
            <div key={rental.id} className="rental-card">
              <h3>{rental.addressLine1}</h3>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        {this.props.rentals.map(this.renderRentals, this)}
      </div>
    );
  }
}

export default Rental;
