import { INCREMENT, DECREMENT } from "../Constans/actionType";
// initialisation counter state
const InitialState = {
  counter: 0,
  visible: true,
};

export const count = (state = InitialState, action) => {
  let { type } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
