import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogleDrive,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="py-5 bg-black border-top">
        <NavLink
          to="/allProject"
          className="text-decoration-none fs-6 m-2 menu-item"
        >
          Projects
        </NavLink>

        <NavLink to="/blog" className="text-decoration-none fs-6 m-2 menu-item">
          Blog
        </NavLink>
        <div className="my-3">
          <a
            href="https://github.com/afsumeem"
            className="me-2 fs-5 text-white"
            target="blank"
            title="Github"
          >
            <FontAwesomeIcon
              icon={faGithub}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/afsanameem/"
            className="mx-2 fs-5 text-info"
            target="blank"
            title="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </a>
          <a
            href="https://web.facebook.com/afsana.meembd/"
            className="mx-2 fs-5 text-primary"
            target="blank"
            title="Facebook"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </a>
          <a
            href="https://drive.google.com/file/d/1YkE-tLSsm_fT6E9geCdMgtemNGFdc9yB/view?usp=drive_link"
            className="mx-2 fs-5 text-primary"
            target="blank"
            title="Resume Link"
          >
            <FontAwesomeIcon
              icon={faGoogleDrive}
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
          </a>
        </div>
        <NavLink to="/" className="text-decoration-none fs-6 m-2 menu-item">
          Terms & Conditions
        </NavLink>

        <NavLink to="/" className="text-decoration-none fs-6 m-2  menu-item">
          Privacy Policy
        </NavLink>
      </div>
      <div className="py-2  bg-dark">
        <p className="text-white text-opacity-50 m-0">
          Copyright &copy;2023 All Rights Reserved | This Website is made with
          &#x003C;&#10083;&#x003E; by Afsana Meem{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
