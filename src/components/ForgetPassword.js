import { TextField } from "@material-ui/core";
import React, { Component } from "react";
import style from "../style.module.css";

class ForgetPassword extends Component {
  state = {};
  render() {
    return (
      <div className={style.loginContainer}>
        <div className={style.loginBox1}>
          <span className={style.loginText1}>Forgot Password</span>
          <TextField
            variant="outlined"
            label="Email Address"
            size="small"
            style={{ width: "26rem", marginTop: "3.375rem" }}
          ></TextField>
          <button className={style.loginButton1}>Send Reset Email</button>
          <span className={style.loginText4}>
            Check Your Email
            <br />
            Follow The Link to Reset Your Password
          </span>
        </div>
      </div>
    );
  }
}

export default ForgetPassword;
