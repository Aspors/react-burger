import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { forwardRef } from "react";
import Dummy from "../../utils/dummy/dummy";
import { useDrop } from "react-dnd";
import { MENU_TYPE } from "../../../utils/consts/common-consts";
import { SET_BUN } from "../../../services/redux/actions/burger-constructor/burger-constructor";
import { useDispatch } from "react-redux";
import bunStyles from "./bun.module.css";
import { DUMMY_TEXT } from "../../../utils/consts/ui-consts/dummy-consts";

const EmptyBun = forwardRef(({ type, isHover }, ref) => {
  const isTop = type === "top";
  const bunStyle = `pl-8 ${isTop ? "pb-4" : "pt-4"} pr-3`;
  return (
    <div ref={ref} onDrop={(e) => e.preventDefault()} className={bunStyle}>
      <Dummy
        type={type}
        text={DUMMY_TEXT}
        extraClass={isHover ? bunStyles["active_drop-target"] : ""}
      />
    </div>
  );
});

const Bun = ({ type, bun }) => {
  const dispatch = useDispatch();
  const isTop = type === "top";
  const bunName = isTop ? `${bun?.name} (верх)` : `${bun?.name} (низ)`;
  const bunStyle = `pl-8 ${isTop ? "pb-4" : "pt-4"} pr-3`;
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
    <div ref={ref} onDrop={(e) => e.preventDefault()} className={bunStyle}>
      <ConstructorElement
        type={type}
        isLocked
        text={bunName}
        price={bun.price}
        thumbnail={bun.image}
        extraClass={isHover ? bunStyles["active_drop-target"] : ""}
      />
    </div>
  );
};

export default Bun;
