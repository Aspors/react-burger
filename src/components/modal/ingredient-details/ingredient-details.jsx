import React, { useCallback } from "react";
import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setContent } from "../../../services/utils/machine/machine";

const IngredintDetails = () => {
  const { items, status } = useSelector((store) => store.ingredients);
  const { id } = useParams();
  const findItem = useCallback(
    (data) => {
      return data.find((item) => item._id === id);
    },
    [id]
  );

  const content = setContent(status);

  return content ? content : <View />;

  function View() {
    const { image_large, name, calories, proteins, fat, carbohydrates } =
      findItem(items);
    return (
      <div className={`${styles["ingredient-details"]} pl-10 pr-10`}>
        <img
          src={image_large}
          alt="ingredient-details__img"
          className={styles["ingredient-details__img"]}
        />
        <span
          className={`text text_type_main-medium mt-4 ${styles["ingredient-details__title"]}`}
        >
          {name}
        </span>
        <p></p>
        <ul
          className={`
          ${styles["ingredient-details__nutrition-value"]}`}
        >
          <li className="calories">
            <span>Калории,ккал</span>
            <span>{calories}</span>
          </li>
          <li className="proteins">
            <span>Белки, г</span>
            <span>{proteins}</span>
          </li>
          <li className="fats">
            <span>Жиры, г</span>
            <span>{fat}</span>
          </li>
          <li className="carbons">
            <span>Углеводы, г</span>
            <span>{carbohydrates}</span>
          </li>
        </ul>
      </div>
    );
  }
};

export default IngredintDetails;
