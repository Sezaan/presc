import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import reportWebVitals from './reportWebVitals';
import MedicineList from './components/MedicineList'
import Treatment from './components/Treatment';
import Diagnosis from './components/Diagnosis'
import PatientInfo from './components/PatientInfo'

ReactDOM.render(
  <div style={{display:"flex",flexDirection:"row"}}>
    <PatientInfo></PatientInfo>
  </div>
  
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
