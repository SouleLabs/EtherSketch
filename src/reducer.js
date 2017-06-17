import { combineReducers } from "redux";
import wallReducer from "./util/wallReducer";
import web3Reducer from "./util/web3Reducer";

const reducer = combineReducers({
  wall: wallReducer,
  web3: web3Reducer
});

export default reducer;
