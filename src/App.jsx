import React from "react";
import { HashRouter as Router } from "react-router-dom";
import SlackNavbar from "./Navbar/SlackNavbar";
import Content from "./Content/content";

const App = () => {
  return (
    <div>
      <Router>
        <SlackNavbar />
        <Content />
      </Router>
    </div>
  );
};

export default App;
