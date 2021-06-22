import React, { Component } from "react";
import style from "../style.module.css";
import TextField from "@material-ui/core/TextField";
import { Flare } from "@material-ui/icons";
import { MenuItem } from "semantic-ui-react";

const currencies = [
  {
    value: "USD",
    label: "$"
  },
  {
    value: "EUR",
    label: "€"
  },
  {
    value: "BTC",
    label: "฿"
  },
  {
    value: "JPY",
    label: "¥"
  }
];

class PatientInfo extends Component {
  state = {};

  getValues=()=>{
      const name = document.getElementById('name').value
      const date_of_birth = document.getElementById('date_of_birth').value
      const age = document.getElementById('age').value
      const gender = document.getElementById('gender').value
      const phone = document.getElementById('phone').value

      const values ={
        name: name,
        date_of_birth: date_of_birth,
        age: age,
        gender: gender,
        phone: phone,
      }
      console.log(values)
  }

  getDate() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var today = new Date(),
      date =
        monthNames[today.getMonth()] +
        " " +
        today.getDate() +
        ", " +
        today.getFullYear();
    return date;
  }
  render() {
    return (
      <div
        style={{
          witdth: "auto",
          borderRadius: "4px",
          margin: "1rem",
          background: "#ffffff",
          boxShadow:"0px 0px 10px rgba(187, 187, 187, 0.25)",
          display: "grid",
          gridTemplateColumns:"4fr,1fr",
          gap:"1rem"
        }}
      >
          <div style={{gridColumn:"1/5",padding:"0 2rem 1rem 1rem"}}>
              <p style={{fontSize:"24px",fontWeight:"bold"}}>Patient Info</p>
              <div style={{display:"grid",gridTemplateColumns:"75% 25%"}}>
                  <TextField id="name" variant="outlined" label="Patient Name" style={{margin:"5px"}}></TextField>
                  <TextField id="patien_id" variant="outlined" label="Patient ID" style={{margin:"5px"}}></TextField>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"25% 25% 25% 25%",marginTop:"0.5rem"}}>
                    <TextField id="phone" variant="outlined" label="Contact Number" style={{margin:"5px"}}></TextField>
                    <TextField id="gender" variant="outlined" label="Sex" select style={{margin:"5px"}}> 
                    <MenuItem key="1" value="female">female</MenuItem>
                    <MenuItem key="2" value="other">other</MenuItem>
                    <MenuItem key="3" value="male">male</MenuItem>
                     </TextField>
                    <TextField id="age" type="number" variant="outlined" label="Age" type="number" style={{margin:"5px"}}></TextField>
                    <TextField id="date_of_birth" variant="outlined" label="Year of Birth" style={{margin:"5px"}}></TextField>
                    <TextField
          id="standard-select-currency"
          select
          label="Select"


          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
              </div>
          </div>
          <div style={{gridColumn:"5/6", display:"grid",padding:"0 1rem 1rem 0"}}>
              <p style={{fontSize:"24px",fontWeight:"bold"}}>Today</p>
              <p style={{fontWeight:"bold"}}>{this.getDate()}</p>
              <TextField variant="outlined" label="Serial No."></TextField>
          </div>
      </div>
    );
  }
}

export default PatientInfo;
