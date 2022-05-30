import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./app";

const Application = () => <App />;

render(<Application />, document.getElementById("root"));
