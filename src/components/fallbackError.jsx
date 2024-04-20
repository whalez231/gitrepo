// FALLBACK ERROR COMPONENT - This component is used to display a fallback error message from react ErrorBoundary when there is an error in the code base.

import React from "react";

const FallbackError = ({ error }) => {
  return (
    <div role="alert">
      <h1
        style={{
          textTransform: "uppercase",
          fontWeight: "900",
          fontSize: "25px",
          minHeight: "100vh"
        }}
      >
        Something went wrong!!!
      </h1>
      <pre style={{ color: "red", fontWeight: "600", fontSize: "20px" }}>
        {error.message}
      </pre>
    </div>
  );
};

export default FallbackError;
