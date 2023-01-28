import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RatingStars from "./RatingStars";
import User from "./User";

function FullMovie(props) {
  const userName = User.current().userName();
  const [movie, setMovie] = useState();
  const location = useLocation();
  const apiHost = props.host;
  const staticUri = props.staticUri;

  useEffect(() => {
    movieDetail(location.state.movieId);
  }, []);

  function movieDetail(mid) {
    fetch(apiHost + "/movies/" + mid)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMovie(json);
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
                      {movie?.movie.rating.value}
                    </span>
                    <img
                      alt
                      src={staticUri + movie?.movie.coverImg + ".jpeg"}
                    />
                  </div>
                  <div className="movie__rate">
                    Rating:{" "}
                    <div id="score" className="score">
                      <RatingStars value={movie?.movie.rating.value} />
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
                    Comments: {movie?.movie.rating.total}
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
                    <select className="comment-form rating">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <textarea
                      className="comment-form__text"
                      placeholder="Add you comment here"
                      defaultValue={""}
                    />
                    <label className="comment-form__info">
                      500 characters max.
                    </label>
                    <button
                      type="submit"
                      className="btn btn-md btn--danger comment-form__btn"
                    >
                      Rate
                    </button>
                  </form>
                </div>
              </div>
            )}
            <div className="choose-container">
              <h2 className="page-heading">
                comments ({movie?.movie.rating.total})
              </h2>
              <div className="comment-wrapper">
                <div className="comment-sets">
                  {movie?.movie.rating.details.map((rd) => (
                    <div className="comment">
                      <a href="#" className="comment__author2">
                        <span className="rate-comments" />
                        {rd.username}
                      </a>
                      &nbsp;
                      <RatingStars value={rd.vote} />
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
