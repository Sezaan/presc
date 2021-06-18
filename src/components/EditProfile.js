import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import style from "../style.module.css";
import { Link, useHistory } from "react-router-dom";
import { Router } from "@material-ui/icons";
import { useState } from "react";

function EditProfile(props) {

  const history = useHistory()
  const [message,setMessage] = useState('')

  function saveProfile(){
    //get values from text fields
    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value

    fetch("https://calm-plains-47385.herokuapp.com/doctor/edit_profile",{
      method:"PUT",
      headers: {
        "prescription-generator": `${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        name:name,
        phone:phone,
      })}).then(response => response.json())
      .then(result => {
        console.log(result)
      })
    
    console.log(name,phone,)
  }

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
        <TextField id="name" variant="outlined" label="Full Name"></TextField>

        <TextField id='phone' variant="outlined" label="Phone"></TextField>
        <p>{message}</p>
        
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
            <a href="/changepass">Change Password</a>
          </p>
          <p>
            <a href="/forgotpass">Forgot Password</a>
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
        <button className={style.loginButton3} onClick={()=>{history.push('/profile')}}>Cancel</button>
        <button className={style.loginButton4} onClick={saveProfile}>Save Profile</button>
      </div>
    </div>
  );
}

export default EditProfile;
