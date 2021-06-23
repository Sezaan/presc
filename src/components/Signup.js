import { TextField } from "@material-ui/core";
import React, { Component, useState } from "react";
import style from "../style.module.css";
import { Modal } from "semantic-ui-react";
import { useHistory } from "react-router";

function Signup(props) {
  const [openModal, setOpenModal] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);
  const history = useHistory();

  function handleCreateAccount() {
    // reading the elements from the text fields
    const username = document.getElementById("username").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //sending post request to the server
    //check the post format carefully

    fetch("https://calm-plains-47385.herokuapp.com/doctor/doctor_signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        phone: mobile,
        email: email,
        password: password,
      }),
    })
      .then((responseFromServer) => responseFromServer.json())
      .then((result) => {
        //checking if the post is successful
        if (result.token) {
          console.log(result.token);
          fetch('https://calm-plains-47385.herokuapp.com/doctor/edit_profile',
          {
            method:"PUT",
            headers:{
              'prescription-generator' : `${result.token}`,
              'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
              name : username,
              phone : mobile,
              header : {
                name: '',
                address:'',
                phone:'',
                work:'',
                email:'',
                degree:[],
                lines:[]
              },
            })
          }
          ).then(response => response.json()).then(result => console.log(result))
          history.push('/')
        } else {
          setResponseMsg(result.msg);
          setOpenModal(true);
        }
      });
  }

  return (
    <div className={style.loginContainer}>
      <div className={style.loginBox1}>
        <span className={style.loginText1}>Signup</span>
        <TextField
          id="username"
          variant="outlined"
          label="Full Name"
          size="small"
          style={{ width: "26rem", marginTop: "3.375rem" }}
        ></TextField>
        <TextField
          id="mobile"
          variant="outlined"
          label="Mobile"
          size="small"
          style={{ width: "26rem", marginTop: "2.69rem" }}
        ></TextField>
        <TextField
          id="email"
          variant="outlined"
          label="Email Address"
          size="small"
          style={{ width: "26rem", marginTop: "2.69rem" }}
        ></TextField>
        <TextField
          id="password"
          variant="outlined"
          label="Password"
          type="password"
          size="small"
          style={{ width: "26rem", marginTop: "2.69rem" }}
        ></TextField>
        <button className={style.loginButton1} onClick={handleCreateAccount}>
          Create an Account
        </button>
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
        <span className={style.loginText2}></span>
      </div>
      <div className={style.loginBox2}>
        <span className={style.loginText3}>Have an Account?</span>
        <button
          className={style.loginButton2}
          onClick={() => history.push("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Signup;
