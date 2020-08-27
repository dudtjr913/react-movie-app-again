import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <p></p>
      <Link to="/about">About</Link>
    </div>
  );
}
