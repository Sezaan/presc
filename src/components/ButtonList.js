import { Flare } from "@material-ui/icons";
import React, { Component, } from "react";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/AddOutlined";
import { Link, useHistory } from "react-router-dom";

function Buttonlist(props){

    const history = useHistory()
  
    return (
      <div>
        <div
          style={{ display: "flex",flexWrap:"wrap", justifyContent: "center", margin: "1rem" }}
        >
          <Button
            id="create"
            variant="contained"
            color="secondary"
            startIcon={<Add />}
            style={{ borderRadius: "0", width: "10rem", margin: "0.4rem" }}
            size="medium"
            onClick={()=> {
              history.push('/prescription')
            }}
          >
            Create
          </Button>
          <Button
            id="archive"
            variant="outlined"
            style={{
              border: "1px solid #E55050",
              borderRadius: "0",
              width: "10rem",
              margin: "0.4rem",
            }}
            size="medium"
            onClick={()=> {
              history.push('/archive')
            }}
          >
            <span style={{ color: "#E55050" }}>Archive</span>
          </Button>
          <Button
            id="patient"
            variant="outlined"
            style={{
              border: "1px solid #E55050",
              borderRadius: "0",
              width: "10rem",
              margin: "0.4rem",
            }}
            size="medium"
            onClick={()=> {
              history.push('/patient')
            }}
          >
            <span style={{ color: "#E55050" }}>Patients</span>
          </Button>
          <Button
            id="page-setup"
            variant="outlined"
            style={{
              border: "1px solid #E55050",
              borderRadius: "0",
              width: "10rem",
              margin: "0.4rem",
            }}
            size="medium"
            onClick={()=> {
              history.push('/editheader')
            }}
          >
            <span style={{ color: "#E55050" }}>Page Setup</span>
          </Button>
          <Button
            id="templates"
            variant="outlined"
            style={{
              border: "1px solid #E55050",
              borderRadius: "0",
              width: "10rem",
              margin: "0.4rem",
            }}
            size="medium"
            onClick={()=> {
              history.push('/template')
            }}
          >
            <span style={{ color: "#E55050" }}>Templates</span>
          </Button>
          <Button
            id="profile"
            variant="outlined"
            style={{
              border: "1px solid #E55050",
              borderRadius: "0",
              width: "10rem",
              margin: "0.4rem",
            }}
            size="medium"
            onClick={()=> {
              history.push('/profile')
            }}
          >
            <span style={{ color: "#E55050" }}>Profile</span>
          </Button>
        </div>
      </div>
    );
  }


export default Buttonlist;
