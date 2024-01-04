function UserDataReducer(state, action) {
  switch (action.type) {
    case "SET_USER_DATA": {
      return {
        ...state,
        userData: action.payload,
        loading: false,
        error: null,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.payload,
        error: null,
      };
    }
    case "SET_ERROR": {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
}

export default UserDataReducer;
