import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import PatientBlock from "./PatientBlock";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import InputAdornment from "@material-ui/core/InputAdornment";

class PatientSearch extends Component {
  state = {};
  render() {
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
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <TextField
                variant="outlined"
                label="Search For a Prescription"
                style={{ width: "700px" }}
              ></TextField>
              <TextField
                variant="outlined"
                label="Select Date"
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
            gap:"1rem",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          }}
        >
          <PatientBlock />
          <PatientBlock />
          <PatientBlock />
          <PatientBlock />
          <PatientBlock />
          <PatientBlock />
          <PatientBlock />
        </div>
      </div>
    );
  }
}

export default PatientSearch;
