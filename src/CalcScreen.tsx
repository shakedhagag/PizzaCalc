import React from "react";

type Props = { count: number };

const CalcScreen = (props: Props) => {
  return (
    <section>
      <p className="count">{props.count}</p>
      <p className="caption">Pizzas Needed</p>
    </section>
  );
};

export default CalcScreen;
