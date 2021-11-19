import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";

import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CalculateProvider } from "./contexts/CalculateContext";

ReactDOM.render(
  <React.StrictMode>
    <CalculateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CalculateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
