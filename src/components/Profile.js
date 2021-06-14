import React, { Component } from "react";
import { Button } from "@material-ui/core";
import style from "../style.module.css";

function Profile(pros) {
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
      <p style={{fontWeight:"bold",fontSize:"26px"}}> Profile</p>
      <br />
      <span style={{fontWeight:"bold",fontSize:"26px"}}>Hi, Dr. Rajesh Kuthrapali </span>
      <Button style={{marginLeft:"2rem",borderRadius:"20px", border:"1px solid red", backgroundColor:"#F9EAEA",color:"red"}}>verify email</Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <span style={{fontWeight:"bold",fontSize:"16px"}}>Basic Information</span>
      <Button variant="outlined" style={{marginLeft:"3.5rem"}}>Edit Profile</Button>
      <hr />
      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))",
          justifyContent: "flex-start",
        }}
      >
        <table style={{ textAlign: "start", width:"800px" }}>
          <tr>
            <td>
              <span>Full Name</span>
            </td>
            <td>
              <span>Rajesh Kuthrapali</span>
            </td>
          </tr>
          <br/>
          <tr>
            <td>
              <span>Email Addrss</span>
            </td>
            <td>
              <span>contact@gmail.com</span>
            </td>
          </tr>
          <br/>
          <tr>
            <td>
              <span>Phone Number</span>
            </td>
            <td>
              <span>01535678988</span>
            </td>
          </tr>
          <br/>
          <tr>
            <td>
              <span>Subscription Type</span>
            </td>
            <td>
              <span>free trial</span>
              <Button style={{marginLeft:"2rem",borderRadius:"20px", border:"1px solid red", backgroundColor:"#E55050",color:"white"}}>Upgrad to primium</Button>
            </td>
          </tr>
          <br/>
          <tr>
            <td>
              <span> Expriry On</span>
            </td>
            <td>
              <span>30th June,2021</span>
            </td>
          </tr>
          <br/>
          <tr>
            <td>
              <span>Prescription Limit</span>
            </td>
            <td>
              <span>977/1000 used</span>
            </td>
          </tr>
        </table>
        <div></div>
      </div>
      <br />
      <span style={{fontWeight:"bold",fontSize:"16px"}}>Prescription Header</span>
      <Button variant="outlined" style={{marginLeft:"2rem"}}>Edit Page Setup</Button>
      <hr />
      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))",
          justifyContent: "flex-start",
        }}
      >
        <table style={{ textAlign: "start", width:"690px"}}>
          <tr>
            <td>
              <span>Prescription Name</span>
            </td>
            <td>
              <span>Rajesh Kuthrapali</span>
            </td>
          </tr>
          <br/>
          <tr>
            <td>
              <span>Degree</span>
            </td>
            <td>
              <span>Degree Name</span>
              <br />
              <span>Degree Name</span>
              <br />
              <span>Degree Name</span>
              <br />
            </td>
          </tr>
          <br/>
          <tr>
            <td>
              <span>Hospital/Workplace</span>
            </td>
            <td>
              <span>Dhaka Medical College Hospital</span>
            </td>
          </tr>
          <br/>
          <tr>
            <td>
              <span>Chamber Address</span>
            </td>
            <td>
              <span>My Addreess</span>
            </td>
          </tr>
          <br/>
          <tr>
            <td>
              <span>Chamber Phone</span>
            </td>
            <td>
              <span>+88012212323</span>
            </td>
          </tr>
          <br/>
          <tr>
            <td>
              <span>Chamber Email</span>
            </td>
            <td>
              <span>contact@gamil.com</span>
            </td>
          </tr>
          <br/>
          <tr>
            <td>
              <span>Extra Lines</span>
            </td>
            <td>
              <span>some text here</span>
              <br />
              <span>some text here</span>
            </td>
          </tr>
        </table>
        <div></div>
      </div>
      <br />
      <span style={{fontWeight:"bold",fontSize:"16px"}}>Prescription Footer</span>
      <hr />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(400px,1fr))",
          justifyContent: "flex-start",
        }}
      >
        <table style={{ textAlign: "start", width:"800px" }}>
          <tr>
            <td>
              <span> Footer Text</span>
            </td>
            <td>
              <span>One line text for footer </span>
            </td>
          </tr>
        </table>
        <div></div>
      </div>
    </div>
  );
}

export default Profile;
