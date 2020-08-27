import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./route/Home";
import About from "./route/About";
import Detail from "./route/Detail";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/detail" component={Detail}></Route>
    </BrowserRouter>
  );
}
