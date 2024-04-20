// CONTEXT COMPONENT - This is the context component for the app. It provides the data to the app components. It uses the Github API to fetch the data.

import React, { useState, useEffect, createContext } from "react";
import Load from "../assets/img/Interwind.gif";

export const Context = createContext();

const ContextProvider = (props) => {
  const [repository, setRepository] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/whalez231/repos?page=${page}&per_page=4`
    )
      .then((response) => response.json())
      .then((data) => {
        setRepository(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [page]);

  if (loading) {
    <di className="home--loading">
      <img
        src={Load}
        alt="Loading..."
        style={{
          width: "5rem",
          height: "5rem",
        }}
      />
    </di>
  }

  if (error) {
    <p className="home--error">
      Network Error{" "}
      <span className="home--error__span"> Try to Reload the page.</span>
    </p>;
  }

  return (
    <Context.Provider value={{ repository, page, setPage }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
