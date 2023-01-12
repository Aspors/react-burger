import React, { memo, ReactNode } from "react";
import { useDrop } from "react-dnd";
import {
  CONSTRUCTOR_ELEMENT,
  MENU_TYPE,
} from "../../../utils/consts/common-consts";

import { v4 as keyGen } from "uuid";
import Bun from "../bun/bun";
import { TBun } from "../../../utils/types/component-types/bun.types";
import {
  ADD_ITEM,
  SET_BUN,
} from "../../../services/redux/actions/burger-constructor/burger-constructor.consts";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

const MenuWrapper: React.FC<{ children?: ReactNode }> = memo(({ children }) => {
  const bun = useAppSelector((store) => store.constructor.bun);
  const dispatch = useAppDispatch();
  const [isDragging, dropRef] = useDrop({
    accept: [MENU_TYPE.SAUCE, MENU_TYPE.MAIN],
    drop(item: TBun) {
      handleDrop(item);
    },
    collect: (monitor) => ({
      isDragging: monitor.isOver(),
    }),
  });

  const handleDrop = (element: TBun) => {
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
  const childrenToProps = React.cloneElement(
    children as React.ReactElement,
    isDragging
  );
  return (
    <>
      <Bun type="top" bun={bun} />
      <div ref={dropRef}>{childrenToProps}</div>
      <Bun type="bottom" bun={bun} />
    </>
  );
});

export default MenuWrapper;
