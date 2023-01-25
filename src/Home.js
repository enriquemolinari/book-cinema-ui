import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const [playing, setPlaying] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    shows();
  }, []);

  function handleMovieDetail(e, mid) {
    e.preventDefault();
    nav("/movie", {
      state: {
        movieId: mid,
      },
    });
  }

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
        {playing.map((p) => (
          <div className="movie movie--test movie--test--dark movie--test--left">
            <div className="movie__images">
              <a href="movie-page-left.html" className="movie-beta__link">
                <img alt src={props.staticUri + p.movie.coverImg + ".jpeg"} />
              </a>
            </div>
            <div className="movie__info">
              <a
                href="#movie"
                onClick={(e) => handleMovieDetail(e, p.movie.id)}
                className="movie__title"
              >
                {p.movie.name}
              </a>
              <p className="movie__time">{p.movie.duration}</p>
              <p className="movie__option">
                {p.movie.genres.map((g, ind, arr) => (
                  <>
                    <a key={ind} href="#">
                      {g}
                    </a>
                    {ind < arr.length - 1 ? " | " : ""}
                  </>
                ))}
              </p>
              {p.shows.map((s, ind) => (
                <span className="movie__option">
                  {s.startDayTime.substring(0, s.startDayTime.length - 5)}
                  {"  "}
                  <span>
                    <li className="time-select__item" data-time="10:45">
                      {s.startDayTime.substring(s.startDayTime.length - 5)}
                    </li>
                    <br />
                  </span>
                </span>
              ))}
              <p className="movie__option">{p.movie.plot}</p>
            </div>
          </div>
        ))}

        {/* <span className="movie__option">
                <ul class="col-sm-6 items-wrap">
                  {p.shows.map((s, ind) => (
                    <>
                      <span>
                        <li className="time-select__item" data-time="10:45">
                          10:50
                        </li>
                      </span>
                    </>
                  ))}
                </ul>
              </span>
 */}

        {/* Movie variant with time */}
        {/* Movie variant with time */}
        {/* <div className="movie movie--test movie--test--light movie--test--left">
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
          </div>
        </div>

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
          </div>
        </div>

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
          </div>
        </div>*/}
      </div>
    </section>
  );
}
