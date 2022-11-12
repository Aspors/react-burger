import { useCallback } from "react";
import { useHttp } from "../hooks/http.hook";

const useNormaService = () => {
  const _API_BASE = "https://norma.nomoreparties.space/api/";
  const _INGREDIENTS = "ingredients";
  const _ORDERS = "orders";

  const { request, error, loading } = useHttp();

  const getAllIngredients = useCallback(async () => {
    return await request(`${_API_BASE}${_INGREDIENTS}`);
  }, [request]);

  const sendOrder = useCallback(
    async (orderBody) => {
      const body = JSON.stringify({ ingredients: orderBody });
      return await request(`${_API_BASE}${_ORDERS}`, "POST", body);
    },
    [request]
  );

  return { error, loading, getAllIngredients, sendOrder };
};

export default useNormaService;
