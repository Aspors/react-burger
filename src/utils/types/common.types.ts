type TTemplateIngredient = {
  _id: string;
  name: string;
  type: string;
  image: string;
  image_mobile: string;
  image_large: string;
  price: number;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
  __v: number;
};

export type TOrder = {
  name: string;
  number: number;
};

export type TUser = {
  name: string;
  email: string;
};

export default TTemplateIngredient;
