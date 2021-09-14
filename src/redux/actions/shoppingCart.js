import * as t from "../types/shoppingCart";

export const addProductAction = (product) => {
  return {
    type: t.ADD_PRODUCT,
    payload: product,
  };
};

export const removeProductAction = (product) => {
  return {
    type: t.REMOVE_PRODUCT,
    payload: product,
  };
};

export const updateShoppingCartAction = (shoppingCart) => {
  return {
    type: t.UPDATE_SHOPPINGCART,
    payload: shoppingCart,
  };
};
