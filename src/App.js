import React from "react";
import "./App.css";
import { connect, useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./JS/Actions/action";
function App() {
  // useSelector replace mapStateToProps
  const counter = useSelector((state) => state.count.counter);
  // replace mapDispatchToProps
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter Redux+{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return { count: state.count.counter };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//   };
// };
// using mapState & mapDispatch
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect()(App);
