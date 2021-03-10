import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark p-3 text-center text-light">
      <p className="m-0">
        All Credit goes to{" "}
        <a className="text-info" target="_blank" rel="noreferrer" href="https://www.programming-hero.com/">
          Programming Hero Team
        </a>
      </p>
    </footer>
  );
};

export default Footer;
