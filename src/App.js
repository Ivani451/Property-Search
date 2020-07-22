import React from "react";
import { Store } from "./Store";
import Navbar from "./components/Navbar";
import { Form, SearchBar } from "./containers/SearchBar";

const App = () => {
  const store = React.useContext(Store);

  return (
    <React.Fragment>
      {console.log(store)};
      <Navbar />
      <Form />
      <SearchBar />
    </React.Fragment>
  );
};

export default App;
