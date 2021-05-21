import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import reportWebVitals from './reportWebVitals';
import GeneralPrescription from './components/GeneralPrescription'



ReactDOM.render(
  <div style={{display:"flex",flexDirection:"row"}}>
    <GeneralPrescription></GeneralPrescription>
  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
