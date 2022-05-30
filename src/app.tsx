import React from "react";
import "./app.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Links from "./screens/Links";
import Camera from "./screens/Camera";
import Collaborators from "./screens/Collaborators";
import Contact from "./screens/Contact";
import Meetings from "./screens/Meetings";
import Publications from "./screens/Publications";
import MenuDrawer from "./components/MenuDrawer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <Router>
      <div className="App">
        <MenuDrawer />
        <Routes>
          <Route path="/about" element={<About />} />

          <Route path="/links" element={<Links />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/collaborators" element={<Collaborators />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
