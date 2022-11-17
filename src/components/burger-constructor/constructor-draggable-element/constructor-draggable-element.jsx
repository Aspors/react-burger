import constructorDraggableStyles from "./constructor-draggable-element.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { memo, useRef } from "react";
import { DELETE_ITEM } from "../../../services/actions/burger-constructor/burger-constructor";
import { useDispatch } from "react-redux";
import { useDrag, useDrop } from "react-dnd";

const ConstructorDraggableElement = memo(
  ({ name, price, image, id, type, index, moveCard }) => {
    const dispatch = useDispatch();

    const handleDelete = (key) => {
      dispatch({ type: DELETE_ITEM, payload: key });
    };

    const ingridientRef = useRef(null);

    const [{ handlerId }, drop] = useDrop({
      accept: type,
      collect: (monitor) => {
        return {
          handlerId: monitor.getHandlerId(),
        };
      },
      hover(item, monitor) {
        if (!ingridientRef.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
        if (dragIndex === hoverIndex) {
          return;
        }
        const hoverBoundingRect =
          ingridientRef.current?.getBoundingClientRect();
        if (!hoverBoundingRect) return;
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        if (!clientOffset) return;
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
        moveCard(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    });
    const [{ isDragging }, drag] = useDrag({
      type: type,
      item: () => {
        return { id, index };
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const opacity = isDragging ? 0 : 1;
    const cursor = isDragging ? "grabbing" : "grab";

    drag(drop(ingridientRef));
    return (
      <li
        draggable
        className={constructorDraggableStyles["constructor__menu-list"]}
        ref={ingridientRef}
        style={{ opacity, cursor }}
        data-handler-id={handlerId}
        onDrop={(e) => e.preventDefault()}
      >
        <DragIcon type="primary" />
        <ConstructorElement
          text={name}
          price={price}
          handleClose={() => handleDelete(id)}
          thumbnail={image}
        />
      </li>
    );
  }
);

export default ConstructorDraggableElement;
