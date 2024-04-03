import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

// import logo from "../assets/img/Logo.png";
import "../assets/css/styles.css";
import logo from "../assets/img/Logo_footer.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container mb-4">
        <div className="row">
          {/* Bloc 1: Logo */}
          <div className="col-md-4 col-sm-12 mt-4">
            <img
              src={logo}
              className="logo-img"
              alt="Logo trouve ton artisan"
            />
            <p className="color-template1">
              Votre plateforme pour trouver des artisans qualifiés près de chez
              vous.
            </p>
          </div>

          {/* Bloc 2 */}
          <div className="col-md-4 col-sm-12 mt-4">
            <h2 className="color-template1"><strong>Lyon</strong></h2>
            <address>
              <p className="color-template1">101 cours Charlemagne</p>
              <p className="color-template1">CS 20033</p>
              <p className="color-template1">69269 LYON CEDEX 02</p>
              <p className="color-template1">France</p>
              <p className="color-template1">+33 (0)4 26 73 40 00</p>
            </address>
          </div>

          <span className="border"></span>

          {/* Bloc 3 */}
          <div className="col-md-12 col-sm-12 d-flex justify-content-center flex-wrap">
            <ul className="d-flex justify-content-center">
              <Link to="#" className="color-template1">Mentions Légales</Link>
              <Link to="#" className="color-template1">Données Personnelles</Link>
              <Link to="#" className="color-template1">Accessibilité</Link>
              <Link to="#" className="color-template1">Gestion des cookies</Link>
            </ul>
          </div>

        </div>
          </div>
          {/* Bloc 4: Icons */}
          <div className="col-md-12 text-center">
            <div className="social-footer_container mb-4">
            <ul className="social_footer_ul">
              <li>
                <Link to="http://webenlance.com">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </li>
              <li>
                <Link to="http://webenlance.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li>
                <Link to="http://webenlance.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
            </ul>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
