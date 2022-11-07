import { useHttp } from "../hooks/http.hook";

const useNormaService = () => {
  const _API_BASE = "https://norma.nomoreparties.space/api/";

  const { request, error, loading } = useHttp();

  const getAllIngredients = async () => {
    const res = await request(`${_API_BASE}ingredients`);
    return res;
  };

  return { error, loading, getAllIngredients };
};

export default useNormaService;
