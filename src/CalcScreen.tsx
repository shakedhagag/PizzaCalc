import React from "react";

type Props = { count: number };

const CalcScreen = (props: Props) => {
  return (
    <section className="calc">
      <p>{props.count}</p>
      <p>Pizzas Needed</p>
    </section>
  );
};

export default CalcScreen;
