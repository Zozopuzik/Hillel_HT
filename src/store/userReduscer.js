const initialState = {
  data: null,
  isLoggedIn: false,
  idsInCart: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state, isLoggedIn: state.isLoggedIn = true, data: action.payload };
    case "ADD_IDS_TO_CART":
      return { ...state, idsInCart: [...state.idsInCart, action.payload] };
    case "REMOVE_IDS_FROM_CART":
      const updatedIdsInCart = [...state.idsInCart];
      const index = updatedIdsInCart.indexOf(action.payload);
      if (index !== -1) {
        updatedIdsInCart.splice(index, 1);
      }
      return { ...state, idsInCart: updatedIdsInCart };
    case "CLEAR_CART":
        return { ...state, idsInCart:[]};

    default:
      return state;
  }
};
