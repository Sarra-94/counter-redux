import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./JS/Actions/actionCounter";
function App() {
  // hook redux
  // useselector replace mapStateToProps
  const counter = useSelector((state) => state.count.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>workshop Redux</h1>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     counter: state.count.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
