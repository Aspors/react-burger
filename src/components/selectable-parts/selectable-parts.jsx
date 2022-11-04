import React, { memo, useCallback, useState } from "react";
import selectablePartsStyles from "./selectable-parts.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { MENU_TYPE_TRANSLATION } from "../../utils/consts/common-consts";
import PropTypes from "prop-types";
import { goodsItemTypes } from "../../utils/types/common-types";
import Modal from "../modal/modal";
import IngredintDetails from "../ingredient-details/ingredient-details";
import { MODAL } from "../../utils/consts/headers-consts";

const SelectableParts = memo((props) => {
  const { data, type } = props;
  const [isModalActive, setModalActive] = useState(false);
  const [activeElementKey, setActiveElementKey] = useState();

  const handleShowModal = useCallback(() => {
    setModalActive(!isModalActive);
  }, [isModalActive]);

  const handleItemClick = (e) => {
    handleShowModal();
    setActiveElementKey(e.currentTarget.attributes["data-key"].value);
  };

  const findItem = useCallback(
    (data) => {
      return data.find((item) => item._id === activeElementKey);
    },
    [activeElementKey]
  );
  return (
    <>
      <span
        className={
          "text text_type_main-medium mb-6 " + selectablePartsStyles.partsName
        }>
        {MENU_TYPE_TRANSLATION[type]}
      </span>
      <div className={selectablePartsStyles["menu__items"]}>
        {data.map((item, index) => {
          if (item.type !== type) return null;
          return (
            <li
              onClick={(e) => handleItemClick(e)}
              tabIndex={0}
              data-key={item._id}
              key={item._id}
              className={selectablePartsStyles.menu__item}>
              <img src={item.image} alt={type} className="menu__item-img" />
              <span
                className={
                  "text text_type_digits-default " +
                  selectablePartsStyles["menu__item-price"]
                }>
                {item.price}
                <CurrencyIcon type="primary" />
              </span>
              <span
                className="text text_type_main-small"
                style={{ textAlign: "center" }}>
                {item.name}
              </span>
            </li>
          );
        })}
        {isModalActive && (
          <Modal handleShowModal={handleShowModal} header={MODAL.HEADER}>
            <IngredintDetails {...findItem(data)} />
          </Modal>
        )}
      </div>
    </>
  );
});

SelectableParts.propTypes = {
  data: PropTypes.arrayOf(goodsItemTypes).isRequired,
  type: PropTypes.string.isRequired,
  cart: PropTypes.arrayOf(goodsItemTypes).isRequired,
};

export default SelectableParts;
