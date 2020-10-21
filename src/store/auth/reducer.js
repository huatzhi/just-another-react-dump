import authTypes from "./types"

const initialState = {
  isLoading: false,
  token: null,
  error: null
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case authTypes.REQUEST:
      return { ...state, isLoading: true };
    case authTypes.SUCCESS:
      return { ...state, isLoading: false, token: action.payload, error: null }
    case authTypes.FAILURE:
      return { ...state, isLoading: false, error: action.error }
    default:
      return state;
  }
}

export default authReducer;