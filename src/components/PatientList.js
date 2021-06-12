import React, { Component } from "react";
import { Button } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SystemUpdateIcon from "@material-ui/icons/SystemUpdateOutlined";
import DescriptionIcon from "@material-ui/icons/DescriptionOutlined";

function PatientList(props) {
  return (
    <div style={{padding:"2rem",boxShadow:"0px 0px 10px rgba(187, 187, 187, 0.25)",boxSizing:"border-box",borderRadius:"8px",background:"#FFFFFF",marginTop:"2rem"}}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginBottom:"1rem"
        }}
      >
        <div>
          <p style={{fontWeight:"bold",fontSize:"20px"}}>Bruce Wayne</p>
          <p>male 31 y(1990)</p>
          <p>Phone: 01231232211</p>
          <p>ID:96240</p>
        </div>
        <div style={{ textAlign:"right"}}>
          <Button>
            <MoreHorizIcon />
          </Button>
          <br />
          <br />
          <p>Appointment: 5th May,2021</p>
          <p>Pay: 600TK</p>
          <p>Next Visit: 5th May,2021</p>
        </div>
      </div>
      <div style={{padding:"1rem", background:"#E5E5E5",marginBottom:"1rem"}}>
        <p>Diagnosis</p>
        <div>Diagnosis Name 01, Diagnosis Name 02, Diagnosis Name 03</div>
      </div>
      <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-between"}}>
        <span style={{marginLeft:"0px"}}>Serial-01</span>
        <div>
        <Button
          variant="outlined"
          size="medium"
          style={{
            margin: "2px",
            border: "1 solid black",
            borderRadius: "0px",
            width: "8rem",
          }}
          startIcon={<DescriptionIcon />}
        >
          Preview
        </Button>
        <Button
          variant="outlined"
          size="medium"
          style={{
            margin: "2px",
            border: "1 solid black",
            borderRadius: "0px",
            width: "8rem",
          }}
          startIcon={<SystemUpdateIcon />}
        >
          Download
        </Button>
        </div>
      </div>
    </div>
  );
}

export default PatientList;
