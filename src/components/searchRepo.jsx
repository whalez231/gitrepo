import { useState } from "react";
import useForm from "../hooks/useForm";
import Pagination from "./pagination";
import "../assets/styles/searchRepo.css";
import { Back } from "../components";
import Magnify from "../assets/img/Magnify.gif";
import { Helmet } from "react-helmet";

const UserRepo = () => {
  const [repo, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(5);

  const { inputs, updateForm, resetForm } = useForm({
    github: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the Github username is empty
    if (!inputs.github) {
      setError("Enter a GitHub username");
      setRepo([]);
      setSuccess("");
      return;
    }
    setLoading(true);
    fetch(
      `https://api.github.com/users/${inputs.github}/repos?per_page=50&sort=stars&order=desc`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`No Repository Found for ${inputs.github}`);
      })
      .then((data) => {
        setRepo(data);
        setLoading(false);
        setSuccess(
          `${data.length} ${
            data.length > 1 ? "Repositories" : "Repository"
          } found for *${inputs.github}*`
        );
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
        setRepo([]);
        setSuccess("");
      });
    resetForm();
  };

  const indexOfLastUser = currentPage * reposPerPage;
  const indexOfFirstUser = indexOfLastUser - reposPerPage;
  const currentUsers =
    repo.length > 0 ? repo.slice(indexOfFirstUser, indexOfLastUser) : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(repo.length / reposPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="searchRepo--container">
      <Helmet>
        <title>GitRepo | Search Repos</title>
        <meta
          name="description"
          content="Search for your own or any repo's repositories using their GitHub username."
        />
      </Helmet>
      <div className="searchRepo">
        <h1 className="searchRepo--heading">Explore Repositories on Github</h1>
        <form className="searchRepo--form" onSubmit={handleSubmit}>
          <div className="searchRepo--form__container">
            <input
              type="text"
              name="github"
              placeholder="Enter Github Username"
              value={inputs.github}
              onChange={updateForm}
              className="searchRepo--form__input"
            />
            {error && <p className="searchRepo--error">{error}</p>}
          </div>
          <button type="submit" className="searchRepo--form__btn">
            Search
          </button>
        </form>
        <div className="searchRepo--wrapper">
          {loading && (
            <div className="searchRepo--loading">
              <img
                src={Magnify}
                alt="Loading..."
                style={{
                  width: "5rem",
                  height: "5rem",
                }}
              />
            </div>
          )}
          <div className="searchRepo--results">
            <h2 className="searchRepo--results__heading">
              {success && <span>{success}</span>}
            </h2>
            <p className="searchRepo--results__count">
              {repo.length > 0 && !loading && (
                <span>
                  Showing {currentUsers.length} of the {repo.length}{" "}
                  {repo.length > 1 ? "Repositories" : "Repository"}
                </span>
              )}
            </p>
          </div>
          <ul className="searchRepo--lists">
            {currentUsers.map((repo, index) => {
              const { name, html_url, description, language, topics } =
                repo || [];
              // add commmas to topics
              const topicsComma =
                topics && topics.length > 0 ? topics.join(", ") : "";
              return (
                <li key={index} className="searchRepo--list">
                  <h3 className="searchRepo--list__title">
                    <strong className="strong">Name </strong>
                    {name}
                  </h3>
                  {description && (
                    <p className="searchRepo--list__content">
                      <strong className="strong">Description </strong>
                      {description}
                    </p>
                  )}
                  {language && (
                    <p className="searchRepo--list__content">
                      <strong className="strong">Language </strong>
                      {language}
                    </p>
                  )}
                  {topicsComma && (
                    <p className="searchRepo--list__content">
                      <strong className="strong">Topics </strong>
                      {topicsComma}
                    </p>
                  )}
                  <a
                    href={html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="searchRepo--link"
                  >
                    Open in Github
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pagination">
          <Pagination
            reposPerPage={reposPerPage}
            totalRepos={repo.length}
            paginate={paginate}
            prevPage={prevPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Back />
    </div>
  );
};

export default UserRepo;
