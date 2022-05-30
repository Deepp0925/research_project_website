import React from "react";
import "../App.css";
import PersonCard from "../components/PersonCard";
import Title from "../components/Title";
import { Grid } from "@mui/material";
import ung from "../images/ung.png";
import nsf from "../images/nsf.png";
import smit from "../images/smit.jpeg";

const collaborators = [
  {
    name: "Stone Franklin",
    title: "Research Assistant",
    school: "University of North Georgia",
    image: ung,
  },
  {
    name: "Smit Patel",
    title: "Research Assistant",
    school: "University of North Georgia",
    image: smit,
  },
  {
    name: "Test",
    title: "Research Assistant",
    school: "University of North Georgia",
    image: nsf,
  },
  {
    name: "Stone Franklin",
    title: "Research Assistant",
    school: "University of North Georgia",
    image: nsf,
  },
  {
    name: "Stone Franklin",
    title: "Research Assistant",
    school: "University of North Georgia",
    image: nsf,
  },
  {
    name: "Stone Franklin",
    title: "Research Assistant",
    school: "University of North Georgia",
    image: nsf,
  },
];

const Collaborators = () => {
  return (
    <div className="container">
      <div className="page-body">
        <Title text="Collaborators" />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={8}
          className="collaborator-grid"
        >
          {collaborators.map((element) => (
            <Grid item>
              <PersonCard
                name={element.name}
                title={element.title}
                school={element.school}
                image={element.image}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Collaborators;
