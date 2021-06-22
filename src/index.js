import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LoginPage from "./pages/Prescription";
import PreviewContext, { PreviewContextProvider } from "./context/PreviewContext";
import PatientContext,{PatientContextProvider} from "./context/PatientContext"

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <PreviewContextProvider>
    <App></App>
  </PreviewContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
