import React from "react";
import "../App.css";
import { Grid } from "@mui/material";

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        spacing={5}
      >
        <Grid container item xs={3} justifyContent="center">
          <a href="https://ung.edu/">
            <div className="image ung" />
          </a>
        </Grid>

        <Grid container item xs={3} justifyContent="center">
          <a href="https://www.aum.edu/">
            <div className="image aum" />
          </a>
        </Grid>

        <Grid container item xs={3} justifyContent="center">
          <a href="https://www.nsf.gov/">
            <div className="image nsf" />
          </a>
        </Grid>

        <Grid container item xs={3} justifyContent="center">
          <a href="https://www.xsede.org/">
            <div className="image xsede" />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default BottomBar;
