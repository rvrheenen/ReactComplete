import React from "react";

const validationComponent = (props) => {
  const output = props.inputLength >= 5 ? <p>Text long enough</p> : <p>Text too short!</p>;
  return <div>{output}</div>;
};

export default validationComponent;
