// Sidebar.js
import React from 'react';
import { Link } from "react-router-dom";

export default function Sidebar(){
  return (
    <nav id="sidebar" className="col-md-2 d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/articles" className="nav-link">Articles</Link>
          </li>
          <li className="nav-item">
            <Link to="/questions" className="nav-link">Questions</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
