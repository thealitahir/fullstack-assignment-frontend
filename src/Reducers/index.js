import * as types from "../utils/constants";

const initialState = { items: [], user: {}, cart: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return state;
    case types.LOGIN_REQUEST_SUCCESS:
      return { ...state, user:action.payload };
    default:
      return state;
  }
};

export default reducer;
