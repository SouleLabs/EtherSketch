import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import wallReducer from "./util/wallReducer";
import web3Reducer from "./util/web3Reducer";

const reducer = combineReducers({
  routing: routerReducer,
  wall: wallReducer,
  web3: web3Reducer
});

export default reducer;
