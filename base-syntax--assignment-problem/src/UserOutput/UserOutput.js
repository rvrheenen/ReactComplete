import React from "react";
import "./UserOuput.css";
const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>username: {props.username}</p>
      <p>Test</p>
    </div>
  );
};

export default userOutput;
