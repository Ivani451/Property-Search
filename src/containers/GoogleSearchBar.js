import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRentals } from "../actions";
import { withRouter } from "react-router-dom";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

class GoogleSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };

    //  Here we bind 'this' to onInputChange and onFormSubmit to make use of our state's
    //  information with said functions.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    this.props.history.push(`/for_rent/${this.state.address}`);

    geocodeByAddress(address)
      .then((results) => results[0])
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  // Prevents the page from refreshing after the "submit" button is clicked
  onFormSubmit(event) {
    event.preventDefault();

    this.props.history.push(`/for_rent/${this.state.address}`);

    // We set state to an empty string to clear the term when the search bar re-renders
    this.setState({ address: "" });
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          /* 
            - getInputProps will return the props that cam be spread over the input element. 
            - getSuggestionItemProps will return the props that can be spread over each suggestion item in the autocomplete dropdown. 
              It must be called with a suggestion object as an argument.
            - loading is a boolean indicating whether or not the request is pending or has completed.
            - suggestions is an array of suggestion objects that contain the data from the Google Maps API and its associated metadata
          */
          <div>
            <h1>Find your next home.</h1>
            <form id="search">
              <input
                id="search-bar"
                value={this.state.address}
                onChange={this.onInputChange}
                {...getInputProps({
                  placeholder: "Enter a city",
                })}
              />
              <button id="search-button" type="submit">
                <i className="fas fa-search" />
              </button>
            </form>

            <div>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const style = suggestion.active
                  ? { backgroundColor: "#3797E8", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
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
export default withRouter(connect(null, mapDispatchToProps)(GoogleSearchBar));
