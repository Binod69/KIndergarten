import React from 'react';
import { Link } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container ">
        <Link className="navbar-brand" to={'/'}>
          <img
            className="navbar-brand  "
            src="/assets/logo.svg"
            alt="logo.svg"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <Link
                className="nav-link active pe-5 "
                aria-current="page"
                to={'/'}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pe-5" href="#">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link pe-5" href="#">
                Our Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link pe-5" href="#">
                Contact
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <a className="nav-link active" href="tel:+01-562562">
              <BsWhatsapp /> 01-562562
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
