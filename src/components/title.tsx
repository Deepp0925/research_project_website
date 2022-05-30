import React, { PropsWithChildren } from "react";
import "../app.css";

interface Props {
  text: string;
}

const Title = (props: PropsWithChildren<Props>) => {
  return (
    <div className="title-container">
      <h1 className="title">{props.text}</h1>
    </div>
  );
};

export default Title;
