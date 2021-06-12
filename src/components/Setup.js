import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import InputAdornment from "@material-ui/core/InputAdornment";

function Setup(props) {
  return (
    <div
      style={{
        padding: "2rem",
        boxShadow: "0px 0px 10px rgba(187, 187, 187, 0.25)",
        boxSizing: "border-box",
        borderRadius: "8px",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Page Setup</p>
        <Button variant="outlined">Prescription Preview</Button>
      </div>
      <br />
      <br />
      <div>
        <p style={{ fontWeight: "bold" }}>Header Preview</p>
        <div style={{ background: "#e5e5e5", height: "15rem" }}></div>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Edit&nbsp;Header&nbsp;Setup</p>
        <div>
          <button
            style={{
              width: "10rem",
              height: "3rem",
              transition: "0.3 #e5e5e5",
              margin: "1rem",
              border: "0px",
              background: "white",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              width: "10rem",
              height: "3rem",
              transition: "0.3 #e5e5e5",
              color: "white",
              background: "#e55050",
              border: "0px",
            }}
          >
            Save&nbsp;Header
          </button>
        </div>
      </div>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            rowGap: "1rem",
          }}
        >
          <TextField variant="outlined" label="Display Name"></TextField>
          <TextField
            variant="outlined"
            label="Degree"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AddIcon style={{ cursor: "pointer" }} />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField variant="outlined" label="Hospital/Work"></TextField>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            rowGap: "1rem",
          }}
        >
          <TextField
            variant="outlined"
            label="Chamber&nbsp;Address"
          ></TextField>
          <TextField variant="outlined" label="Chamber&nbsp;Phone"></TextField>
          <TextField variant="outlined" label="Chamber&nbsp;Email"></TextField>
          <TextField
            variant="outlined"
            label="Extra Lines"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AddIcon style={{ cursor: "pointer" }} />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Edit&nbsp;Footer&nbsp;Setup</p>
        <div>
          <button
            style={{
              width: "10rem",
              height: "3rem",
              transition: "0.3 #e5e5e5",
              margin: "1rem",
              border: "0px",
              background: "white",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              width: "10rem",
              height: "3rem",
              transition: "0.3 #e5e5e5",
              color: "white",
              background: "#e55050",
              border: "0px",
            }}
          >
            Save&nbsp;Footer
          </button>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(suto-fit,minmax(500px,1fr))",
        }}
      >
        <TextField variant="outlined" label="Footer Text"></TextField>
      </div>
    </div>
  );
}

export default Setup;
