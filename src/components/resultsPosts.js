import React, { Component } from "react";

class ResultsPosts extends Component {
  render() {
    return (
      <div className="results-post">
        <div className="results-post__wrapper">
          <ul className="results-posts__posts">Results here.</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default conntect(mapStateToProps)(ResultsPosts);
