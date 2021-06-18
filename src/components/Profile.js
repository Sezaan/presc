import React, { Component, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import style from "../style.module.css";
import { useHistory, useParams } from "react-router-dom";

function Profile(pros) {
  const [profileInfo, setProfileInfo] = useState({});
  const [header, setHeader] = useState({ });
  const [degree, setDegree] = useState([]);
  const [lines, setLines] = useState([]);
  const history = useHistory();
  // getting profile information
  useEffect(() => {
    fetch("https://calm-plains-47385.herokuapp.com/doctor", {
      headers: {
        "prescription-generator": `${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((respone) => respone.json())
      .then((result) => {

        
        setProfileInfo(result);

        setHeader(result.header);
        if(result.header.degrees)
        setDegree(result.header.degrees);
        if(result.header.lines)
        setLines(result.header.lines);

        localStorage.setItem("email", result.email);
      });
  });

  //sending verify email
  function handleVerify() {
    fetch("https://calm-plains-47385.herokuapp.com/doctor/verification_email", {
      headers: {
        "prescription-generator": `${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((respone) => respone.json())
      .then((result) => console.log(result));

    console.log(localStorage.getItem("auth_token"));
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
      <p style={{ fontWeight: "bold", fontSize: "26px" }}>Profile</p>
      <br />
      <span style={{ fontWeight: "bold", fontSize: "26px" }}>
        {profileInfo.name}
      </span>
      {profileInfo.verified ? (
        <Button
          disabled
          style={{
            marginLeft: "2rem",
            borderRadius: "20px",
            border: "1px solid green",
            backgroundColor: "#8FDE1F",
            color: "green",
          }}
          onClick={handleVerify}
        >
          verified
        </Button>
      ) : (
        <Button
          style={{
            marginLeft: "2rem",
            borderRadius: "20px",
            border: "1px solid red",
            backgroundColor: "#F9EAEA",
            color: "red",
          }}
          onClick={handleVerify}
        >
          verify email
        </Button>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
      <span style={{ fontWeight: "bold", fontSize: "16px" }}>
        Basic Information
      </span>
      <Button
        variant="outlined"
        style={{ marginLeft: "3.5rem" }}
        onClick={() => {
          history.push("./edit_profile");
        }}
      >
        Edit Profile
      </Button>
      <hr />
      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
          justifyContent: "flex-start",
        }}
      >
        <table style={{ textAlign: "start", width: "800px" }}>
          <tbody>
            <tr>
              <td>
                <span>Full Name</span>
              </td>
              <td>
                <span>{profileInfo.name}</span>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <span>Email Address</span>
              </td>
              <td>
                <span>{profileInfo.email}</span>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <span>Phone Number</span>
              </td>
              <td>
                <span>+88{profileInfo.phone}</span>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <span>Subscription Type</span>
              </td>
              <td>
                {profileInfo.subscribed ? (
                  <span>Premium</span>
                ) : (
                  <span>Free Trial</span>
                )}
                <Button
                  style={{
                    marginLeft: "2rem",
                    borderRadius: "20px",
                    border: "1px solid red",
                    backgroundColor: "#E55050",
                    color: "white",
                  }}
                >
                  Upgrad to primium
                </Button>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <span> Expriry On</span>
              </td>
              <td>
                <span>{profileInfo.expire_at}</span>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <span>Prescription Limit</span>
              </td>
              <td>
                <span>{profileInfo.prescription_limit}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div></div>
      </div>
      <br />
      <span style={{ fontWeight: "bold", fontSize: "16px" }}>
        Prescription Header
      </span>
      <Button onClick={() => history.push('/editheader')} variant="outlined" style={{ marginLeft: "2rem" }}>
        Edit Page Setup
      </Button>
      <hr />
      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
          justifyContent: "flex-start",
        }}
      >
        <table style={{ textAlign: "start", width: "690px" }}>
          <tbody>
            <tr>
              <td>
                <span>Prescription Name</span>
              </td>
              <td>
                <span>{header.name}</span>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <span>Degree</span>
              </td>
              <td>{degree.map(item => <p>{item.value}</p>)}</td>
            </tr>
            <br />
            <tr>
              <td>
                <span>Hospital/Workplace</span>
              </td>
              <td>
                <span>{header.work}</span>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <span>Chamber Address</span>
              </td>
              <td>
                <span>{header.address}</span>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <span>Chamber Phone</span>
              </td>
              <td>
                <span>{header.phone}</span>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <span>Chamber Email</span>
              </td>
              <td>
                <span>{header.email}</span>
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <span>Extra Lines</span>
              </td>
              <td>{lines.map(item => <p>{item.value}</p>)}</td>
            </tr>
          </tbody>
        </table>
        <div></div>
      </div>
      <br />
      <span style={{ fontWeight: "bold", fontSize: "16px" }}>
        Prescription Footer
      </span>
      <hr />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
          justifyContent: "flex-start",
        }}
      >
        <table style={{ textAlign: "start", width: "800px" }}>
          <tbody>
            <tr>
              <td>
                <span> Footer Text</span>
              </td>
              <td>
                <span>{profileInfo.footer}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div></div>
      </div>
    </div>
  );
}

export default Profile;
