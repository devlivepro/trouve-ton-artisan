import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "../assets/css/styles.css";
import logo from "../assets/img/Logo_footer.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="container mb-4 mt-5 logo_footer">
        <div className="row">
          {/* Bloc 1: Logo */}
          <div className="col-md-4 col-sm-12 margin_footer">
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
          <div className="col-md-4 col-sm-12 margin_footer">
            <h2 className="color-template1">
              <strong>Lyon</strong>
            </h2>
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
          <div className="container_link_footer">
            <ul className="link_footer">
              <li>
                <Link to="#" className="color-template1">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="#" className="color-template1">
                  Données Personnelles
                </Link>
              </li>
              <li>
                <Link to="#" className="color-template1">
                  Accessibilité
                </Link>
              </li>
              <li>
                <Link to="#" className="color-template1">
                  Gestion des cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bloc 4: Icons */}
      <div className="col-md-12 text-center">
        <div className="social-footer_container mb-4">
          <ul className="social_footer_ul">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
                <span className="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <span className="sr-only">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
