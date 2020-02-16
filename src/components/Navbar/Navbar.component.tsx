import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  const [active, setActive] = useState(false);
  const handleOnclickBurguer = () => {
    setActive(!active);
  };
  return (
    <nav
      className="navbar is-fixed-top is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width={112}
            height={28}
            alt="bulma"
          />
        </Link>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={handleOnclickBurguer}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${active ? 'is-active' : ''}`}
      >
        <div className="navbar-start" onClick={handleOnclickBurguer}>
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/favorite-beers" className="navbar-item">
            Favorite Beers
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
