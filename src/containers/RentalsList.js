import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRentals } from "../actions";
import Rental from "./Rental";
import MyMap from "../containers/GoogleMap";

// These properties are loaded when the user specifies which area to look for properties at

class RentalsList extends Component {
  componentDidMount() {
    const handle = this.props.match.params.city_name;

    this.props.fetchRentals(handle);
  }

  render() {
    // the location provided by the user is modifiend so that there is no spaces and that the city, state, and country are
    // split inside an array to better work with the individual parts. Example: ["Austin", "TX", "USA"]
    const splittedCityName = this.props.match.params.city_name
      .replace(/\s/g, "")
      .split(",");

    return (
      <div className="container">
        <div className="google-map">
          <MyMap />
        </div>

        <div className="rentals-list">
          <h1 className="rental-listing-title">
            {splittedCityName[0]}, {splittedCityName[1]} Rental Listings
          </h1>

          <Rental rentals={this.props.rentals} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ rentals }) {
  return {
    rentals,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRentals }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RentalsList);
