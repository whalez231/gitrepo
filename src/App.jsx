import { React, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import AppRouter from "./routes";
import { Layout, FallbackError } from "./components";
import Load from "./assets/img/Interwind.gif";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackError}>
      <Suspense fallback={
        <div className="home--loading">
          <img src={Load} alt="Loading..." style={{
            width: "5rem",
            height: "5rem"
          }} />
        </div>
      }>
        <Layout />
        <AppRouter />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
