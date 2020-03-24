import * as types from "../utils/constants";

const initialState = { items: [], user: {}, cart: {}, error: {} };

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return state;
    case types.LOGIN_REQUEST_SUCCESS: {
      return { ...state, user: action.payload };
    }
    case types.LOGIN_REQUEST_FAILURE: {
      return { ...state, user: action.payload };
    }

    case types.SIGNUP_REQUEST:
      return state;
    case types.SIGNUP_REQUEST_SUCCESS: {
      return { ...state, user: action.payload };
    }
    case types.SIGNUP_REQUEST_FAILURE: {
      return { ...state, user: action.payload };
    }

    case types.GET_ITEMS_REQUEST:
      return state;
    case types.GET_ITEMS_SUCCESS: {
      return { ...state, items: action.payload };
    }
    case types.GET_ITEMS_FAILURE: {
      return { ...state, items: action.payload };
    }

    default:
      return state;
  }
};

export default reducer;
