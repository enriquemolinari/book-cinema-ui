import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Home from "./Home";
import Login from "./Login";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  const apiHost = process.env.REACT_APP_API_HOST;

  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <>
            <Menu host={apiHost} />
            <Home host={apiHost} />
          </>
        }
      />
      <Route path={"/login"} element={<Login host={apiHost} />} />
    </Routes>
  );
}

export default App;
