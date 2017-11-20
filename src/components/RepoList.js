import React from "react";
import RepoListItem from "./RepoListItem";

const RepoList = props => {
  const reposList = props.repos.map(repo => {
    return (
      <RepoListItem
        key={repo.id}
        reFetch={props.reFetch}
        repo={repo}
        handleClick={props.handleClick}
      />
    );
  });

  return <div>{reposList}</div>;
};

export default RepoList;
