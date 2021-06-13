import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import style from "../style.module.css";
import { flushSync } from "react-dom";
import Template from "./Template";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import InputAdornment from "@material-ui/core/InputAdornment";

class TemplateSearch extends Component {
  state = {};
  render() {
    return (
      <div style={{background:"#FFFFFF",margin:"auto"}}>
        <div
          style={{
            padding: "2rem",
            boxShadow: "0px 0px 10px rgba(187, 187, 187, 0.25)",
            boxSizing: "border-box",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        >
          <div >
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            Template&nbsp;Prescription 
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
                label="Search For a Template"
                style={{width:"700px"}}
              ></TextField>
              <TextField
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
        <div style={{}}>
           <Template />  
        </div>
       
      </div>
    );
  }
}

export default TemplateSearch;
