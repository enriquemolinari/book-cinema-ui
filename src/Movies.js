import React from "react";

export default function Movies() {
  return (
    <section className="container">
      <div className="col-sm-12">
        <h2 className="page-heading">Movies</h2>
        <div className="tags-area">
          <div className="tags tags--unmarked">
            <span className="tags__label">Sorted by:</span>
            <ul>
              <li className="item-wrap">
                <a
                  href="#"
                  className="tags__item item-active"
                  data-filter="name"
                >
                  name
                </a>
              </li>
              <li className="item-wrap">
                <a href="#" className="tags__item" data-filter="release">
                  release date
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Movie preview item */}
        <div className="movie movie--preview movie--full release">
          <div className="col-sm-3 col-md-2 col-lg-2">
            <div className="movie-poster darkblue">
              <div className="movie-title">Las Vegas</div>
              <div className="movie-actors">
                Starring: Actor 1, Actor 2, Actor 3
              </div>
              <div className="movie-release-date">Release Date: May 2023</div>
            </div>
          </div>
          <div className="col-sm-9 col-md-10 col-lg-10 movie__about">
            <a href="movie-page-full.html" className="movie__title link--huge">
              Last Vegas (2013)
            </a>
            <p className="movie__time">105 min</p>
            <p className="movie__option">
              <strong>Country: </strong>
              <a href="#">USA</a>
            </p>
            <p className="movie__option">
              <strong>Category: </strong>
              <a href="#">Comady</a>
            </p>
            <p className="movie__option">
              <strong>Release date: </strong>November 1, 2013
            </p>
            <p className="movie__option">
              <strong>Director: </strong>
              <a href="#">Jon Turteltaub</a>
            </p>
            <p className="movie__option">
              <strong>Actors: </strong>
              <a href="#">Robert De Niro</a>, <a href="#">Michael Douglas</a>,{" "}
              <a href="#">Morgan Freeman</a>, <a href="#">Kevin Kline</a>,{" "}
              <a href="#">Mary Steenburgen</a>, <a href="#">Jerry Ferrara</a>,{" "}
              <a href="#">Romany Malco</a> <a href="#">...</a>
            </p>
            <p className="movie__option">
              <strong>Age restriction: </strong>
              <a href="#">13</a>
            </p>
            <div className="movie__btns">
              <a href="#" className="btn btn-md btn--warning">
                book a ticket <span className="hidden-sm">for this movie</span>
              </a>
              <a href="#" className="watchlist">
                Add to watchlist
              </a>
            </div>
            <div className="preview-footer">
              <div className="movie__rate">
                <div className="score" />
                <span className="movie__rate-number">170 votes</span>{" "}
                <span className="movie__rating">5.0</span>
              </div>
              <a href="#" className="movie__show-btn">
                Showtime
              </a>
            </div>
          </div>
          <div className="clearfix" />
          {/* Time table (choose film start time)*/}
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
            {/* end time table*/}
          </div>
          {/* end movie preview item */}
          {/* Movie preview item */}
          {/* end time table*/}
        </div>
        {/* end movie preview item */}
        <div className="coloum-wrapper">
          <div className="pagination paginatioon--full">
            <a href="#" className="pagination__prev">
              prev
            </a>
            <a href="#" className="pagination__next">
              next
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
