import { DECREMENT, INCREMET } from "../Constants/actionTypes";
const InitialState = {
  counter: 0,
};

export const count = (state = InitialState, action) => {
  switch (action.type) {
    case INCREMET:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
