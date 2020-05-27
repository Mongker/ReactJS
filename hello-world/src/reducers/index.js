import { combineReducers } from "redux";
import MainReducers from "./MainReducers";

const allReducers = combineReducers({
  MainReducers
  // Nếu có nhiều reducers thì viết thêm ở dướidưới
});
export default allReducers;
