import { API_URL } from "../../config"

// SELECTORS
export const getLoggedUser = (state) => state.user

// ACTIONS
const createActionName = (actionName) => `app/users/${actionName}`
const LOG_IN = createActionName("LOG_IN")
const LOG_OUT = createActionName("LOG_OUT")

// ACTION CREATOR
export const logIn = (payload) => ({ type: LOG_IN, payload })
export const logOut = () => ({ type: LOG_OUT })

export const fetchUser = () => {
  return (dispatch) => {
    fetch(`${API_URL}/auth/user`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => dispatch(logIn(data)))
  }
}

const userReducer = (statePart = null, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload
    case LOG_OUT:
      return null
    default:
      return statePart
  }
}

export default userReducer
