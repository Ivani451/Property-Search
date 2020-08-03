import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRentals } from "../actions";
import Rental from "./Rental";

// These properties are loaded when the user specifies which area to look for properties at

class RentalsList extends Component {
  componentDidMount() {
    const handle = this.props.match.params.id;

    this.props.fetchRentals(handle);
  }

  render() {
    return (
      <div>
        <Rental rentals={this.props.rentals} />
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