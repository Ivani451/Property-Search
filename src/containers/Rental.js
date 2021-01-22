import React, { Component } from "react";

class Rental extends Component {
  renderRentals(rentals) {
    return (
      <div className="rentals-list">
        {rentals.map((rental) => {
          console.log(rental);
          return (
            <div key={rental.id} className="rental-card">
              <h3>{rental.addressLine1}</h3>
              {/* Here is the default pic we show for the rental listsings*/}
              {/* <img src="home.png" alt="" width="500" height="600" /> */}
            </div>
          );
        })}

        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.props.rentals.map(this.renderRentals, this)}</div>;
  }
}

export default Rental;
