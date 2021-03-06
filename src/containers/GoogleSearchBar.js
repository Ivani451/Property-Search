import React from "react";
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
    // Figure out how to set address to the address that was clicked on the dropdown menu, so far, only the address in the
    // input bar is set to the state
    this.setState({ address: this.address }); // this can be simplified ot this.setState({ address }) but not working the way I want it to

    console.log(address, "handleSelect console.log");

    this.props.history.push(`/for_rent/${this.state.address}`);

    geocodeByAddress(address)
      .then((results) => results[0])
      .then((latLng) => console.log("Succfdfess", latLng))
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
              <button
                id="search-button"
                type="submit"
                onClick={this.onFormSubmit}
              >
                <i className="fas fa-search" />
              </button>
            </form>

            <div id="suggestions-box">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const style = suggestion.active
                  ? { backgroundColor: "#3797E8", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    <span id="cool-yesk">{suggestion.description}</span>
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

export default withRouter(GoogleSearchBar);
