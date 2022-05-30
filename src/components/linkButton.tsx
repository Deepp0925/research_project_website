import React from "react";
import "../App.css";

interface Props {
  text: string;
  url: string;
}

const LinkButton = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="link-button">
      <a href={props.url} target="_blank" rel="noreferrer noopener">
        {props.text}
      </a>
    </div>
  );
};

export default LinkButton;
