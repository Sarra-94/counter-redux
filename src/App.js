import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function App() {
  let id = 1;
  return (
    <div className="App">
      <Link
        to={{
          pathname: `/about/${id}`,
          state: {
            movie: "hello i am malek",
          },
        }}
      >
        about page
      </Link>
      <h1>React router +API </h1>
    </div>
  );
}

export default App;
