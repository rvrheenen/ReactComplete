import React from "react";

const userInput = (props) => {
  const style = {
    border: "1px solid red",
    marginBottom: "1rem",
  };
  return <input type="text" style={style} onChange={props.change} />;
};

export default userInput;
