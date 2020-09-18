import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";

export default class SearchBar extends Component {
  state = {
    searchTerm: "",
  };
  handleSubmit = (e) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
    e.preventDefault();
  };

  handleChange = (e) => this.setState({ searchTerm: e.target.value });

  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}
