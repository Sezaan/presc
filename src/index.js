import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import GeneralPrescription from "./components/GeneralPrescription";
import ButtonList from "./components/ButtonList";
import PatientInfo from "./components/PatientInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.render(
  <div>
    <Header></Header>
    <div style={{ background: "#e5e5e5",display:"grid",justifyItems:"center"}}>
      <ButtonList />
      <PatientInfo />
      <GeneralPrescription />
    </div>
    <Footer />
  </div>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
