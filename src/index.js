import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import reportWebVitals from './reportWebVitals';
import GeneralPrescription from './components/GeneralPrescription'
import ButtonList from './components/ButtonList'
import PatientInfo from './components/PatientInfo'


ReactDOM.render(
  <div style={{background:"#e5e5e5"}}>
    <ButtonList/>
    <PatientInfo/>
    <GeneralPrescription/>
  </div>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
