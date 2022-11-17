import React, { useCallback } from "react";
import ingredientDetailsStyles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";

const IngredintDetails = () => {
  const { items, modalElement } = useSelector((store) => store.ingredients);
  const findItem = useCallback(
    (data) => {
      return data.find((item) => item._id === modalElement);
    },
    [modalElement]
  );

  const { image_large, name, calories, proteins, fat, carbohydrates } =
    findItem(items);

  return (
    <div className="ingredint-details pl-10 pr-10">
      <img
        src={image_large}
        alt="ingredint-details__img"
        className={ingredientDetailsStyles["ingredint-details__img"]}
      />
      <span
        className={`text text_type_main-medium mt-4 ${ingredientDetailsStyles["ingredient-details__title"]}`}
      >
        {name}
      </span>
      <p></p>
      <ul
        className={` mt-8
          ${ingredientDetailsStyles["ingredient-details__nutrition-value"]}`}
      >
        <li className="calories">
          <span>Калории, ккал</span>
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
};

export default IngredintDetails;
