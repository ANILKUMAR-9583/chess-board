import React from "react";

const Square = ({ isBlack, children }) => {
  const style = {
    backgroundColor: isBlack ? "#769656" : "#eeeed2",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
  };

  return <div style={style}>{children}</div>;
};

export default Square;
