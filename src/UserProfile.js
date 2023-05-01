import React from "react";

export default function UserProfile(props) {
  return (
    <>
      <section className="container">
        <h2 className="page-heading heading--outcontainer">User Profile</h2>
        <div className="contact">
          <img className="avatar" src={props.staticUri + "me-big.jpeg"} />
          <p className="contact__title">
            Enrique Molinari <br />
            <span class="contact__describe">Points: 10</span>
          </p>
          <span className="contact__mail">enrique.molinari@gmail.com</span>
        </div>
      </section>
      <div className="contact-form-wrapper">
        <div className="container">
          <div className="col-sm-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
            <form
              id="contact-form"
              className="form row"
              method="post"
              noValidate
              action="send.php"
            >
              <p className="form__title">Change Password?</p>
              <div className="col-sm-6">
                <input
                  type="password"
                  placeholder="Current Password"
                  name="current_password"
                  className="form__name"
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="password"
                  placeholder="New Password"
                  name="pass1"
                  className="form__mail"
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="password"
                  placeholder="New Password"
                  name="pass2"
                  className="form__mail"
                />
              </div>
              <button type="submit" className="btn btn-md btn--danger">
                Change it!
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );

  {
    /* <div>
      <div className="wrapper">
        <section className="container">
          <div className="col-sm-12">
            <div className="movie">
              <h2 className="page-heading">User Profile</h2>
              <div className="movie__info">
                <div className="col-sm-2 col-md-3 movie-mobile">
                  <div>

                    <img
                      className="avatar"
                      src={props.staticUri + "me-big.jpeg"}
                    />
                  </div>
                </div>
                <div className="col-sm-8 col-md-9">
                  <p>&nbsp;</p>

                  <p className="movie__option">
                    <strong>Full Name: </strong>
                    <a href="#">bbb</a>
                  </p>
                  <p className="movie__option">
                    <strong>user name: </strong>
                    cccc
                  </p>
                  <p className="movie__option">
                    <strong>email: </strong>
                    enrique.molinari@gmail.com
                  </p>
                  <p className="movie__option">
                    <strong>Points: </strong>
                    10
                  </p>
                </div>
              </div>
              <div className="clearfix" />
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <h2 className="page-heading">About me</h2>
              <p className="movie__describe">
                My name is Enrique Pablo Molinari. I live in Carmen de
                Patagones, Patagonia Argentina. I really enjoy doing and
                teaching software development, design and architecture. Right
                now, I’m teaching Object Oriented Programming II at Universidad
                Nacional de Río Negro.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
 */
  }
}
