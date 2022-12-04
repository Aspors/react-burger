import React, { memo, useCallback } from "react";
import styles from "./burger-constructor.module.css";
import { BUTTON } from "../../utils/consts/ui-consts/buttons-text";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import MenuWrapper from "./menu-wrapper/menu-wrapper";
import Menu from "./burger-constructor-menu/burger-constructor-menu";
import Total from "./total/total";
import { useHistory, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/consts/sevice-consts/routes.consts";

const BurgerConstructor = memo(() => {
  const history = useHistory();
  const location = useLocation();

  const handleOrderSubmit = useCallback(
    (e) => {
      e.preventDefault();
      history.push(ROUTES.ORDER_DETAILS, { orderBackground: location });
    },
    // eslint-disable-next-line
    []
  );

  return (
    <section className="pt-15 pl-4">
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
      <Total>
        <Button
          onClick={(e) => handleOrderSubmit(e)}
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass={styles.button}
        >
          {BUTTON.SEND}
        </Button>
      </Total>
    </section>
  );
});

export default BurgerConstructor;
