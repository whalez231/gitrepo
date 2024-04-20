// BACK HOME COMPONENT -  UseNavigate to route back to home page

import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div className="back">
      <button
        onClick={() => navigate("/")}
        style={{
          fontSize: "1rem",
          color: "#00bb14",
          textDecoration: "none",
          border: "none",
          borderRadius: "1rem",
          padding: ".2rem .5rem",
          cursor: "pointer",
        }}
      >
        Back &#8592;
      </button>
    </div>
  );
};

export default Back;
