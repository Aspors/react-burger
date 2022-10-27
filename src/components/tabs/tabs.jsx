import React, { PureComponent } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export default class Tabs extends PureComponent {
  tabData = [{ name: "Булки" }, { name: "Соусы" }, { name: "Начинки" }];

  render() {
    const { onTabClick, current } = this.props;

    return (
      <div style={{ display: "flex" }} className="tabs mb-5">
        {this.tabData.map(({ name }, key) => {
          return (
            <Tab
              key={key}
              value={name}
              active={current === name}
              onClick={onTabClick}>
              {name}
            </Tab>
          );
        })}
      </div>
    );
  }
}
