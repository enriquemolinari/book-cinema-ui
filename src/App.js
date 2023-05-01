import "./App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import Footer from "./Footer";
import FullMovie from "./FullMovie";
import ChooseSit from "./ChooseSit";
import Pay from "./Pay";
import PaySuccess from "./PaySuccess";

function App() {
  const apiHost = process.env.REACT_APP_API_HOST;
  const staticUri = process.env.REACT_APP_STATIC;

  return (
    <div>
      <div className="wrapper">
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <Menu staticUri={staticUri} host={apiHost} />
                <SearchBar />
                <Home staticUri={staticUri} host={apiHost} />
                <Footer />
              </>
            }
          />
          <Route
            path={"/login"}
            element={
              <>
                <Menu staticUri={staticUri} host={apiHost} />
                <SearchBar />
                <Login host={apiHost} />
                <Footer />
              </>
            }
          />
          <Route
            path={"/movie"}
            element={
              <>
                <Menu staticUri={staticUri} host={apiHost} />
                <SearchBar />
                <FullMovie staticUri={staticUri} host={apiHost} />
                <Footer />
              </>
            }
          />
          <Route
            path={"/buystep1"}
            element={
              <>
                <Menu staticUri={staticUri} host={apiHost} />
                <ChooseSit host={apiHost} />
                <Footer />
              </>
            }
          />
          <Route
            path={"/buystep2"}
            element={
              <>
                <Menu staticUri={staticUri} host={apiHost} />
                <Pay host={apiHost} />
                <Footer />
              </>
            }
          />
          <Route
            path={"/paysuccess"}
            element={
              <>
                <Menu staticUri={staticUri} host={apiHost} />
                <SearchBar />
                <PaySuccess host={apiHost} />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
