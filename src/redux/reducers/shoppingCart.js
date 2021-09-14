import * as t from "../types/shoppingCart";

const initialState = {
  products: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
    case t.REMOVE_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };
    case t.UPDATE_SHOPPINGCART:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
