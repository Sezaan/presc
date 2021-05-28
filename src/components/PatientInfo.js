import React, { Component } from "react";
import style from "../style.module.css";
import TextField from "@material-ui/core/TextField";
import { Flare } from "@material-ui/icons";

class PatientInfo extends Component {
  state = {};
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
                  <TextField variant="outlined" label="Patient Name" style={{margin:"5px"}}></TextField>
                  <TextField variant="outlined" label="Patient ID" style={{margin:"5px"}}></TextField>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"25% 25% 25% 25%",marginTop:"0.5rem"}}>
                    <TextField variant="outlined" label="Contact Number" style={{margin:"5px"}}></TextField>
                    <TextField variant="outlined" label="Sex" style={{margin:"5px"}}></TextField>
                    <TextField variant="outlined" label="Age" style={{margin:"5px"}}></TextField>
                    <TextField variant="outlined" label="Year of Birth" style={{margin:"5px"}}></TextField>
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
