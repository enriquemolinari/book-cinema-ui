import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RatingStars from "./RatingStars";
import ResponseMessage from "./ResponseMessage";
import User from "./User";

function FullMovie(props) {
  const user = User.current();
  const userName = User.current().userName();
  const [movie, setMovie] = useState();
  const [movieRate, setMovieRate] = useState();
  const [rating, setRating] = useState();
  const [responseStatus, setResponseStatus] = useState({});
  const [processing, setProcessing] = useState(false);
  const location = useLocation();
  const apiHost = props.host;
  const staticUri = props.staticUri;

  useEffect(() => {
    movieDetail(location.state.movieId);
    rateDetail(location.state.movieId);
  }, []);

  function rateDetail(mid) {
    fetch(apiHost + "/movies/" + mid + "/rate")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMovieRate(json);
      });
  }

  function movieDetail(mid) {
    fetch(apiHost + "/movies/" + mid)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMovie(json);
      });
  }

  function handleCloseResponseStatus() {
    setResponseStatus({});
  }

  function handleSubmitRating(e) {
    e.preventDefault();
    setProcessing(true);
    fetch(props.host + "/movies/" + movie?.movie.id + "/rate", {
      method: "POST",
      body: JSON.stringify({
        value: rating.value,
        comment: rating.comment,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    })
      .then((response) => {
        setProcessing(false);
        return response.json();
      })
      .then((json) => {
        setResponseStatus(json);
        if (json.result === "success") {
          rateDetail(movie?.movie.id);
        }
      });
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setRating((inputsValue) => {
      return { ...inputsValue, [name]: value };
    });
  }

  return (
    <div>
      <div className="wrapper">
        <section className="container">
          <div className="col-sm-12">
            <div className="movie">
              <h2 className="page-heading">{movie?.movie.name}</h2>
              <div className="movie__info">
                <div className="col-sm-4 col-md-3 movie-mobile">
                  <div className="movie__images">
                    <span className="movie__rating">
                      {movieRate?.rating.value}
                    </span>
                    <img
                      alt
                      src={staticUri + movie?.movie.coverImg + ".jpeg"}
                    />
                  </div>
                  <div className="movie__rate">
                    Rating:{" "}
                    <div id="score" className="score">
                      <RatingStars
                        value={movieRate?.rating.value}
                        random={Math.random()}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-md-9">
                  <p className="movie__time">{movie?.movie.duration}</p>

                  <p className="movie__option">
                    <strong>Year: </strong>
                    <a href="#">{movie?.movie.year}</a>
                  </p>
                  <p className="movie__option">
                    <strong>Genres: </strong>
                    {movie?.movie.genres.map((g, ind, arr) => (
                      <>
                        <a key={ind} href="#">
                          {g}
                        </a>
                        {ind < arr.length - 1 ? " | " : ""}
                      </>
                    ))}
                  </p>
                  <p className="movie__option">
                    <strong>Release date: </strong>
                    {movie?.movie.releaseDate}
                  </p>
                  <p className="movie__option">
                    <strong>Director: </strong>
                    <a href="#">{movie?.movie.directorName}</a>
                  </p>
                  <p className="movie__option">
                    <strong>Actors: </strong>
                    {movie?.movie.cast.map((g, ind, arr) => (
                      <>
                        <a key={ind} href="#">
                          {g.name +
                            " " +
                            g.surname +
                            " (as " +
                            g.characterName +
                            ")"}
                        </a>
                        {ind < arr.length - 1 ? " | " : ""}
                      </>
                    ))}
                  </p>
                  <p className="movie__option">
                    <strong>Age restriction: </strong>
                    <a href="#">{movie?.movie.ageRestriction}</a>
                  </p>
                  <a href="#" className="comment-link">
                    Comments: {movieRate?.rating.total}
                  </a>
                  {/*                   <div className="movie__btns movie__btns--full">
                    <a href="#" className="watchlist">
                      Add to watchlist
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="clearfix" />
              <h2 className="page-heading">The plot</h2>
              <p className="movie__describe">{movie?.movie.plot}</p>
            </div>
            {userName && (
              <div className="choose-container">
                <h2 className="page-heading">Rate this</h2>
                <div className="comment-wrapper">
                  <form
                    id="comment-form"
                    className="comment-form"
                    method="post"
                  >
                    <select
                      className="comment-form rating"
                      name="value"
                      onChange={handleChange}
                    >
                      <option>Your Vote</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <textarea
                      className="comment-form__text"
                      name="comment"
                      placeholder="Add you comment here"
                      onChange={handleChange}
                    />
                    <label className="comment-form__info">
                      500 characters max.
                    </label>
                    <ResponseMessage
                      resp={responseStatus}
                      handleClose={handleCloseResponseStatus}
                    />
                    <button
                      type="submit"
                      className="btn btn-md btn--danger comment-form__btn"
                      onClick={handleSubmitRating}
                    >
                      Rate
                    </button>
                  </form>
                </div>
              </div>
            )}
            <div className="choose-container">
              <h2 className="page-heading">
                comments ({movieRate?.rating.total})
              </h2>
              <div className="comment-wrapper">
                <div className="comment-sets">
                  {movieRate?.rating.details.map((rd, index) => (
                    <div className="comment">
                      <a href="#" className="comment__author2">
                        <span className="rate-comments" />
                        {rd.username}
                      </a>
                      &nbsp;
                      <RatingStars value={rd.vote} random={index} />
                      <p className="comment__date">{rd.date}</p>
                      <p className="comment__message">{rd.comment}</p>
                    </div>
                  ))}
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
      </div>
    </div>
  );
}

export default FullMovie;
