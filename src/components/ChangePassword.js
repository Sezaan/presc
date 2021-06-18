import React, { Component, useState } from "react";
import { TextField } from "@material-ui/core";
import style from "../style.module.css";
import { Link, useHistory } from "react-router-dom";
import { Router } from "@material-ui/icons";

function ChangePassword(props) {

  const history = useHistory()
  const [message,setMessage] = useState('')

  function savePassword(){
    //get values from text fields
    const currentPassword = document.getElementById('current-password').value
    const newPassword = document.getElementById('new-password').value
    const confirmPassword = document.getElementById('confirm-password').value
    
    //check if new passwords are equal
    if(newPassword !== confirmPassword || newPassword.length === 0){
        setMessage('Passwords did not match!, Please try again',)
    }
    else{
        // update new information to server
        fetch('https://calm-plains-47385.herokuapp.com/doctor/change_password',{
            method:"PUT",
            headers: {
              "prescription-generator": `${localStorage.getItem("auth_token")}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: currentPassword,
                new_password: newPassword
              }),
          }).then(response => response.json())
          .then(result => {
              console.log(result)
              result.success? setMessage('Passwords changed successfully') : setMessage('Password is not correct, Please try again')
          })
    }

    console.log(currentPassword,newPassword,confirmPassword)
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
          Change&nbsp;Password
        </p>
        <br />
        <br />
        <TextField id="current-password" type="password" variant="outlined" label="Current Password"></TextField>
        <TextField id='new-password' type="password" variant="outlined" label="New Password"></TextField>
        <TextField id='confirm-password' type="password" variant="outlined" label="Confirm Password"></TextField>
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
        <button className={style.loginButton4} onClick={savePassword}>Save Password</button>
      </div>
    </div>
  );
}

export default ChangePassword;
