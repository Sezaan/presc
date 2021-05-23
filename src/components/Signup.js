import { TextField } from "@material-ui/core";
import React, { Component } from "react";
import style from "../style.module.css";

class Signup extends Component {
  state = {};
  render() {
    return (
      <div className={style.loginContainer}>
        <div className={style.loginBox1}>
          <span className={style.loginText1}>Signup</span>
          <TextField
            variant="outlined"
            label="Full Name"
            size="small"
            style={{ width: "28rem", marginTop: "3.375rem" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Mobile"
            size="small"
            style={{ width: "28rem", marginTop: "2.69rem" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Email Address"
            size="small"
            style={{ width: "28rem", marginTop: "2.69rem" }}
          ></TextField>
          <TextField
            variant="outlined"
            label="Password"
            size="small"
            style={{ width: "28rem", marginTop: "2.69rem" }}
          ></TextField>
          <button className={style.loginButton1}>Create an Account</button>
          <span  className={style.loginText2}>

          </span>
        </div>
        <div className={style.loginBox2}>
          <span className={style.loginText3}>Have an Account?</span>
          <button className={style.loginButton2}>Login</button>
        </div>
      </div>
    );
  }
}

export default Signup;
