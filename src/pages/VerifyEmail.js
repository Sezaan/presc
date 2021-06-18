import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function VerifyEmail() {
  const path = useLocation();

  const [message,setmessage] = useState("Not Yet Verified")

  useEffect(() => {
    console.log(path);
    const token = new URLSearchParams(path.search).get('token');

    fetch("https://calm-plains-47385.herokuapp.com/doctor/verify_email", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if(result.success){
            localStorage.setItem('isVerified',true)
            setmessage("Email Verified, Feel free to close the tab.")
        }
        else{
            setmessage(result.msg)
        }
      });
  },path);

  return <div>{message}</div>;
}

export default VerifyEmail;
