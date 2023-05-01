import React, { useState } from "react";
import { Logo } from "../../assets";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import WebColors from "../../utills/webColors";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5 ft1">
              <h3>
                <span>Azhar</span> Naseem
              </h3>
              <p className="pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div>
                <FontAwesomeIcon
                  className="footerIcons"
                  // onClick={() => {
                  //   setNavIcon(!navIcon);
                  // }}
                  icon={faTwitterSquare}
                  // style={ }
                />
                <FontAwesomeIcon
                  className="footerIcons"
                  // onClick={() => {
                  //   setNavIcon(!navIcon);
                  // }}
                  icon={faFacebookSquare}
                />
                <FontAwesomeIcon
                  className="footerIcons"
                  // onClick={() => {
                  //   setNavIcon(!navIcon);
                  // }}
                  icon={faGithubSquare}
                  // /style={{ color: WebColors.secoundry }}
                />
                <FontAwesomeIcon
                  className="footerIcons"
                  // onClick={() => {
                  //   setNavIcon(!navIcon);
                  // }}
                  icon={faLinkedin}
                  // style={{ color: WebColors.secoundry }}
                />
              </div>
            </div>
            <div className="col-md-3 ft2">
              <h4 className="pb-2">Quick Links</h4>
              <li>
                <Link className="list" aria-current="page" to="/about">
                  about
                </Link>
              </li>
              <li>
                <Link className="list" aria-current="page" to="/about">
                  Services
                </Link>
              </li>
              <li>
                <Link className="list" aria-current="page" to="/about">
                  Product
                </Link>
              </li>
              <li>
                <Link className="list" aria-current="page" to="/about">
                  Contact
                </Link>
              </li>
            </div>
            <div className="col-md-3 ft3 ">
              <h4 className="pb-2">Quick Links</h4>
              <p>
                <i className="fa-sharp fa-solid fa-phone-volume"></i>{" "}
                +92340768573
              </p>
              <p>
                <i className="fa-solid fa-envelope"></i> azharnaseem46@gmail.com
              </p>
              <p>
                <i className="fa-solid fa-paper-plane"></i> Azad Jummu &
                Kashmir,Pakistan
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="btmfooterBar py-4">
        <h5>&copy;2023,Azhar Naseem Web & App Developer</h5>
      </div>
    </>
  );
};

export default Footer;
