import React from "react";
import User from "./User";
import { useNavigate } from "react-router-dom";

export default function Menu(props) {
  const userName = User.current().userName();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/login");
  }

  function handleLogout(e) {
    e.preventDefault();
    User.current(props.host)
      .logout()
      .then(() => navigate("/"));
  }

  return (
    <header className="header-wrapper">
      <div className="container">
        {/* Logo link*/}
        <a href="#index" onClick={() => navigate("/")} className="logo">
          <img alt="logo" src="images/logo.png" />
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
              <a href="#">Pages</a>
              <ul>
                <li className="menu__nav-item">
                  <a href="movie-page-left.html">
                    Single movie (rigth sidebar)
                  </a>
                </li>
                <li className="menu__nav-item">
                  <a href="movie-page-right.html">
                    Single movie (left sidebar)
                  </a>
                </li>
                <li className="menu__nav-item">
                  <a href="movie-page-full.html">Single movie (full widht)</a>
                </li>
                <li className="menu__nav-item">
                  <a href="movie-list-left.html">Movies list (rigth sidebar)</a>
                </li>
                <li className="menu__nav-item">
                  <a href="movie-list-right.html">Movies list (left sidebar)</a>
                </li>
                <li className="menu__nav-item">
                  <a href="movie-list-full.html">Movies list (full widht)</a>
                </li>
                <li className="menu__nav-item">
                  <a href="single-cinema.html">Single cinema</a>
                </li>
                <li className="menu__nav-item">
                  <a href="cinema-list.html">Cinemas list</a>
                </li>
                <li className="menu__nav-item">
                  <a href="trailer.html">Trailers</a>
                </li>
                <li className="menu__nav-item">
                  <a href="rates-left.html">Rates (rigth sidebar)</a>
                </li>
                <li className="menu__nav-item">
                  <a href="rates-right.html">Rates (left sidebar)</a>
                </li>
                <li className="menu__nav-item">
                  <a href="rates-full.html">Rates (full widht)</a>
                </li>
                <li className="menu__nav-item">
                  <a href="offers.html">Offers</a>
                </li>
                <li className="menu__nav-item">
                  <a href="contact.html">Contact us</a>
                </li>
                <li className="menu__nav-item">
                  <a href="404.html">404 error</a>
                </li>
                <li className="menu__nav-item">
                  <a href="coming-soon.html">Coming soon</a>
                </li>
                <li className="menu__nav-item">
                  <a href="login.html">Login/Registration</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="sub-nav-toggle plus" />
              <a href="page-elements.html">Features</a>
              <ul>
                <li className="menu__nav-item">
                  <a href="typography.html">Typography</a>
                </li>
                <li className="menu__nav-item">
                  <a href="page-elements.html">Shortcodes</a>
                </li>
                <li className="menu__nav-item">
                  <a href="column.html">Columns</a>
                </li>
                <li className="menu__nav-item">
                  <a href="icon-font.html">Icons</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="sub-nav-toggle plus" />
              <a href="page-elements.html">Booking steps</a>
              <ul>
                <li className="menu__nav-item">
                  <a href="book1.html">Booking step 1</a>
                </li>
                <li className="menu__nav-item">
                  <a href="book2.html">Booking step 2</a>
                </li>
                <li className="menu__nav-item">
                  <a href="book3-buy.html">Booking step 3 (buy)</a>
                </li>
                <li className="menu__nav-item">
                  <a href="book3-reserve.html">Booking step 3 (reserve)</a>
                </li>
                <li className="menu__nav-item">
                  <a href="book-final.html">Final ticket view</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="sub-nav-toggle plus" />
              <a href="gallery-four.html">Gallery</a>
              <ul>
                <li className="menu__nav-item">
                  <a href="gallery-four.html">4 col gallery</a>
                </li>
                <li className="menu__nav-item">
                  <a href="gallery-three.html">3 col gallery</a>
                </li>
                <li className="menu__nav-item">
                  <a href="gallery-two.html">2 col gallery</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="sub-nav-toggle plus" />
              <a href="news-left.html">News</a>
              <ul>
                <li className="menu__nav-item">
                  <a href="news-left.html">News (rigth sidebar)</a>
                </li>
                <li className="menu__nav-item">
                  <a href="news-right.html">News (left sidebar)</a>
                </li>
                <li className="menu__nav-item">
                  <a href="news-full.html">News (full widht)</a>
                </li>
                <li className="menu__nav-item">
                  <a href="single-page-left.html">
                    Single post (rigth sidebar)
                  </a>
                </li>
                <li className="menu__nav-item">
                  <a href="single-page-right.html">
                    Single post (left sidebar)
                  </a>
                </li>
                <li className="menu__nav-item">
                  <a href="single-page-full.html">Single post (full widht)</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="sub-nav-toggle plus" />
              <a href="#">Mega menu</a>
              <ul className="mega-menu container">
                <li className="col-md-3 mega-menu__coloum">
                  <h4 className="mega-menu__heading">Now in the cinema</h4>
                  <ul className="mega-menu__list">
                    <li className="mega-menu__nav-item">
                      <a href="#">The Counselor</a>
                    </li>
                    <li className="mega-menu__nav-item">
                      <a href="#">Bad Grandpa</a>
                    </li>
                    <li className="mega-menu__nav-item">
                      <a href="#">Blue Is the Warmest Color</a>
                    </li>
                    <li className="mega-menu__nav-item">
                      <a href="#">Capital</a>
                    </li>
                    <li className="mega-menu__nav-item">
                      <a href="#">Spinning Plates</a>
                    </li>
                    <li className="mega-menu__nav-item">
                      <a href="#">Bastards</a>
                    </li>
                  </ul>
                </li>
                <li className="col-md-3 mega-menu__coloum mega-menu__coloum--outheading">
                  <ul className="mega-menu__list">
                    <li className="mega-menu__nav-item">
                      <a href="#">Gravity</a>
                    </li>
                    <li className="mega-menu__nav-item">
                      <a href="#">Captain Phillips</a>
                    </li>
                    <li className="mega-menu__nav-item">
                      <a href="#">Carrie</a>
                    </li>
                    <li className="mega-menu__nav-item">
                      <a href="#">Cloudy with a Chance of Meatballs 2</a>
                    </li>
                  </ul>
                </li>
                <li className="col-md-3 mega-menu__coloum">
                  <h4 className="mega-menu__heading">Ending soon</h4>
                  <ul className="mega-menu__list">
                    <li className="mega-menu__nav-item">
                      <a href="#">Escape Plan</a>
                    </li>
                    <li className="mega-menu__nav-item">
                      <a href="#">Rush</a>
                    </li>
                    <li className="mega-menu__nav-item">
                      <a href="#">Prisoners</a>
                    </li>
                    <li className="mega-menu__nav-item">
                      <a href="#">Enough Said</a>
                    </li>
                    <li className="mega-menu__nav-item">
                      <a href="#">The Fifth Estate</a>
                    </li>
                    <li className="mega-menu__nav-item">
                      <a href="#">Runner Runner</a>
                    </li>
                  </ul>
                </li>
                <li className="col-md-3 mega-menu__coloum mega-menu__coloum--outheading">
                  <ul className="mega-menu__list">
                    <li className="mega-menu__nav-item">
                      <a href="#">Insidious: Chapter 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="control-panel">
          {!userName && (
            <a
              href="#"
              onClick={handleLogin}
              className="btn btn--sign login-window"
            >
              Sign in
            </a>
          )}
          {userName && (
            <a href="#" onClick={handleLogout} className="btn btn--logged">
              {userName}
            </a>
          )}
          {/*           <a
            href="#"
            className="btn btn-md btn--warning btn--book login-window"
          >
            Book a ticket
          </a> */}
        </div>
      </div>
    </header>
  );
}
