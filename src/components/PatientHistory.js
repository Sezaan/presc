import React, { Component } from "react";
import PatientList from "./PatientList";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TextField } from "@material-ui/core";

function PatientHistory(props) {
  return (
    <div
      style={{ background: "#FFFFFF", marginLeft: "3rem", marginRight: "3rem" }}
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
        <div>
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
              variant="outlined"
              label="Search For a Prescription"
              style={{ width: "660px" }}
            ></TextField>
            <TextField
              variant="outlined"
              label="Select Date"
              style={{ width: "220px" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <TextField
              variant="outlined"
              label="Contact Number"
              value="0324230423"
              style={{ width: "220px" }}
            />
            <TextField
              variant="outlined"
              label="Sex"
              value="male"
              style={{ width: "220px" }}
            />
            <TextField
              variant="outlined"
              label="Age"
              value="31 y"
              style={{ width: "220px" }}
            />
            <TextField
              variant="outlined"
              label="Year of Birth"
              value="1990"
              style={{ width: "220px" }}
            />
          </div>
        </div>
      </div>
      <p style={{ marginLeft: "2rem" }}>Last Visit: March 21, 2020</p>
      <PatientList />
      <PatientList />
      <PatientList />
    </div>
  );
}

export default PatientHistory;
