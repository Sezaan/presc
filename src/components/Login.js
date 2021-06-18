import { TextField } from "@material-ui/core";
import React, { Component, useState, } from "react";
import {useHistory } from "react-router";
import style from "../style.module.css";
import {Modal} from 'semantic-ui-react'

function Login(props) {
  const [openModal, setOpenModal] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);
  const history = useHistory();

  // checking for login credential
  function handleLogin() {
    // gettng values from textfields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password)

    // sending post request
    fetch("https://calm-plains-47385.herokuapp.com/doctor/doctor_signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((responseFromServer) => responseFromServer.json())
      .then((result) => {
        // checking if login was successful
        console.log(result)
        if (result.token) {
          console.log(result.token);
          localStorage.setItem("auth_token", result.token);
          localStorage.setItem('login',true)
          history.push("/profile");
        }
        else{
          setResponseMsg(result.msg)
          setOpenModal(true)
        }
      });
  }

  return (
    <div className={style.loginContainer}>
      <div className={style.loginBox1}>
        <span className={style.loginText1}>LOGIN</span>
        <TextField
          id="email"
          variant="outlined"
          label="Email Address"
          size="small"
          style={{ width: "26rem", marginTop: "3.375rem" }}
        ></TextField>
        <TextField
          id="password"
          variant="outlined"
          label="Password"
          type="password"
          size="small"
          style={{ width: "26rem", marginTop: "2.69rem" }}
        ></TextField>
        <button className={style.loginButton1} onClick={handleLogin}>
          Login
        </button>
        <a href="/forgotpass" className={style.loginText2}>
          Forgot Password?
        </a>
      </div>
      <Modal
        closeIcon
        onOpen={() => setOpenModal(true)}
        onClose={() => setOpenModal(false)}
        open={openModal}
        size="small"
      >
        <Modal.Header>There has been an error</Modal.Header>
        <Modal.Description>
          <div
            style={{
              margin: "auto",
              fontSize: "20px",
              fontWeight: "bolder",
              height: "100px",
              color: "red",
              padding: "2rem",
            }}
          >
            {responseMsg}
          </div>
        </Modal.Description>
      </Modal>
      <div className={style.loginBox2}>
        <span className={style.loginText3}>Don't Have an Account?</span>
        <button
          className={style.loginButton2}
          onClick={() => history.push("/signup")}
        >
          Signup for FREE
        </button>
      </div>
    </div>
  );
}

export default Login;
