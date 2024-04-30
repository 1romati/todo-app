import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="card">
      <h1>Todo app</h1>
      <Link to="/">Home </Link>
      <Link to="/About">About</Link>
      <Link to="/Todolist">Todolist </Link>
    </div>
  );
};

export default Header;
