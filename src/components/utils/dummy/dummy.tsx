import React from "react";
import dummyStyles from "./dummy.module.css";

const Dummy: React.FC<{ type: string; text: string; extraClass?: string }> = ({
  type,
  text,
  extraClass = "",
}) => {
  return (
    <div
      className={`${dummyStyles["dummy-body"]} ${
        type && dummyStyles[type]
      } ${extraClass}`}
    >
      <span className="txt">{text}</span>
    </div>
  );
};

export default Dummy;
