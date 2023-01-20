const STOREUNAME = "username";
const STOREUROLES = "roles";
const STOREUID = "id";
const STOREPOINTS = "points";

export default class User {
  constructor(host) {
    this.host = host;
  }

  userId() {
    return sessionStorage.getItem(STOREUID);
  }

  userName() {
    return sessionStorage.getItem(STOREUNAME);
  }

  points() {
    return sessionStorage.getItem(STOREPOINTS);
  }

  hasRole(role) {
    let userRoles = sessionStorage.getItem(STOREUROLES);
    return role.includes(userRoles);
  }

  static current(host) {
    return new User(host);
  }

  logout() {
    return fetch(this.host + "/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        sessionStorage.clear();
        return Promise.resolve();
      });
  }

  login(userName, password) {
    return fetch(this.host + "/login", {
      method: "POST",
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      credentials: "include",
    })
      .then((response) => {
        if (response.status === 401) {
          return Promise.reject({
            msg: "Username or password incorrect...",
            error: true,
          });
        }
        return response.json();
      })
      .then((json) => {
        if (json.result === "success") {
          sessionStorage.setItem(STOREUNAME, json.user.username);
          sessionStorage.setItem(STOREPOINTS, json.user.points);
          sessionStorage.setItem(STOREUID, json.user.id);
          return Promise.resolve();
        } else {
          return Promise.reject({
            msg: json.message,
            error: true,
          });
        }
      });
  }
}
