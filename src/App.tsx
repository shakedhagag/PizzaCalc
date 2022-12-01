import React, { useReducer } from "react";
import CalcScreen from "./CalcScreen";
import Calculator from "./Calculator";
import reducer, { initialState } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="center">
      <main className="calc">
        <header>
          <h1>Pizza Calculator</h1>
        </header>
        <CalcScreen count={state.PizzasNeeded} />
        <Calculator state={state} dispatch={dispatch} />;
      </main>
    </div>
  );
};

export default App;
