import React, { memo, useCallback, forwardRef } from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import {
  MENU_TYPE,
  MENU_TYPE_TRANSLATION,
} from "../../utils/consts/common-consts";
import PropTypes from "prop-types";
import { goodsItemTypes } from "../../utils/types/common-types";
import Modal from "../modal/modal";
import IngredintDetails from "../ingredient-details/ingredient-details";
import { MODAL } from "../../utils/consts/headers-consts";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_ITEM,
  SET_BUN,
} from "../../services/actions/burger-constructor/burger-constructor";
import { v4 as keyGen } from "uuid";
import {
  SET_MODAL_ELEMENT,
  TOGGLE_MODAL,
} from "../../services/actions/burger-ingredients/burger-ingrediens";
import BurgerCard from "./burger-card";

const BurgerCards = memo(
  forwardRef(({ data, type }, ref) => {
    const { cart, bun } = useSelector((store) => store.constructor);
    const { isModalActive } = useSelector((store) => store.ingredients);
    const dispatch = useDispatch();
    const handleShowModal = useCallback(() => {
      dispatch({ type: TOGGLE_MODAL });
    }, [dispatch]);

    const handleItemClick = useCallback(
      (e) => {
        const element = e.currentTarget.attributes["data-key"].value;
        const foundedElement = data.find((item) => item._id === element);
        const isBun = foundedElement.type === MENU_TYPE.BUN;

        if (isBun) {
          dispatch({ type: SET_BUN, payload: foundedElement });
        } else {
          dispatch({
            type: ADD_ITEM,
            payload: { ...foundedElement, key: keyGen() },
          });
        }
        dispatch({ type: SET_MODAL_ELEMENT, payload: element });
        handleShowModal();
      },
      [dispatch, data, handleShowModal]
    );

    const countItemsAmount = useCallback(
      (id) => {
        return cart.filter(({ _id }) => _id === id).length;
      },
      [cart]
    );

    return (
      <>
        <span
          ref={ref}
          className={
            "text text_type_main-medium mb-6 " +
            burgerIngredientsStyles.partsName
          }
        >
          {MENU_TYPE_TRANSLATION[type]}
        </span>
        <ul className={burgerIngredientsStyles["menu__items"]}>
          {data.map((item) => {
            if (item.type !== type) return null;
            const itemsAmount = countItemsAmount(item._id);
            return (
              <BurgerCard
                item={item}
                handleItemClick={handleItemClick}
                bun={bun}
                itemsAmount={itemsAmount}
              />
            );
          })}
          {isModalActive && (
            <Modal handleShowModal={handleShowModal} header={MODAL.HEADER}>
              <IngredintDetails />
            </Modal>
          )}
        </ul>
      </>
    );
  })
);

BurgerCards.propTypes = {
  data: PropTypes.arrayOf(goodsItemTypes).isRequired,
  type: PropTypes.string.isRequired,
};

export default BurgerCards;
