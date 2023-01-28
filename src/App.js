import "./App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import Footer from "./Footer";
import FullMovie from "./FullMovie";
import ChooseSit from "./ChooseSit";

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
                <Menu host={apiHost} />
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
                <Menu host={apiHost} />
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
                <Menu host={apiHost} />
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
                <Menu host={apiHost} />
                <ChooseSit host={apiHost} />
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
