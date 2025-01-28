import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/get">Get User</Link>
          </li>
          <li>
            <Link to="/modify">Modify User</Link>
          </li>
          <li>
            <Link to="/delete">Delete User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
