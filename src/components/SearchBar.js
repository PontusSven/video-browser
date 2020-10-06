import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };
  render(props) {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>{this.props.label}</label>
            <input
              type="text"
              placeholder="Search"
              value={this.state.term}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
