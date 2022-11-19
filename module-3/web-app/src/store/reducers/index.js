import { combineReducers } from "redux"
import documentReducer from "./documentReducer"
import documentsReducer from "./documentsReducer"

const reducer = combineReducers({
  documentReducer,
  documentsReducer
})

export default reducer
