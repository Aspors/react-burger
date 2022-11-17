import React, { memo } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import {
  CONSTRUCTOR_ELEMENT,
  MENU_TYPE,
} from "../../../utils/consts/common-consts";
import {
  ADD_ITEM,
  SET_BUN,
} from "../../../services/actions/burger-constructor/burger-constructor";
import { v4 as keyGen } from "uuid";
import Bun from "../bun/bun";

const MenuWrapper = memo(({ children }) => {
  const { bun } = useSelector((store) => store.constructor);
  const dispatch = useDispatch();
  const [, dropRef] = useDrop({
    accept: [MENU_TYPE.SAUCE, MENU_TYPE.MAIN],
    drop(item) {
      handleDrop(item);
    },
  });

  const handleDrop = (element) => {
    const isBun = element.type === MENU_TYPE.BUN;

    if (isBun) {
      dispatch({ type: SET_BUN, payload: element });
    } else {
      dispatch({
        type: ADD_ITEM,
        payload: { ...element, type: CONSTRUCTOR_ELEMENT, key: keyGen() },
      });
    }
  };

  return (
    <>
      <Bun type="top" bun={bun} />
      <div ref={dropRef}>{children}</div>
      <Bun type="bottom" bun={bun} />
    </>
  );
});

MenuWrapper.propTypes = {
  children: PropTypes.element,
};

export default MenuWrapper;
