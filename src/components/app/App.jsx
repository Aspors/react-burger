import React, { useContext, useEffect, useState } from "react";
import appStyles from "./App.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import useNormaService from "../../services/useNormaService";
import { CartDataContext } from "../../contexts/cartDataContext";

const App = () => {
  const { getAllIngredients, loading, error } = useNormaService();
  const initialCart = useContext(CartDataContext);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    getAllIngredients().then((res) => setData(res.data));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <AppHeader />
      <main>
        <CartDataContext.Provider value={{ cart, setCart }}>
          <div className={appStyles.container}>
            <BurgerIngredients data={data} loading={loading} error={error} />
            <BurgerConstructor />
          </div>
        </CartDataContext.Provider>
      </main>
    </div>
  );
};

export default App;
