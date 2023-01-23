import "./App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import Footer from "./Footer";

function App() {
  const apiHost = process.env.REACT_APP_API_HOST;
  //console.log(apiHost);
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
                <Home host={apiHost} />
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
