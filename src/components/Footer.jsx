import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// import logo from "../assets/img/Logo.png";
import "../assets/css/styles.css";
import logo from "../assets/img/Logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container bottom_border">
        <div className="row">

            {/* Bloc 1 */}
          <div className=" col-sm-4 col-md col-sm-4  col-12 col">
          <img
              src={logo}
              className="logo-img"
              alt="Logo trouve ton artisan"
            />
            <p className="mb10">
              Trouve Ton Artisan - Votre plateforme pour trouver des artisans
              qualifiés près de chez vous.
            </p>
          </div>

            {/* Bloc 2 */}
          <div className=" col-sm-4 col-md  col-6 col">
            <h4 className="headin5_amrc col_white_amrc pt2">Lyon</h4>
            {/* <!--headin5_amrc--> */}
            <ul className="footer_ul_amrc">
              <p>
              101 cours Charlemagne
              </p>
              <p>
              CS 20033
              </p>
              <p>
              69269 LYON CEDEX 02
              </p>
              <p>
              France
              </p>
              <p>
              +33 (0)4 26 73 40 00
              </p>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="foote_bottom_ul_amrc">
          <li>
            <Link to="http://webenlance.com">Mentions légales</Link>
          </li>
          <li>
            <Link to="http://webenlance.com">Données personnelles</Link>
          </li>
          <li>
            <Link to="http://webenlance.com">Accessibilité</Link>
          </li>
          <li>
            <Link to="http://webenlance.com">Cookies</Link>
          </li>
        </ul>

        {/* Text-footer */}
        <p className="text-center">
          Copyright @2024 | trouvetonartisan.fr
        </p>

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
        {/* <!--social_footer_ul ends here--> */}
      </div>
    </footer>
  );
}

export default Footer;
