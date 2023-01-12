import React, { FC, memo, useCallback } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  MENU_TYPE,
  MENU_TYPE_TRANSLATION,
} from "../../../utils/consts/common-consts";
import ITabs from "./tabs.type";
import { useAppSelector } from "../../../hooks/useAppSelector";

const Tabs: FC<ITabs> = memo(({ refs }) => {
  const { activeTab } = useAppSelector((store) => store.ingredients);

  const [ref_bun, ref_sauce, ref_main] = refs;

  const onTabClick = useCallback((value: string, ref: typeof ref_bun) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const tabData = [
    { name: MENU_TYPE.BUN, ref: ref_bun },
    { name: MENU_TYPE.SAUCE, ref: ref_sauce },
    { name: MENU_TYPE.MAIN, ref: ref_main },
  ];

  return (
    <div style={{ display: "flex" }} className="tabs mb-10">
      {tabData.map(({ name, ref }, key) => {
        return (
          <Tab
            key={key}
            value={name}
            active={activeTab === name}
            onClick={(value) => onTabClick(value, ref)}
          >
            {MENU_TYPE_TRANSLATION[name]}
          </Tab>
        );
      })}
    </div>
  );
});

export default Tabs;
