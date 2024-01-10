const initialState = {
    isLoggedIn: false,
    username: "",
    password: "",
 };


const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    case "CHANGE_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOGOUT":
        return {
            username: "",
            password: "",
            isLoggedIn: false,
        };

    default:
      return state;
  }
}

export default userReducer;