export type PizzaState = data & { PizzasNeeded: number };

export const initialState = {
  numOfPeople: 10,
  slices: 2,
  slicesPerPizza: 8,
  PizzasNeeded: 8,
};

export type action = {
  type: "UPDATE_NUMOFPEOPLE" | "UPDATE_SLICES" | "UPDATE_NUMOFSLICES";
  payload: number;
};

type data = {
  numOfPeople: number;
  slices: number;
  slicesPerPizza: number;
};

const calcPizzas = ({ numOfPeople, slices, slicesPerPizza }: data): number => {
  return Math.ceil((numOfPeople * slices) / slicesPerPizza);
};

const updatePizzas = (currData: data): PizzaState => {
  return { ...currData, PizzasNeeded: calcPizzas(currData) };
};

const reducer = (state: PizzaState, action: action) => {
  if (action.type === "UPDATE_NUMOFPEOPLE") {
    return updatePizzas({ ...state, numOfPeople: action.payload });
  }
  if (action.type === "UPDATE_SLICES") {
    return updatePizzas({ ...state, slices: action.payload });
  }
  if (action.type === "UPDATE_NUMOFSLICES") {
    return updatePizzas({ ...state, slicesPerPizza: action.payload });
  }

  return state;
};

export default reducer;
