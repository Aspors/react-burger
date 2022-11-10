import { v4 as keyGen } from "uuid";

export const changeItems = (indexOfItem, setState, addedItem) => {
  setState((state) => [
    ...state.splice(0, indexOfItem),
    { ...addedItem, key: keyGen() },
    ...state.splice(indexOfItem + 1),
  ]);
};

export const addItem = (item, setState) => {
  const newItem = { ...item, key: keyGen() };
  setState((state) => [...state, newItem]);
};
