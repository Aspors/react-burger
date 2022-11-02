import React, { memo } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  MENU_TYPE,
  MENU_TYPE_TRANSLATION,
} from "../../utils/consts/common-consts";
import PropTypes from "prop-types";

const Tabs = memo((props) => {
  const tabData = [
    { name: MENU_TYPE.BUN },
    { name: MENU_TYPE.SAUCE },
    { name: MENU_TYPE.MAIN },
  ];

  const { onTabClick, current } = props;
  return (
    <div style={{ display: "flex" }} className="tabs mb-10">
      {tabData.map(({ name }, key) => {
        return (
          <Tab
            key={key}
            value={name}
            active={current === name}
            onClick={onTabClick}>
            {MENU_TYPE_TRANSLATION[name]}
          </Tab>
        );
      })}
    </div>
  );
});

Tabs.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
};

export default Tabs;
