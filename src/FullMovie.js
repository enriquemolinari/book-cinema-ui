function FullMovie() {
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
          <div className="col-sm-12">
            <div className="movie">
              <h2 className="page-heading">
                The Hobbit: An Unexpected Journey
              </h2>
              <div className="movie__info">
                <div className="col-sm-4 col-md-3 movie-mobile">
                  <div className="movie__images">
                    <span className="movie__rating">5.0</span>
                    <img alt src="images/movie/single-movie.jpg" />
                  </div>
                  <div className="movie__rate">
                    Your vote: <div id="score" className="score" />
                  </div>
                </div>
                <div className="col-sm-8 col-md-9">
                  <p className="movie__time">169 min</p>
                  <p className="movie__option">
                    <strong>Country: </strong>
                    <a href="#">New Zeland</a>, <a href="#">USA</a>
                  </p>
                  <p className="movie__option">
                    <strong>Year: </strong>
                    <a href="#">2012</a>
                  </p>
                  <p className="movie__option">
                    <strong>Category: </strong>
                    <a href="#">Adventure</a>, <a href="#">Fantazy</a>
                  </p>
                  <p className="movie__option">
                    <strong>Release date: </strong>December 12, 2012
                  </p>
                  <p className="movie__option">
                    <strong>Director: </strong>
                    <a href="#">Peter Jackson</a>
                  </p>
                  <p className="movie__option">
                    <strong>Actors: </strong>
                    <a href="#">Martin Freeman</a>, <a href="#">Ian McKellen</a>
                    , <a href="#">Richard Armitage</a>,{" "}
                    <a href="#">Ken Stott</a>, <a href="#">Graham McTavish</a>,{" "}
                    <a href="#">Cate Blanchett</a>, <a href="#">Hugo Weaving</a>
                    , <a href="#">Ian Holm</a>, <a href="#">Elijah Wood</a>{" "}
                    <a href="#">...</a>
                  </p>
                  <p className="movie__option">
                    <strong>Age restriction: </strong>
                    <a href="#">13</a>
                  </p>
                  <p className="movie__option">
                    <strong>Box office: </strong>
                    <a href="#">$1 017 003 568</a>
                  </p>
                  <a href="#" className="comment-link">
                    Comments: 15
                  </a>
                  <div className="movie__btns movie__btns--full">
                    <a href="#" className="btn btn-md btn--warning">
                      book a ticket for this movie
                    </a>
                    <a href="#" className="watchlist">
                      Add to watchlist
                    </a>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <h2 className="page-heading">The plot</h2>
              <p className="movie__describe">
                Bilbo Baggins is swept into a quest to reclaim the lost Dwarf
                Kingdom of Erebor from the fearsome dragon Smaug. Approached out
                of the blue by the wizard Gandalf the Grey, Bilbo finds himself
                joining a company of thirteen dwarves led by the legendary
                warrior, Thorin Oakenshield. Their journey will take them into
                the Wild; through treacherous lands swarming with Goblins and
                Orcs, deadly Wargs and Giant Spiders, Shapeshifters and
                Sorcerers. Although their goal lies to the East and the
                wastelands of the Lonely Mountain first they must escape the
                goblin tunnels, where Bilbo meets the creature that will change
                his life forever ... Gollum. Here, alone with Gollum, on the
                shores of an underground lake, the unassuming Bilbo Baggins not
                only discovers depths of guile and courage that surprise even
                him, he also gains possession of Gollum's "precious" ring that
                holds unexpected and useful qualities ... A simple, gold ring
                that is tied to the fate of all Middle-earth in ways Bilbo
                cannot begin to ...{" "}
              </p>
              <h2 className="page-heading">photos &amp; videos</h2>
              <div className="movie__media">
                <div className="movie__media-switch">
                  <a
                    href="#"
                    className="watchlist list--photo"
                    data-filter="media-photo"
                  >
                    234 photos
                  </a>
                  <a
                    href="#"
                    className="watchlist list--video"
                    data-filter="media-video"
                  >
                    10 videos
                  </a>
                </div>
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    {/*First Slide*/}
                    <div className="swiper-slide media-video">
                      <a
                        href="https://www.youtube.com/watch?v=Y5AehBA3IsE"
                        className="movie__media-item "
                      >
                        <img alt src="images/movie/movie-video1.jpg" />
                      </a>
                    </div>
                    {/*Second Slide*/}
                    <div className="swiper-slide media-video">
                      <a
                        href="https://www.youtube.com/watch?v=Kb3ykVYvT4U"
                        className="movie__media-item"
                      >
                        <img alt src="images/movie/movie-video2.jpg" />
                      </a>
                    </div>
                    {/*Third Slide*/}
                    <div className="swiper-slide media-photo">
                      <a
                        href="images/movie/movie-img1-lg.jpg"
                        className="movie__media-item"
                      >
                        <img alt src="images/movie/movie-img1.jpg" />
                      </a>
                    </div>
                    {/*Four Slide*/}
                    <div className="swiper-slide media-photo">
                      <a
                        href="images/movie/movie-img2-lg.jpg"
                        className="movie__media-item"
                      >
                        <img alt src="images/movie/movie-img2.jpg" />
                      </a>
                    </div>
                    {/*Slide*/}
                    <div className="swiper-slide media-photo">
                      <a
                        href="images/gallery/large/item-7.jpg"
                        className="movie__media-item"
                      >
                        <img alt src="images/movie/movie-img3.jpg" />
                      </a>
                    </div>
                    {/*Slide*/}
                    <div className="swiper-slide media-photo">
                      <a
                        href="images/gallery/large/item-11.jpg"
                        className="movie__media-item"
                      >
                        <img alt src="images/movie/movie-img4.jpg" />
                      </a>
                    </div>
                    {/*First Slide*/}
                    <div className="swiper-slide media-video">
                      <a
                        href="https://www.youtube.com/watch?v=Y5AehBA3IsE"
                        className="movie__media-item "
                      >
                        <img alt src="images/movie/movie-video1.jpg" />
                      </a>
                    </div>
                    {/*Second Slide*/}
                    <div className="swiper-slide media-video">
                      <a
                        href="https://www.youtube.com/watch?v=Kb3ykVYvT4U"
                        className="movie__media-item"
                      >
                        <img alt src="images/movie/movie-video2.jpg" />
                      </a>
                    </div>
                    {/*Slide*/}
                    <div className="swiper-slide media-photo">
                      <a
                        href="images/gallery/large/item-15.jpg"
                        className="movie__media-item"
                      >
                        <img alt src="images/movie/movie-img5.jpg" />
                      </a>
                    </div>
                    {/*Slide*/}
                    <div className="swiper-slide media-photo">
                      <a
                        href="images/gallery/large/item-16.jpg"
                        className="movie__media-item"
                      >
                        <img alt src="images/movie/movie-img6.jpg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="page-heading">showtime &amp; tickets</h2>
            <div className="choose-container">
              <form id="select" className="select" method="get">
                <select
                  name="select_item"
                  id="select-sort"
                  className="select__sort"
                  tabIndex={0}
                >
                  <option value={1} selected="selected">
                    London
                  </option>
                  <option value={2}>New York</option>
                  <option value={3}>Paris</option>
                  <option value={4}>Berlin</option>
                  <option value={5}>Moscow</option>
                  <option value={3}>Minsk</option>
                  <option value={4}>Warsawa</option>
                  <option value={5}>Kiev</option>
                </select>
              </form>
              <div className="datepicker">
                <span className="datepicker__marker">
                  <i className="fa fa-calendar" />
                  Date
                </span>
                <input
                  type="text"
                  id="datepicker"
                  defaultValue="03/10/2014"
                  className="datepicker__input"
                />
              </div>
              <a
                href="#"
                id="map-switch"
                className="watchlist watchlist--map watchlist--map-full"
              >
                <span className="show-map">Show cinemas on map</span>
                <span className="show-time">Show cinema time table</span>
              </a>
              <div className="clearfix" />
              <div className="time-select">
                <div className="time-select__group group--first">
                  <div className="col-sm-4">
                    <p className="time-select__place">Cineworld</p>
                  </div>
                  <ul className="col-sm-8 items-wrap">
                    <li className="time-select__item" data-time="09:40">
                      09:40
                    </li>
                    <li className="time-select__item" data-time="13:45">
                      13:45
                    </li>
                    <li className="time-select__item active" data-time="15:45">
                      15:45
                    </li>
                    <li className="time-select__item" data-time="19:50">
                      19:50
                    </li>
                    <li className="time-select__item" data-time="21:50">
                      21:50
                    </li>
                  </ul>
                </div>
                <div className="time-select__group">
                  <div className="col-sm-4">
                    <p className="time-select__place">Empire</p>
                  </div>
                  <ul className="col-sm-8 items-wrap">
                    <li className="time-select__item" data-time="10:45">
                      10:45
                    </li>
                    <li className="time-select__item" data-time="16:00">
                      16:00
                    </li>
                    <li className="time-select__item" data-time="19:00">
                      19:00
                    </li>
                    <li className="time-select__item" data-time="21:15">
                      21:15
                    </li>
                    <li className="time-select__item" data-time="23:00">
                      23:00
                    </li>
                  </ul>
                </div>
                <div className="time-select__group">
                  <div className="col-sm-4">
                    <p className="time-select__place">Curzon</p>
                  </div>
                  <ul className="col-sm-8 items-wrap">
                    <li className="time-select__item" data-time="09:00">
                      09:00
                    </li>
                    <li className="time-select__item" data-time="11:00">
                      11:00
                    </li>
                    <li className="time-select__item" data-time="13:00">
                      13:00
                    </li>
                    <li className="time-select__item" data-time="15:00">
                      15:00
                    </li>
                    <li className="time-select__item" data-time="17:00">
                      17:00
                    </li>
                    <li className="time-select__item" data-time="19:0">
                      19:00
                    </li>
                    <li className="time-select__item" data-time="21:0">
                      21:00
                    </li>
                    <li className="time-select__item" data-time="23:0">
                      23:00
                    </li>
                    <li className="time-select__item" data-time="01:0">
                      01:00
                    </li>
                  </ul>
                </div>
                <div className="time-select__group">
                  <div className="col-sm-4">
                    <p className="time-select__place">Odeon</p>
                  </div>
                  <ul className="col-sm-8 items-wrap">
                    <li className="time-select__item" data-time="10:45">
                      10:45
                    </li>
                    <li className="time-select__item" data-time="16:00">
                      16:00
                    </li>
                    <li className="time-select__item" data-time="19:00">
                      19:00
                    </li>
                    <li className="time-select__item" data-time="21:15">
                      21:15
                    </li>
                    <li className="time-select__item" data-time="23:00">
                      23:00
                    </li>
                  </ul>
                </div>
                <div className="time-select__group group--last">
                  <div className="col-sm-4">
                    <p className="time-select__place">Picturehouse</p>
                  </div>
                  <ul className="col-sm-8 items-wrap">
                    <li className="time-select__item" data-time="17:45">
                      17:45
                    </li>
                    <li className="time-select__item" data-time="21:30">
                      21:30
                    </li>
                    <li className="time-select__item" data-time="02:20">
                      02:20
                    </li>
                  </ul>
                </div>
              </div>
              {/* hiden maps with multiple locator*/}
              <div className="map">
                <div id="cimenas-map" />
              </div>
              <h2 className="page-heading">comments (15)</h2>
              <div className="comment-wrapper">
                <form id="comment-form" className="comment-form" method="post">
                  <textarea
                    className="comment-form__text"
                    placeholder="Add you comment here"
                    defaultValue={""}
                  />
                  <label className="comment-form__info">
                    250 characters left
                  </label>
                  <button
                    type="submit"
                    className="btn btn-md btn--danger comment-form__btn"
                  >
                    add comment
                  </button>
                </form>
                <div className="comment-sets">
                  <div className="comment">
                    <div className="comment__images">
                      <img alt src="images/comment/avatar.jpg" />
                    </div>
                    <a href="#" className="comment__author">
                      <span className="social-used fa fa-facebook" />
                      Roberta Inetti
                    </a>
                    <p className="comment__date">today | 03:04</p>
                    <p className="comment__message">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut vitae enim sollicitudin, euismod erat id, fringilla
                      lacus. Cras ut rutrum lectus. Etiam ante justo, volutpat
                      at viverra a, mattis in velit. Morbi molestie rhoncus
                      enim, vitae sagittis dolor tristique et.
                    </p>
                    <a href="#" className="comment__reply">
                      Reply
                    </a>
                  </div>
                  <div className="comment">
                    <div className="comment__images">
                      <img alt src="images/comment/avatar-olia.jpg" />
                    </div>
                    <a href="#" className="comment__author">
                      <span className="social-used fa fa-vk" />
                      Olia Gozha
                    </a>
                    <p className="comment__date">22.10.2013 | 14:40</p>
                    <p className="comment__message">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut vitae enim sollicitudin, euismod erat id, fringilla
                      lacus. Cras ut rutrum lectus. Etiam ante justo, volutpat
                      at viverra a, mattis in velit. Morbi molestie rhoncus
                      enim, vitae sagittis dolor tristique et.
                    </p>
                    <a href="#" className="comment__reply">
                      Reply
                    </a>
                  </div>
                  <div className="comment comment--answer">
                    <div className="comment__images">
                      <img alt src="images/comment/avatar-dmitriy.jpg" />
                    </div>
                    <a href="#" className="comment__author">
                      <span className="social-used fa fa-vk" />
                      Dmitriy Pustovalov
                    </a>
                    <p className="comment__date">today | 10:19</p>
                    <p className="comment__message">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut vitae enim sollicitudin, euismod erat id, fringilla
                      lacus. Cras ut rutrum lectus. Etiam ante justo, volutpat
                      at viverra a, mattis in velit. Morbi molestie rhoncus
                      enim, vitae sagittis dolor tristique et.
                    </p>
                    <a href="#" className="comment__reply">
                      Reply
                    </a>
                  </div>
                  <div className="comment comment--last">
                    <div className="comment__images">
                      <img alt src="images/comment/avatar-sia.jpg" />
                    </div>
                    <a href="#" className="comment__author">
                      <span className="social-used fa fa-facebook" />
                      Sia Andrews
                    </a>
                    <p className="comment__date"> 22.10.2013 | 12:31 </p>
                    <p className="comment__message">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut vitae enim sollicitudin, euismod erat id, fringilla
                      lacus. Cras ut rutrum lectus. Etiam ante justo, volutpat
                      at viverra a, mattis in velit. Morbi molestie rhoncus
                      enim, vitae sagittis dolor tristique et.
                    </p>
                    <a href="#" className="comment__reply">
                      Reply
                    </a>
                  </div>
                  <div id="hide-comments" className="hide-comments">
                    <div className="comment">
                      <div className="comment__images">
                        <img alt src="images/comment/avatar.jpg" />
                      </div>
                      <a href="#" className="comment__author">
                        <span className="social-used fa fa-facebook" />
                        Roberta Inetti
                      </a>
                      <p className="comment__date">today | 03:04</p>
                      <p className="comment__message">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut vitae enim sollicitudin, euismod erat id, fringilla
                        lacus. Cras ut rutrum lectus. Etiam ante justo, volutpat
                        at viverra a, mattis in velit. Morbi molestie rhoncus
                        enim, vitae sagittis dolor tristique et.
                      </p>
                      <a href="#" className="comment__reply">
                        Reply
                      </a>
                    </div>
                    <div className="comment">
                      <div className="comment__images">
                        <img alt src="images/comment/avatar-olia.jpg" />
                      </div>
                      <a href="#" className="comment__author">
                        <span className="social-used fa fa-vk" />
                        Olia Gozha
                      </a>
                      <p className="comment__date">22.10.2013 | 14:40</p>
                      <p className="comment__message">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut vitae enim sollicitudin, euismod erat id, fringilla
                        lacus. Cras ut rutrum lectus. Etiam ante justo, volutpat
                        at viverra a, mattis in velit. Morbi molestie rhoncus
                        enim, vitae sagittis dolor tristique et.
                      </p>
                      <a href="#" className="comment__reply">
                        Reply
                      </a>
                    </div>
                  </div>
                  <div className="comment-more">
                    <a href="#" className="watchlist">
                      Show more comments
                    </a>
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

export default FullMovie;
