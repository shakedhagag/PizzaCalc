import React from "react";
import { PizzaState, action } from "./reducer";

type Props = {
  state: PizzaState;
  dispatch: React.Dispatch<action>;
};

const Calculator = (props: Props) => {
  return (
    <form>
      <label>Number of People</label>
      <input type="number" />
      <label>Slices per Person</label>
      <input type="number" />
      <label>Slices per Pizza</label>
      <input type="number" />
    </form>
  );
};

export default Calculator;
