import React, { memo, useCallback, forwardRef } from "react";
import burgerCardsStyles from "./burger-cards.module.css";
import { MENU_TYPE_TRANSLATION } from "../../../utils/consts/common-consts";
import PropTypes from "prop-types";
import { goodsItemTypes } from "../../../utils/types/common-types";
import Modal from "../../modal/modal";
import IngredintDetails from "../../modal/ingredient-details/ingredient-details";
import { MODAL } from "../../../utils/consts/ui-consts/headers-consts";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_MODAL_ELEMENT,
  TOGGLE_MODAL,
} from "../../../services/redux/actions/burger-ingredients/burger-ingrediens";
import BurgerCard from "../burger-card/burger-card";

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
        dispatch({ type: SET_MODAL_ELEMENT, payload: element });
        handleShowModal();
      },
      [dispatch, handleShowModal]
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
            "text text_type_main-medium mb-6 " + burgerCardsStyles.partsName
          }
        >
          {MENU_TYPE_TRANSLATION[type]}
        </span>
        <ul className={burgerCardsStyles["menu__items"]}>
          {data.map((item) => {
            if (item.type !== type) return null;
            const itemsAmount = countItemsAmount(item._id);
            return (
              <BurgerCard
                key={item._id}
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
  cart: PropTypes.arrayOf(goodsItemTypes),
  isModalActive: PropTypes.bool,
  bun: PropTypes.oneOfType([PropTypes.object, goodsItemTypes]),
  type: PropTypes.string.isRequired,
};

export default BurgerCards;
