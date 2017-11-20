import React, { Component } from "react";
import gitKey from "../gitKey";

export default class RepoListItem extends Component {
  handleClick = () => {
    fetch(`https://api.github.com/repos/${this.props.repo.full_name}`, {
      method: "DELETE",
      headers: { Authorization: `token ${gitKey}` }
    }).then(res => {
      console.log(res);
    });
  };

  render() {
    return (
      <div>
        {this.props.repo.name}
        <button onClick={this.handleClick}>DELETE</button>
      </div>
    );
  }
}
