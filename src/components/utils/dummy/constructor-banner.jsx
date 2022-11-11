import React from "react";
import stylesConstructorBanner from "./constructor-banner.module.css";
import { BANNER_TEXT } from "@consts/dummy-consts";

const ConstructorBanner = () => {
  return (
    <div className={stylesConstructorBanner["constructor-banner"]}>
      <span className="constructor-banner text text_type_main-medium">
        {BANNER_TEXT}
      </span>
    </div>
  );
};

export default ConstructorBanner;
