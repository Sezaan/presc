import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import style from "../style.module.css";
import { Link } from "react-router-dom";
import { Router } from "@material-ui/icons";

function EditProfile(props) {
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
      <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
        <p
          style={{
            alignSelf: "center",
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "4rem",
          }}
        >
          Edit&nbsp;Profile
        </p>
        <br />
        <br />
        <TextField variant="outlined" label="Full Name"></TextField>
        <TextField variant="outlined" label="Email"></TextField>
        <TextField variant="outlined" label="Phone"></TextField>
        <TextField
          variant="outlined"
          label="Confirm Current Password"
        ></TextField>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          textAlign: "end",
        }}
      >
        <div>
          <p>
            <a href="/forgotpass"></a>Change Password
          </p>
          <p>
            <a href="/forgotpass"></a>Forgot Password
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          textAlign: "end",
        }}
      >
        <button className={style.loginButton3}>Cancel</button>
        <button className={style.loginButton4}>Save Profile</button>
      </div>
    </div>
  );
}

export default EditProfile;
