import "../styles/App.css";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("G-NBJBXYVYYF");

  return (
    <>
      <h1>Capybara Studies</h1>

      <img src="/capybara.gif" />
    </>
  );
}

export default App;
