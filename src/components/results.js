import React, { Component } from "react";
import Logo from "./logo.js";

import { connect } from "react-redux";
import * as actions from "../actions";

import SearchBar from "./searchBar";
import ResultsPosts from "./resultsPosts";

class Results extends Component {
  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query);
    this.props.history.push("/results");
    console.log(query);
  }

  render() {
    return (
      <div className="results">
        <Logo size={55} />
        <SearchBar
          page="results"
          onSubmit={(query) => this.handleSearchBarSubmit(query)}
        />
        <ResultsPosts />
      </div>
    );
  }
}

export default connect(null, actions)(Results);
