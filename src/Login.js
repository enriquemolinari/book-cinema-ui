import { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";

export default function Login(props) {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [errorResponse, setErrorResponse] = useState({
    msg: "",
    error: false,
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm((inputsValue) => {
      return { ...inputsValue, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginForm);
    new User(props.host)
      .login(loginForm.username, loginForm.password)
      .then((v) => {
        setErrorResponse({
          msg: "",
          error: false,
        });

        navigate("/");
      })
      .catch((v) => {
        setErrorResponse(v);
      });
  }

  return (
    <>
      {errorResponse.error && (
        <>
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            <div class="alert alert-danger">
              <span class="icon-warning"></span>
              {errorResponse.msg}
              <a
                class="close"
                data-dismiss="alert"
                href="#"
                aria-hidden="true"
                onClick={() => setErrorResponse({ error: false })}
              ></a>
            </div>
          </div>
          <div className="col-sm-4"></div>
          <p></p>
        </>
      )}
      <form id="login-form" className="login" method="get" noValidate>
        <p className="login__title">
          sign in <br />
          <span className="login-edition">welcome to Cinema</span>
        </p>
        <div className="field-wrap">
          <input
            type="email"
            placeholder="Username"
            name="username"
            className="login__input"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="login__input"
            onChange={handleChange}
          />
        </div>
        <p></p>
        <div className="login__control">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-md btn--warning btn--wider"
          >
            sign in
          </button>
          <a href="#" className="login__tracker form__tracker">
            Forgot password?
          </a>
        </div>
      </form>
    </>
  );
}
