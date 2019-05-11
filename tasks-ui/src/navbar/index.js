import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark mb-3">
        <Link to="/" className="navbar-brand">
          Tasks
        </Link>
      </nav>
      <div className="navbar fixed-bottom">
        <Link to="/new" className="btn btn-outline-primary w-100 p-3">
          Nueva tarea
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
