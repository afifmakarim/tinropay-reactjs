import { FETCH_DETAIL, FETCH_PAGE } from "../types";

let globalState = {
  isLoading: false,
  products: [],
  error: false,
};

export const pageReducer = (state = globalState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_PAGE:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        products: action.payload.products,
        error: action.payload.error,
        errorMsg: action.payload.errorMsg,
      };
    case FETCH_DETAIL:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        products: action.payload.products,
        error: action.payload.error,
        errorMsg: action.payload.errorMsg,
      };
    default:
      return state;
  }
};
