import React, { Component } from "react";
import RepoList from "./RepoList";
import gitKey from "../gitKey";

export default class RepoContainer extends Component {
  state = {
    repos: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/Jakapam/repos?per_page=100", {
      headers: { Authorization: `token ${gitKey}` }
    })
      .then(res => res.json())
      .then(data => this.setState({ repos: data }));
  }

  render() {
    return (
      <div>
        <RepoList repos={this.state.repos} handleClick={this.handleDelete} />
      </div>
    );
  }
}
