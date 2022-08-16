import React, { useEffect, useState } from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return windowWidth > 500 ? (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={require("../../images/Mask-group.png")}
            style={{ width: 100 }}
            alt="logo"
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="#learning-plans"
          >
            Learning Plans
          </a>
          <NavLink to="/contact-us" activeStyle>
            Why Suvy
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  ) : (
    <>
      <nav style={{ background: "#15156C" }} class="navbar">
        <a class="navbar-brand" href="#">
          <img
            src={require("../../images/Mask-group.png")}
            style={{ width: 60 }}
            alt="logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon">
            <img
              src={require("../../images/toggle.png")}
              style={{ width: 60 }}
              alt="logo"
            />
          </span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                style={{ textDecoration: "none", color: "white" }}
                href="#learning-plans"
              >
                Learning Plans
              </a>
            </li>
            <li class="nav-item">
              <a
                style={{ textDecoration: "none", color: "white" }}
                class="nav-link"
                href="#"
              >
                Why Suvy
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
