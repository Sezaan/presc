import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import style from "../style.module.css";
import { flushSync } from "react-dom";

class ArchiveSearch extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          boxShadow: "0px 0px 10px rgba(187,187,187,0.25)",
          width: "fit-content",
          display:'flex',
          flexDirection:"column",
          background:"#FFFFFF",
          borderRadius:"2px"
        }}
      >
        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            marginLeft: "1.5rem",
            marginTop: "1rem",
          }}
        >
          Prescription Archive
        </span>
        <div
          style={{
            marginLeft: "1.5rem",
            marginRight: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          <TextField
            variant="outlined"
            label="Search for a Prescription"
            size="medium"
            style={{ width: "55rem" }}
          ></TextField>
          <TextField
            type="date"
            variant="outlined"
            label="Date"
            size="medium"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginLeft: "1rem" }}
          ></TextField>
        </div>
      </div>
    );
  }
}

export default ArchiveSearch;
