// MoreInfo COMPONENT - This component displays more data on each repositories when 'View repo data' link is clicked in the repo component.

import { Link, useParams } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "./context";
import { Helmet } from "react-helmet";
import "../assets/styles/moreInfo.css";

const MoreInfo = () => {
  const { repository } = useContext(Context);
  const { repo } = useParams();
  const repoData = repository.find((item) => item.name === repo);
  const {
    name,
    description,
    html_url,
    homepage,
    language,
    created_at,
    updated_at,
    pushed_at,
    topics,
    forks_count,
    stargazers_count,
    watchers_count,
    size,
    open_issues,
    has_discussions,
    visibility,
    login,
    default_branch,
  } = repoData || {};
  const dateCreated = new Date(created_at);
  const dateUpdated = new Date(updated_at);
  const datePushed = new Date(pushed_at);
  const created = dateCreated.toLocaleDateString();
  const updated = dateUpdated.toLocaleDateString();
  const pushed = datePushed.toLocaleDateString();

  const topicsComma = topics && topics.length > 0 ? topics.join(", ") : "";

  return (
    <div className="info">
      <Helmet>
        <title>GitFolio | {name}</title>
        <meta name="description" content="Repository Data" />
      </Helmet>
      <h1 className="info--heading">Repository Data</h1>
      <div className="info--data">
        {name && (
          <p className="info--item">
            <strong className="info--strong">Name </strong>
            {name}
          </p>
        )}
        {description && (
          <p className="info--item">
            <strong className="info--strong">Description </strong>
            {description}
          </p>
        )}
        {topicsComma && (
          <p className="info--item">
            <strong className="info--strong">Topics </strong>
            {topicsComma}
          </p>
        )}
        {language && (
          <p className="info--item">
            <strong className="info--strong">Language </strong>
            {language}
          </p>
        )}
        {created && (
          <p className="info--item">
            <strong className="info--strong">Date Created </strong>
            {created}
          </p>
        )}
        {updated && (
          <p className="info--item">
            <strong className="info--strong">Last updated </strong>
            {updated}
          </p>
        )}
        {pushed && (
          <p className="info--item">
            <strong className="info--strong">Pushed At </strong>
            {pushed}
          </p>
        )}
        {forks_count > 0 && (
          <p className="info--item">
            <strong className="info--strong">Forks </strong>
            {forks_count}
          </p>
        )}
        {stargazers_count > 0 && (
          <p className="info--item">
            <strong className="info--strong">Stars </strong>
            {stargazers_count}
          </p>
        )}
        {watchers_count > 0 && (
          <p className="info--item">
            <strong className="info--strong">Watchers </strong>
            {watchers_count}
          </p>
        )}
        {has_discussions && (
          <p className="info--item">
            <strong className="info--strong">Has Discussions </strong>
            {has_discussions}
          </p>
        )}
        {open_issues > 0 && (
          <p className="info--item">
            <strong className="info--strong">Open Issues </strong>
            {open_issues}
          </p>
        )}
        {default_branch && (
          <p className="info--item">
            <strong className="info--strong">Default Branch </strong>
            {default_branch}
          </p>
        )}
        {visibility && (
          <p className="info--item">
            <strong className="info--strong">Visibility </strong>
            {visibility}
          </p>
        )}
        {size > 0 && (
          <p className="info--item">
            <strong className="info--strong">Size </strong>
            {size}
          </p>
        )}
        {login && (
          <p className="info--item">
            <strong className="info--strong">Owner </strong>
            {login}
          </p>
        )}
        {homepage && (
          <p className="info--item">
            <strong className="info--strong">Repo Homepage </strong>
            {homepage}
          </p>
        )}
      </div>
      <a
        href={html_url}
        target="_blank"
        rel="noreferrer"
        className="info--link"
      >
        Open in Github
      </a>
      <Link to="/repos" className="info--back">
        Back to repo lists &#8592;
      </Link>
    </div>
  );
};

export default MoreInfo;
