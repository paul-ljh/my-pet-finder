import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
import Search from "./SearchParams";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Bugger!</Link>
        </header>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <Search path="/search-params" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
