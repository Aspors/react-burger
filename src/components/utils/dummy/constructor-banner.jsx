import React from "react";
import stylesConstructorBanner from "./constructor-banner.module.css";
import { BANNER_TEXT } from "../../../utils/consts/ui-consts/dummy-consts";

const ConstructorBanner = ({ extraClass = "" }) => {
  return (
    <div
      className={`${stylesConstructorBanner["constructor-banner"]} ${extraClass}`}
    >
      <span className="constructor-banner text text_type_main-medium">
        {BANNER_TEXT}
      </span>
    </div>
  );
};

export default ConstructorBanner;
