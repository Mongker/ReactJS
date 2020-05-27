import { UP, DOWN } from "./actionTypes";

// Action tăng giá trị
export const actionUp = step => {
  return {
    type: UP,
    step: step
  };
};

// Action giảm giá trị
export const actionDown = step => {
  return {
    type: DOWN,
    step: step
  };
};
