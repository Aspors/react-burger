import React from "react";
import dummyStyles from "./dummy.module.css";

const Dummy = ({ type, text }) => {
  return (
    <div
      className={`${dummyStyles["dummy-body"]} ${type && dummyStyles[type]}`}>
      <span className="txt">{text}</span>
    </div>
  );
};

export default Dummy;
