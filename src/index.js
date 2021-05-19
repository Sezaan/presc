import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import reportWebVitals from './reportWebVitals';
import MedicineList from './components/MedicineList'
import Treatment from './components/Treatment';
import Diagnosis from './components/Diagnosis'

ReactDOM.render(
  <Treatment></Treatment>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
