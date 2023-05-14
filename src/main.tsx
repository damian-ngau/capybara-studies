import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import Sound from "./components/Sound.tsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Sound />
    <br></br>
    <a href="https://github.com/damian-ngau">Created by Damian</a>
    <p>Dedicated to Sevin</p>
  </React.StrictMode>
);
