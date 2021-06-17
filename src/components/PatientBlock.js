import React, { Component } from "react";
import {Button} from '@material-ui/core'
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useHistory } from "react-router";

function PatientBlock(props) {

  const history = useHistory()

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"space-between",
        padding: "2rem",
        boxShadow: "0px 0px 10px rgba(187, 187, 187, 0.25)",
        boxSizing: "border-box",
        borderRadius: "8px",
        background: "#FFFFFF",
      }}
    >
      <div>
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Bruce Wayne</p>
        <p>male 31 y(1990)</p>
        <p>Phone: 01231232211</p>
        <p>ID:96240</p>
        <p>Last Visit: March 21, 2020</p>
      </div>
      <div>
        <Button >
          <MoreHorizIcon onClick={()=> history.push('/patienthistory')} style={{cursor:"pointer"}} />
        </Button>
      </div>
    </div>
  );
  
}
export default PatientBlock;
