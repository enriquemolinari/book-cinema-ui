import React from "react";
import { useNavigate } from "react-router-dom";
import MenuAccount from "./MenuAccount";

export default function Menu(props) {
  const navigate = useNavigate();

  return (
    <header className="header-wrapper">
      <div className="container">
        {/* Logo link*/}
        <a href="#index" onClick={() => navigate("/")} className="logo">
          <img alt="logo" src="images/logo-e.png" />
        </a>
        {/* Main website navigation*/}
        <nav id="navigation-box">
          {/* Toggle for mobile menu mode */}
          <a href="#" id="navigation-toggle">
            <span className="menu-icon">
              <span
                className="icon-toggle"
                role="button"
                aria-label="Toggle Navigation"
              >
                <span className="lines" />
              </span>
            </span>
          </a>
          {/* Link navigation */}
          <ul id="navigation">
            <li>
              <span className="sub-nav-toggle plus" />
              <a href="#index" onClick={() => navigate("/")}>
                Playing this Week
              </a>
            </li>
            <li>
              <span className="sub-nav-toggle plus" />
              <a href="page-elements.html">Movies</a>
            </li>
            <li>
              <span className="sub-nav-toggle plus" />
              <a href="page-elements.html">Rates</a>
            </li>
            <li>
              <span className="sub-nav-toggle plus" />
              <a href="page-elements.html">Help</a>
            </li>
          </ul>
        </nav>
        <MenuAccount host={props.host} staticUri={props.staticUri} />
      </div>
    </header>
  );
}
