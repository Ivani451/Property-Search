import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRentals } from "../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    //  Here we bind 'this' to onInputChange and onFormSubmit to make use of our state's
    //  information with said functions.

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  // Prevents the page from refreshing after the "submit" button is clicked
  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchRentals(this.state.term);
    // after the user submits the form with the designated location, the user is redirected to the custom URL with the
    // given parameters the user gave
    console.log(window.location);
    this.props.history.push("/for_rent");

    // We set state to an empty string to clear the term when the search bar re-renders
    this.setState({ term: "" });
  }

  // Our input field is paired with our component's state
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="searchBar">
          <input
            className="search-bar"
            placeholder="search rentals"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <button className="search-button" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRentals }, dispatch);
}

/* 
    Here we connect our action creator "fetchFood" to the search bar so we can
    use the action creator as a prop for the search bar
*/
export default connect(null, mapDispatchToProps)(SearchBar);
