import { SET_AUTH } from "./actionNames";

const initialState = {
  user: [],
  url: "",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
    case SET_AUTH: {
      return {
        ...state,
        url: action.payload,
      };
    }
  }
}

export default rootReducer;
