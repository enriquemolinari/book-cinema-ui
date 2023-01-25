import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function FullMovie(props) {
  const [movie, setMovie] = useState();
  const location = useLocation();
  //TODO: vote if logged in. Agrego popup para el comentario?
  //TODO: comments if logged in
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
                    <span className="movie__rating">5.0</span>
                    <img
                      alt
                      src={staticUri + movie?.movie.coverImg + ".jpeg"}
                    />
                  </div>
                  <div className="movie__rate">
                    Your vote:{" "}
                    <div
                      id="score"
                      className="score"
                      style={{ cursor: "pointer" }}
                    >
                      <img alt={1} src="images/rate/star-off.svg" title="bad" />
                      &nbsp;
                      <img
                        alt={2}
                        src="images/rate/star-off.svg"
                        title="poor"
                      />
                      &nbsp;
                      <img
                        alt={3}
                        src="images/rate/star-off.svg"
                        title="regular"
                      />
                      &nbsp;
                      <img
                        alt={4}
                        src="images/rate/star-off.svg"
                        title="good"
                      />
                      &nbsp;
                      <img
                        alt={5}
                        src="images/rate/star-off.svg"
                        title="gorgeous"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-md-9">
                  <p className="movie__time">{movie?.movie.duration}</p>
                  {/*                   <p className="movie__option">
                    <strong>Country: </strong>
                    <a href="#">New Zeland</a>, <a href="#">USA</a>
                  </p>
                  <p className="movie__option">
                    <strong>Year: </strong>
                    <a href="#">2012</a>
                  </p> */}
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
                    <strong>Release date: </strong>December 12, 2012
                  </p>
                  <p className="movie__option">
                    <strong>Director: </strong>
                    <a href="#">Peter Jackson</a>
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
                    <a href="#">13</a>
                  </p>
                  <p className="movie__option">
                    <strong>Box office: </strong>
                    <a href="#">$1 017 003 568</a>
                  </p>
                  <a href="#" className="comment-link">
                    Comments: 15
                  </a>
                  {/*                   <div className="movie__btns movie__btns--full">
                    <a href="#" className="btn btn-md btn--warning">
                      book a ticket for this movie
                    </a>
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
            <div className="choose-container">
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
      </div>
    </div>
  );
}

export default FullMovie;
