import React, { useEffect } from "react";
import User from "./User";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MenuAccount(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const userName = User.current().userName();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/login");
  }

  function handleOpenCloseMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  function handleLogout(e) {
    e.preventDefault();
    setMenuOpen((prevState) => false);
    User.current(props.host)
      .logout()
      .then(() => navigate("/"));
  }

  return (
    <div className="control-panel">
      {!userName && (
        <a
          href="#"
          onClick={handleLogin}
          className="btn btn--sign login-window"
        >
          Sign in
        </a>
      )}

      {userName && (
        <div className="auth">
          <div className="auth__show ">
            <span className="auth__image">
              <img className="avatar" src={props.staticUri + "me.jpeg"} />
            </span>
            <a
              href="#"
              onClick={handleOpenCloseMenu}
              className="btn btn--sign btn--singin"
            >
              {userName}
            </a>
            <ul
              className={
                menuOpen ? "auth__function open-function" : "auth__function"
              }
            >
              <li>
                <a href="#" className="auth__function-item">
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleLogout}
                  className="auth__function-item"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
