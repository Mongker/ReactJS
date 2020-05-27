// Action type
import { UP, DOWN } from "../action/actionTypes";

const MainReducers = (times = 0, action) => {
  switch (action.type) {
    case UP:
      return times + action.step;
    case DOWN:
      return times - action.step;
    default:
      return times;
  }
};
export default MainReducers;
