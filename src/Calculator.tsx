import React from "react";
import { PizzaState, action } from "./reducer";

type Props = {
  state: PizzaState;
  dispatch: React.Dispatch<action>;
};

const Calculator = (props: Props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>Number of People</label>
      <input
        type="number"
        value={props.state.numOfPeople}
        onChange={(event) => {
          props.dispatch({
            type: "UPDATE_NUMOFPEOPLE",
            payload: +event.target.value,
          });
        }}
      />
      <label>Slices per Person</label>
      <input
        type="number"
        value={props.state.slices}
        onChange={(event) => {
          props.dispatch({
            type: "UPDATE_SLICES",
            payload: +event.target.value,
          });
        }}
      />
      <label>Slices per Pizza</label>
      <input
        type="number"
        value={props.state.slicesPerPizza}
        onChange={(event) => {
          props.dispatch({
            type: "UPDATE_NUMOFSLICES",
            payload: +event.target.value,
          });
        }}
      />
    </form>
  );
};

export default Calculator;
