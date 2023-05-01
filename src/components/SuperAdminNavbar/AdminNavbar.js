import React, { useState } from "react";
import { Logo, Resume } from "../../assets";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import {check-square} from ""

const SuperAdminNavbar = () => {
  const [navIcon, setNavIcon] = useState(true);

  return (
    <nav className={"navbar navbar-expand-lg px-lg-5 bg-dark"}>
      <div className="container-fluid">
        {/* <a classNameName="navbar-brand" href="#"> */}
        <h3>
          <span>Super </span> Admin
        </h3>
        {/* <img src={Logo} alt="logo" className="logo img-fluid" /> */}
        {/* </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            onClick={() => {
              setNavIcon(!navIcon);
            }}
            icon={navIcon ? faBars : faTimes}
            style={{ color: "white" }}
          />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/about">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-5" href="#">
                Contact
              </a>
            </li>
            <a
              href={Resume}
              class="btn btn-outline-light fw-bold"
              type="submit"
            >
              Profile
            </a>
            {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav>
  );
};

export default SuperAdminNavbar;
