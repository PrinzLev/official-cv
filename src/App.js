import React from "react";

import "./App.css";

import { Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Homepage} />
    </div>
  );
}

export default App;
