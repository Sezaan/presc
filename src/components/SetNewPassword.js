import { TextField } from "@material-ui/core";
import React, { Component } from "react";
import style from "../style.module.css";

class SetNewPassword extends Component {
  state = {};
  render() {
    return (
      <div className={style.loginContainer}>
        <div className={style.loginBox1}>
          <span className={style.loginText1}>Set New Password</span>
          <TextField
            variant="outlined"
            label="Set New Password"
            size="small"
            style={{ width: "26rem", marginTop: "3.375rem" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Retype Password"
            size="small"
            style={{ width: "26rem", marginTop: "2.69rem" }}
          ></TextField>
          <button className={style.loginButton1}>Set New Password</button>
          <span className={style.loginText4}>Never Share Your Password With Anyone!</span>
          
        </div>
          
        
      </div>
    );
  }
}

export default SetNewPassword;
