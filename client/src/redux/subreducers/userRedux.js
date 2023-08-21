import { API_URL } from "../../config"

// SELECTORS

// ACTIONS
const createActionName = (actionName) => `app/users/${actionName}`
const LOG_IN = createActionName("LOG_IN")

// ACTION CREATOR
export const logIn = (payload) => ({ type: LOG_IN, payload })

export const fetchUser = () => {
  return (dispatch) => {
    fetch(`${API_URL}/api/auth/user`).then((res) => console.log(res))
    //.then((data) => dispatch(logIn(data)))
  }
}

const userReducer = (statePart = null, action) => {
  switch (action.type) {
    case LOG_IN:
      return action.payload
    default:
      return statePart
  }
}

export default userReducer
