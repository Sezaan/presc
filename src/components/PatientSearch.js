import React, { Component,useEffect,useState } from "react";
import TextField from "@material-ui/core/TextField";
import PatientBlock from "./PatientBlock";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import InputAdornment from "@material-ui/core/InputAdornment";

function PatientSearch() {
  const [date, setDate] = useState("");
  const [patient, setPatient] = useState("");
  const [url, setUrl] = useState("");
  const [list, setList] = useState([]);

   function getPatientList(){

    setStateUrl()
    console.log(url)
    fetch(url,{
      method:"GET",
      headers:{
        'prescription-generator' : `${localStorage.getItem('auth_token')}`,
        'Context-Type' : 'application/json'
      }
    }).then(response => response.json()).
      then(result => {
        console.log(result.data)
        setList(result.data)
        console.log("Epenche ",list)
      })

  } 

  function setStateDate(){
    setDate(document.getElementById('date').value)
    //console.log(date)
  }
  
  function setStatePatient(){
    setPatient(document.getElementById('patients').value)
    //console.log(patient)
  }

  function setStateUrl(){
    console.log(date, patient)
    if(date === "" && patient === ""){
      setUrl('https://calm-plains-47385.herokuapp.com/patient/get_patient')
    }
    else{
      setUrl(`https://calm-plains-47385.herokuapp.com/patient/get_patient?filter=${patient+date}`)
    }
  }

  return (
    <div
      style={{
        background: "#FFFFFF",
        marginLeft: "3rem",
        marginRight: "3rem",
      }}
    >
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
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>All Patients</p>
          <div
            onSelect={getPatientList}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <TextField
              id="patients"
              variant="outlined"
              label="Search For a Patient"
              onChangeCapture={setStatePatient}
              style={{ width: "700px" }}
            ></TextField>
            <TextField
              id="date"
              variant="outlined"
              label="Select Date"
              onChangeCapture={setStateDate}
              style={{ width: "200px" }}
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
      <div
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        }}
      >
       {console.log("Hello Good World",list)}
        {
          list.map( item => (
            <PatientBlock 
            key={item._id}
            name={item.name}
            phone={item.phone}
            short_id={item.short_id}
            gender={item.gender}
            DOB={item.date_of_birth}
            age={24}
            last_visit={item.last_visit}
            />
          ))
        } 
         

      </div>
    </div>
  );
}

export default PatientSearch;
