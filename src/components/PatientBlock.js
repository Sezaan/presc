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
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>{props.name}</p>
        <p>{props.gender} {props.age} y({props.DOB})</p>
        <p>Phone: {props.phone}</p>
        <p>ID:{props.short_id}</p>
        <p>Last Visit: {props.last_visit}</p>
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
