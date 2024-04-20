import React, { useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Back } from "../components";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert" style={{ textAlign: "center", marginTop: "5rem" }}>
      <p style={errorStyles.title}>You failed the test!!!</p>
      <pre style={errorStyles.message}>{error.message}</pre>
      <button style={errorStyles.button} onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
};

const Bomb = ({ username }) => {
  if (username === "COVID") {
    throw new Error("💣Bomboclat💣");
  }
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <p style={successStyles.title}>Hello {username}, you passed the test!!!</p>
    </div>
  );
};

const ErrorBoundaryTest = () => {
  const [username, setUsername] = useState("");
  const usernameRef = useRef(null);

  const handleChange = () => {
    setUsername(usernameRef.current.value);
  };

  return (
    <div style={containerStyles}>
      <h1 style={titleStyles}>ErrorBoundary Test Page</h1>
      <label style={labelStyles}>
        {`Type your Username (Don't type "COVID"): `}
        <input
          ref={usernameRef}
          value={username}
          onChange={handleChange}
          style={inputStyles}
        />
      </label>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => setUsername("")}
        resetKeys={[username]}
      >
        <Bomb username={username} />
      </ErrorBoundary>
      <div style={buttonContainerStyles}>
        <Back />
      </div>
    </div>
  );
};

const containerStyles = {
  padding: "3rem 2rem 1rem",
};

const titleStyles = {
  textAlign: "center",
  fontSize: "2rem",
  color: "#ffea11",
  fontFamily: "Tilt Prism",
};

const labelStyles = {
  fontSize: "1.3rem",
  fontWeight: "700",
  fontFamily: "Fira Sans",
};

const inputStyles = {
  border: "none",
  borderRadius: ".5rem",
  width: "15rem",
  padding: ".3rem",
  fontSize: "1.5rem",
  fontWeight: "700",
};

const errorStyles = {
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    fontFamily: "Fira Sans",
  },
  message: {
    fontStyle: "italic",
    fontSize: "2.2rem",
    fontWeight: "700",
    color: "red",
    fontFamily: "Fira Sans",
  },
  button: {
    padding: ".5rem",
    fontSize: "1rem",
    fontWeight: "700",
    color: "#0046dc",
    borderRadius: ".5rem",
    border: "none",
    backgroundColor: "#bbe0ff",
    fontFamily: "Fira Sans",
    cursor: "pointer",
  },
};

const successStyles = {
  title: {
    color: "#bbe0ff",
    fontSize: "2rem",
    fontFamily: "Fira Sans",
  },
};

const buttonContainerStyles = {
  textAlign: "center",
  marginTop: "10rem",
};

export default ErrorBoundaryTest;
