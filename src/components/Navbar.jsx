import React, { useEffect, useState } from "react";
import "./../styles/Navbar.css";
import logo from "./../assets/logo.png";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <a href="/">
        <img
          className="nav-logo"
          src={logo}
          alt="Netflix Logo"
        />
      </a>
    </div>
  );
}

export default Navbar;
