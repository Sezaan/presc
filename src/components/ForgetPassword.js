import { TextField, useScrollTrigger } from "@material-ui/core";
import React, { Component, useEffect, useState } from "react";
import style from "../style.module.css";

function ForgetPassword() {
  const [open, setOpen] = useState(true);
  const [msg,setMsg] = useState("")

  useEffect(() => {
    
    if (localStorage.getItem("email")) {
      let email = localStorage.getItem("email");
      fetch(
        `https://calm-plains-47385.herokuapp.com/doctor/get_forgot_password_token?email=${email}`,
        {
          method: "GET",
          headers: {
            "prescription-generator": `${localStorage.getItem("auth_token")}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          
          if (result.success === "yes") {
            setMsg("Token Sent,Check your email");
          }
          else{
            setMsg('ahhhhh! please try again')
          }
          
        });
    }
  }, false);

  function handleReset(){
    let email = document.getElementById('email').value
    fetch(
      `https://calm-plains-47385.herokuapp.com/doctor/get_forgot_password_token?email=${email}`,
      {
        method: "GET",
        headers: {
          "prescription-generator": `${localStorage.getItem("auth_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if (result.success === "yes") {
          setMsg("Token Sent,Check your email");
        }
        else{
          setMsg('ahhhhh! please try again')
        }
      });

  }

  return (
    <div className={style.loginContainer}>
      <div className={style.loginBox1}>
        <span className={style.loginText1}>Forgot Password</span>
            <TextField
              id='email'
              variant="outlined"
              label="Email Address"
              size="small"
              style={{ width: "26rem", marginTop: "3.375rem" }}
            ></TextField>
            <button className={style.loginButton1} onClick ={handleReset} >Send Reset Email</button>
        
          
            <span className={style.loginText4}>
              {msg}
              <br />
              Follow The Link to Reset Your Password
            </span>
          
      </div>
    </div>
  );
}

export default ForgetPassword;
