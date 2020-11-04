import { DECREMENT, INCREMET } from "../Constants/actionTypes";

export const increment = () => {
  return {
    type: INCREMET,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
