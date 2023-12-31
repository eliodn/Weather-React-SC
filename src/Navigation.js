import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation(props) {
  return (
    <header>
      <ul className="navigation-items">
        <li className="navigation-item">
          <Link to="/">Lisbon</Link>
        </li>
        <li className="navigation-item">
          <Link to="/paris">Paris</Link>
        </li>
        <li className="navigation-item">
          <Link to="/sydney">Sydney</Link>
        </li>
        <li className="navigation-item">
          <Link to="/san-francisco">San Francisco</Link>
        </li>
      </ul>
    </header>
  );
}
