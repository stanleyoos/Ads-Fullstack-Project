import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import thunk from "redux-thunk"
import initialState from "./initialState"
import adReducer from "./subreducers/adRedux"
import userReducer from "./subreducers/userRedux"

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const subreducers = {
  ads: adReducer,
  user: userReducer,
}

const reducer = combineReducers(subreducers)

const store = createStore(reducer, initialState, composedEnhancer)

export default store
