import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Home(props) {
  const [playing, setPlaying] = useState([]);

  useEffect(() => {
    shows();
  }, []);

  function shows() {
    fetch(props.host + "/shows")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPlaying(json.showsThisWeek);
      });
  }

  return (
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
  );
}
