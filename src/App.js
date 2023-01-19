import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Home from "./Home";
import Footer from "./Footer";

function App() {
  const apiHost = process.env.REACT_APP_API_HOST;

  return (
    <>
      <Menu />
      <Home host={apiHost} />
      {/*       <Footer /> */}
    </>
  );
}

export default App;
