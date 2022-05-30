import React from "react";
import "../App.css";
import Title from "../components/Title";
import LinkButton from "../components/LinkButton";
import { Grid } from "@mui/material";

const data = [
  {
    text: "DeepHyperX Github",
    url: "https://github.com/StoneFranklin/DeepHyperX",
  },
  {
    text: "DeepHyperX Github",
    url: "https://github.com/StoneFranklin/DeepHyperX",
  },
  {
    text: "DeepHyperX Github",
    url: "https://github.com/StoneFranklin/DeepHyperX",
  },
  {
    text: "DeepHyperX Github",
    url: "https://github.com/StoneFranklin/DeepHyperX",
  },
  {
    text: "DeepHyperX Github",
    url: "https://github.com/StoneFranklin/DeepHyperX",
  },
  {
    text: "DeepHyperX Github",
    url: "https://github.com/StoneFranklin/DeepHyperX",
  },
  {
    text: "DeepHyperX Github",
    url: "https://github.com/StoneFranklin/DeepHyperX",
  },
];

const Links = () => {
  return (
    <div className="container">
      <div className="page-body">
        <Title text="Links" />
        <div className="link-text">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            {data.map((element) => (
              <Grid item>
                <LinkButton text={element.text} url={element.url} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Links;
