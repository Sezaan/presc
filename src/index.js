import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./pages/Prescription";
import MyContext, { MyContextProvider } from "./components/MyContext";

ReactDOM.render(
  <MyContextProvider>
    <App></App>
  </MyContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
