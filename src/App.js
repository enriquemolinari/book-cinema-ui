import "./App.css";

function App() {
  const apiHost = process.env.REACT_APP_API_HOST;

  return (
    <div>
      <div className="wrapper">
        {/* Header section */}
        <header className="header-wrapper">
          <div className="container">
            {/* Logo link*/}
            <a href="index.html" className="logo">
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
                      <a href="movie-page-full.html">
                        Single movie (full widht)
                      </a>
                    </li>
                    <li className="menu__nav-item">
                      <a href="movie-list-left.html">
                        Movies list (rigth sidebar)
                      </a>
                    </li>
                    <li className="menu__nav-item">
                      <a href="movie-list-right.html">
                        Movies list (left sidebar)
                      </a>
                    </li>
                    <li className="menu__nav-item">
                      <a href="movie-list-full.html">
                        Movies list (full widht)
                      </a>
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
                      <a href="single-page-full.html">
                        Single post (full widht)
                      </a>
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
            {/* Additional header buttons / Auth and direct link to booking*/}
            <div className="control-panel">
              <a href="#" className="btn btn--sign login-window">
                Sign in
              </a>
              <a
                href="#"
                className="btn btn-md btn--warning btn--book login-window"
              >
                Book a ticket
              </a>
            </div>
          </div>
        </header>
        {/* Search bar */}
        <div className="search-wrapper">
          <div className="container container--add">
            <form id="search-form" method="get" className="search">
              <input
                type="text"
                className="search__field"
                placeholder="Search"
              />
              <button
                type="submit"
                className="btn btn-md btn--danger search__button"
              >
                search a movie
              </button>
            </form>
          </div>
        </div>
        {/* Main content */}
        <section className="container">
          <h2 id="target" className="page-heading heading--outcontainer">
            Now in the cinema
          </h2>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-12">
                {/* Movie variant with time */}
                <div className="movie movie--test movie--test--dark movie--test--left">
                  <div className="movie__images">
                    <a href="movie-page-left.html" className="movie-beta__link">
                      <img alt src="images/movie/edu-movie1-424.jpeg" />
                    </a>
                  </div>
                  <div className="movie__info">
                    <a href="movie-page-left.html" className="movie__title">
                      Gravity (2013)
                    </a>
                    <p className="movie__time">91 min</p>
                    <p className="movie__option">
                      <a href="#">Sci-Fi</a> | <a href="#">Thriller</a> |{" "}
                      <a href="#">Drama</a>
                    </p>
                    <div className="movie__rate">
                      <div className="score" />
                      <span className="movie__rating">4.1</span>
                    </div>
                  </div>
                </div>
                {/* Movie variant with time */}
                {/* Movie variant with time */}
                <div className="movie movie--test movie--test--light movie--test--left">
                  <div className="movie__images">
                    <a href="movie-page-left.html" className="movie-beta__link">
                      <img alt src="images/movie/edu-movie2-424.jpeg" />
                    </a>
                  </div>
                  <div className="movie__info">
                    <a href="movie-page-left.html" className="movie__title">
                      The Hobbit: The Desolation of Smaug (2013)
                    </a>
                    <p className="movie__time">169 min</p>
                    <p className="movie__option">
                      <a href="#">Adventure</a> | <a href="#">Fantasy</a> |{" "}
                      <a href="#">Drama</a>
                    </p>
                    <div className="movie__rate">
                      <div className="score" />
                      <span className="movie__rating">5.0</span>
                    </div>
                  </div>
                </div>
                {/* Movie variant with time */}
                {/* Movie variant with time */}
                <div className="movie movie--test movie--test--light movie--test--right">
                  <div className="movie__images">
                    <a href="movie-page-left.html" className="movie-beta__link">
                      <img alt src="images/movie/edu-movie3-424.jpeg" />
                    </a>
                  </div>
                  <div className="movie__info">
                    <a href="movie-page-left.html" className="movie__title">
                      The Hunger Games: Catching Fire (2013){" "}
                    </a>
                    <p className="movie__time">146 min</p>
                    <p className="movie__option">
                      <a href="#">Action</a> | <a href="#">Adventure</a> |{" "}
                      <a href="#">Sci-Fi</a>
                    </p>
                    <div className="movie__rate">
                      <div className="score" />
                      <span className="movie__rating">4.9</span>
                    </div>
                  </div>
                </div>
                {/* Movie variant with time */}
                {/* Movie variant with time */}
                <div className="movie movie--test movie--test--dark movie--test--right">
                  <div className="movie__images">
                    <a href="movie-page-left.html" className="movie-beta__link">
                      <img alt src="images/movie/edu-movie4-424.jpeg" />
                    </a>
                  </div>
                  <div className="movie__info">
                    <a href="movie-page-left.html" className="movie__title">
                      Thor: The Dark World (2013){" "}
                    </a>
                    <p className="movie__time">112 min</p>
                    <p className="movie__option">
                      <a href="#">Action</a> | <a href="#">Adventure</a> |{" "}
                      <a href="#">Fantasy</a>
                    </p>
                    <div className="movie__rate">
                      <div className="score" />
                      <span className="movie__rating">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="clearfix" />
        <footer className="footer-wrapper">
          <section className="container">
            <div className="col-xs-4 col-md-2 footer-nav">
              <ul className="nav-link">
                <li>
                  <a href="#" className="nav-link__item">
                    Cities
                  </a>
                </li>
                <li>
                  <a href="movie-list-left.html" className="nav-link__item">
                    Movies
                  </a>
                </li>
                <li>
                  <a href="trailer.html" className="nav-link__item">
                    Trailers
                  </a>
                </li>
                <li>
                  <a href="rates-left.html" className="nav-link__item">
                    Rates
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-4 col-md-2 footer-nav">
              <ul className="nav-link">
                <li>
                  <a href="coming-soon.html" className="nav-link__item">
                    Coming soon
                  </a>
                </li>
                <li>
                  <a href="cinema-list.html" className="nav-link__item">
                    Cinemas
                  </a>
                </li>
                <li>
                  <a href="offers.html" className="nav-link__item">
                    Best offers
                  </a>
                </li>
                <li>
                  <a href="news-left.html" className="nav-link__item">
                    News
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-4 col-md-2 footer-nav">
              <ul className="nav-link">
                <li>
                  <a href="#" className="nav-link__item">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="gallery-four.html" className="nav-link__item">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="nav-link__item">
                    Contacts
                  </a>
                </li>
                <li>
                  <a href="page-elements.html" className="nav-link__item">
                    Shortcodes
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="footer-info">
                <p className="heading-special--small">
                  A.Movie
                  <br />
                  <span className="title-edition">in the social media</span>
                </p>
                <div className="social">
                  <a href="#" className="social__variant fa fa-facebook" />
                  <a href="#" className="social__variant fa fa-twitter" />
                  <a href="#" className="social__variant fa fa-vk" />
                  <a href="#" className="social__variant fa fa-instagram" />
                  <a href="#" className="social__variant fa fa-tumblr" />
                  <a href="#" className="social__variant fa fa-pinterest" />
                </div>
                <div className="clearfix" />
                <p className="copy">
                  © A.Movie, 2013. All rights reserved. Done by Olia Gozha
                </p>
              </div>
            </div>
          </section>
        </footer>
      </div>
      {/* open/close */}
      <div className="overlay overlay-hugeinc">
        <section className="container">
          <div className="col-sm-4 col-sm-offset-4">
            <button type="button" className="overlay-close">
              Close
            </button>
            <form id="login-form" className="login" method="get" noValidate>
              <p className="login__title">
                sign in <br />
                <span className="login-edition">welcome to A.Movie</span>
              </p>
              <div className="social social--colored">
                <a href="#" className="social__variant fa fa-facebook" />
                <a href="#" className="social__variant fa fa-twitter" />
                <a href="#" className="social__variant fa fa-tumblr" />
              </div>
              <p className="login__tracker">or</p>
              <div className="field-wrap">
                <input
                  type="email"
                  placeholder="Email"
                  name="user-email"
                  className="login__input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  className="login__input"
                />
                <input
                  type="checkbox"
                  id="#informed"
                  className="login__check styled"
                />
                <label htmlFor="#informed" className="login__check-info">
                  remember me
                </label>
              </div>
              <div className="login__control">
                <button
                  type="submit"
                  className="btn btn-md btn--warning btn--wider"
                >
                  sign in
                </button>
                <a href="#" className="login__tracker form__tracker">
                  Forgot password?
                </a>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
