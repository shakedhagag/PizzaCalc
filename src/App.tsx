import React, { useReducer } from "react";
import CalcScreen from "./CalcScreen";
import Calculator from "./Calculator";
import reducer, { initialState } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <header>
        <h1>Pizza Calculator</h1>
      </header>
      <CalcScreen count={initialState.PizzasNeeded} />
      <Calculator state={initialState} dispatch={dispatch} />;
    </main>
  );
};

export default App;
