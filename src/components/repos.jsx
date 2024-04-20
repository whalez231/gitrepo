// GITHUB PORTFOLIO COMPONENT -  This component is used to fetch my github portfolio from the API and show a list of the github repositories in a page

import { useContext } from "react";
import { Context } from "./context";
import { NavLink, Outlet } from "react-router-dom";
import "../assets/styles/repos.css";
import { Helmet } from "react-helmet";
import { Back } from "../components";

const Repos = () => {
  const { repository, setPage, page } = useContext(Context);

  return (
    <div className="repos">
      <Helmet>
        <title>Git | Repositories</title>
        <meta name="description" content="My Github Repositories" />
      </Helmet>
      <div className="repos__container">
        <h1 className="repos--heading">My Github Repositories</h1>
          <ul className="repos--lists">
            {repository.map((repo) => {
              return (
                <li key={repo.id} className="repos--list">
                  <h2 className="repos--list__item">{repo.name}</h2>
                  <NavLink to={`/repos/${repo.name}`} className="repos--btn">
                    View data <span className="repos--btn__span">{">"}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        <div className="pagination">
          <span className="pagination--btn">
          <button
            className="repos--btn"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>
          </span>
          <p className="pagination--btn">
            Page: {page} of {repository.length}
          </p>
          <span className="pagination--btn">
          <button
            className="repos--btn"
            onClick={() => setPage(page + 1)}
            disabled={page === 4}
          >
            Next
          </button>
          </span>
        </div>
        <Back />
      </div>
      <Outlet />
    </div>
  );
};

export default Repos;
