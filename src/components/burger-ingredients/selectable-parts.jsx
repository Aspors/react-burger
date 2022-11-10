import React, {
  memo,
  useCallback,
  useContext,
  useState,
  forwardRef,
} from "react";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  MENU_TYPE,
  MENU_TYPE_TRANSLATION,
} from "../../utils/consts/common-consts";
import PropTypes from "prop-types";
import { goodsItemTypes } from "../../utils/types/common-types";
import Modal from "../modal/modal";
import IngredintDetails from "../ingredient-details/ingredient-details";
import { MODAL } from "../../utils/consts/headers-consts";
import { CartDataContext } from "../../contexts/cartDataContext";
import { addItem, changeItems } from "../utils/functions/cart-functions";

const SelectableParts = memo(
  forwardRef(({ data, type }, ref) => {
    const { cart, setCart } = useContext(CartDataContext);
    const [isModalActive, setModalActive] = useState(false);
    const [activeElementKey, setActiveElementKey] = useState();

    const handleShowModal = useCallback(() => {
      setModalActive(!isModalActive);
    }, [isModalActive]);

    const handleItemClick = (e) => {
      const element = e.currentTarget.attributes["data-key"].value;
      const foundedElement = data.find((item) => item._id === element);
      const isBun = foundedElement.type === MENU_TYPE.BUN;

      if (isBun) {
        const cartBunIndex = cart.findIndex(
          (item) => item.type === MENU_TYPE.BUN
        );
        changeItems(cartBunIndex, setCart, foundedElement);
      } else {
        addItem(foundedElement, setCart);
      }
      handleShowModal();
      setActiveElementKey(element);
    };

    const findItem = useCallback(
      (data) => {
        return data.find((item) => item._id === activeElementKey);
      },
      [activeElementKey]
    );

    const countItemsAmount = useCallback(
      (id, type) => {
        const amount = cart.filter(({ _id }) => _id === id).length;
        return amount ? (type === MENU_TYPE.BUN ? amount * 2 : amount) : null;
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
            const itemsAmount = countItemsAmount(item._id, item.type);
            return (
              <li
                onClick={(e) => handleItemClick(e)}
                tabIndex={0}
                data-key={item._id}
                key={item._id}
                className={burgerIngredientsStyles.menu__item}
              >
                {itemsAmount && <Counter count={itemsAmount} />}
                <img src={item.image} alt={type} className="menu__item-img" />
                <span
                  className={
                    "text text_type_digits-default " +
                    burgerIngredientsStyles["menu__item-price"]
                  }
                >
                  {item.price}
                  <CurrencyIcon type="primary" />
                </span>
                <span
                  className="text text_type_main-small"
                  style={{ textAlign: "center" }}
                >
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
        </ul>
      </>
    );
  })
);

SelectableParts.propTypes = {
  data: PropTypes.arrayOf(goodsItemTypes),
  type: PropTypes.string,
  cart: PropTypes.arrayOf(goodsItemTypes),
};

export default SelectableParts;
