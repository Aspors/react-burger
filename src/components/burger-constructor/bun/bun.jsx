import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { forwardRef } from "react";
import Dummy from "../../utils/dummy/dummy";
import { useDrop } from "react-dnd";
import { MENU_TYPE } from "../../../utils/consts/common-consts";
import { SET_BUN } from "../../../services/actions/burger-constructor/burger-constructor";
import { useDispatch } from "react-redux";
import bunStyles from "./bun.module.css";
import { DUMMY_TEXT } from "../../../utils/consts/dummy-consts";

const EmptyBun = forwardRef(({ type, isHover }, ref) => {
  return (
    <div
      ref={ref}
      onDrop={(e) => e.preventDefault()}
      className={`pl-8 pr-3 ${isHover && bunStyles["active_drop-target"]}`}
    >
      <Dummy type={type} text={DUMMY_TEXT} />
    </div>
  );
});

const Bun = ({ type, bun }) => {
  const dispatch = useDispatch();
  const [{ isHover }, ref] = useDrop({
    accept: MENU_TYPE.BUN,
    drop(item) {
      dispatch({ type: SET_BUN, payload: item });
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  if (!bun) return <EmptyBun ref={ref} isHover={isHover} type={type} />;
  return (
    <div
      ref={ref}
      onDrop={(e) => e.preventDefault()}
      className={`pl-8 pr-3 ${isHover && bunStyles["active_drop-target"]}`}
    >
      <ConstructorElement
        type={type}
        isLocked
        text={bun.name}
        price={bun.price}
        thumbnail={bun.image}
      />
    </div>
  );
};

export default Bun;
