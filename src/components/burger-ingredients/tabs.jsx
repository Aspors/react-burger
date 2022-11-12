import React, { memo } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  MENU_TYPE,
  MENU_TYPE_TRANSLATION,
} from "../../utils/consts/common-consts";
import PropTypes from "prop-types";
import { refType } from "../../utils/types/common-types";

const Tabs = memo(({ onTabClick, refs, current }) => {
  const tabData = [
    { name: MENU_TYPE.BUN, ref: refs.ref_bun },
    { name: MENU_TYPE.SAUCE, ref: refs.ref_sauce },
    { name: MENU_TYPE.MAIN, ref: refs.ref_main },
  ];

  return (
    <div style={{ display: "flex" }} className="tabs mb-10">
      {tabData.map(({ name, ref }, key) => {
        return (
          <Tab
            key={key}
            value={name}
            active={current === name}
            onClick={(value) => onTabClick(value, ref)}
          >
            {MENU_TYPE_TRANSLATION[name]}
          </Tab>
        );
      })}
    </div>
  );
});

Tabs.propTypes = {
  onTabClick: PropTypes.func.isRequired,
  refs: PropTypes.objectOf(refType),
  current: PropTypes.string.isRequired,
};

export default Tabs;
