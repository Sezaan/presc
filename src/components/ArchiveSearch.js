import React, { Component, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import style from "../style.module.css";
import { flushSync } from "react-dom";
import PatientList from "./PatientList";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import InputAdornment from "@material-ui/core/InputAdornment";

function ArchiveSearch(props){

    const [date,setDate] = useState('')
    const [prescription,setPrescription] = useState('')
    const [url,setUrl] = useState('')
    const [list,setList] = useState([])

    useEffect(() => {
      fetch(url)
      .then(response => response.json())
      .then(result => {
        console.log(result)
      })
    })

    function setStateDate(){
      setDate(document.getElementById('date').value)
    }
    
    function setStatePrescription(){
      setPrescription(document.getElementById('prescription').value)
    }

    function setStateUrl(){
      if(date === "" && prescription !== ""){
        setUrl()
      }
      else if(date !== "" && prescription === ""){

      }
      else if(date === "" && prescription === ""){
        setUrl()
      }
      else{
        setUrl()
      }
    }
    
    return (
      <div style={{background:"#FFFFFF",marginLeft:"3rem",marginRight:"3rem"}}>
        <div
          style={{
            padding: "2rem",
            boxShadow: "0px 0px 10px rgba(187, 187, 187, 0.25)",
            boxSizing: "border-box",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        >
          <div dis>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Prescription Archive
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="prescription"
                variant="outlined"
                label="Search For a Prescription"
                style={{width:"700px"}}
              ></TextField>
              <TextField
                id="date"
                variant="outlined"
                label="Select Date"
                style={{width:"200px"}}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <CalendarTodayIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </div>
          </div>
        </div>
        <PatientList />
        <PatientList />
        <PatientList />
      </div>
    );
  }


export default ArchiveSearch;
