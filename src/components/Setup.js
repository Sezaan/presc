import React, { Component, useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InputAdornment from "@material-ui/core/InputAdornment";
import ListItem from "./ListItem";
import { Item } from "semantic-ui-react";

function Setup(props) {
  const [header, setHeader] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [degreeCounter, setDegreeCounter] = useState(0);
  const [lines, setLines] = useState([]);
  const [lineCounter, setLineCounter] = useState(0);

  // fetch information from server at the time start
  useEffect(() => {
    fetch("https://calm-plains-47385.herokuapp.com/doctor", {
      headers: {
        "prescription-generator": `${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (!result.success) {
          setHeader(result);
        }
      });
  }, false);

  // send update header request
  function updateHeader() {
    const name = document.getElementById("name");
    const work = document.getElementById("work");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const phone = document.getElementById("phone");
    let headerInput = {};

    if (name.value !== "") {
      headerInput["name"] = name.value;
    }
    if (work.value !== "") {
      headerInput["work"] = work.value;
    }
    if (email.value !== "") {
      headerInput["email"] = email.value;
    }
    if (address.value !== "") {
      headerInput["address"] = address.value;
    }
    if (phone.value !== "") {
      headerInput["phone"] = phone.value;
    }

    headerInput["degrees"] = degrees;

    headerInput["lines"] = lines;

    console.log("this is header input",headerInput);

    fetch("https://calm-plains-47385.herokuapp.com/doctor/edit_profile", {
      method: "PUT",
      headers: {
        "prescription-generator": `${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: header.name,
        phone: header.phone,
        header: headerInput,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  }

  // send update footer request to server
  function updateFooter() {
    const footer = document.getElementById("footer");
    console.log(footer.value);
    if (footer.value) {
      fetch("https://calm-plains-47385.herokuapp.com/doctor/edit_profile", {
        method: "PUT",
        headers: {
          "prescription-generator": `${localStorage.getItem("auth_token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: header.name,
          phone: header.phone,
          footer: footer.value,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        });
    }
  }

  //add new degree
  function handleAddIconForDegree() {
    const degree = document.getElementById("degree");
    if (degree.value !== "") {
      let values = degrees;
      values.push({ id: degreeCounter, value: degree.value });
      setDegrees(values);
      setDegreeCounter(degreeCounter + 1);
      degree.value = "";
    }
  }

  //add new degree on Enter

  function addDegreeOnEnter(event) {
    console.log(event);
    if (event.code === "Enter") {
      handleAddIconForDegree();
    }
  }

  //add new line
  function handleAddIconForLine() {
    const extra = document.getElementById("extra");
    if (extra.value !== "") {
      let values = lines;
      values.push({ id: lineCounter, value: extra.value });
      setLines(values);
      setLineCounter(lineCounter + 1);
      extra.value = "";
    }
  }

  //add new line on Enter

  function addLineOnEnter(event) {
    console.log(event);
    if (event.code === "Enter") {
      handleAddIconForLine();
    }
  }

  //remove degree
  function handleCrossDegrees(id) {
    let values = degrees.filter((item) => item.id !== id);
    setDegrees(values);
  }

  //remove Llnes
  function handleCrossLines(id) {
    let values = lines.filter((item) => item.id !== id);
    setLines(values);
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>Page Setup</p>
        <Button variant="outlined">Prescription Preview</Button>
      </div>
      <br />
      <br />
      <div>
        <p style={{ fontWeight: "bold" }}>Header Preview</p>
        <div style={{ background: "#e5e5e5", height: "15rem" }}></div>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Edit&nbsp;Header&nbsp;Setup</p>
        <div>
          <button
            style={{
              width: "10rem",
              height: "3rem",
              transition: "0.3 #e5e5e5",
              margin: "1rem",
              border: "0px",
              background: "white",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              width: "10rem",
              height: "3rem",
              transition: "0.3 #e5e5e5",
              color: "white",
              background: "#e55050",
              border: "0px",
            }}
            onClick={updateHeader}
          >
            Save&nbsp;Header
          </button>
        </div>
      </div>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            rowGap: "1rem",
          }}
        >
          <TextField
            id="name"
            variant="outlined"
            label="Display Name"
          ></TextField>
          {degrees.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              item={item.value}
              onCrossClicked={handleCrossDegrees}
            />
          ))}
          <TextField
            id="degree"
            variant="outlined"
            label="Degree"
            onKeyDown={addDegreeOnEnter}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AddIcon
                    style={{ cursor: "pointer" }}
                    onClick={handleAddIconForDegree}
                  />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            id="work"
            variant="outlined"
            label="Hospital/Work"
          ></TextField>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            rowGap: "1rem",
          }}
        >
          <TextField
            id="address"
            variant="outlined"
            label="Chamber&nbsp;Address"
          ></TextField>
          <TextField
            id="phone"
            variant="outlined"
            label="Chamber&nbsp;Phone"
          ></TextField>
          <TextField
            id="email"
            variant="outlined"
            label="Chamber&nbsp;Email"
          ></TextField>
          {lines.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              item={item.value}
              onCrossClicked={handleCrossLines}
            />
          ))}
          <TextField
            id="extra"
            variant="outlined"
            label="Extra Lines"
            onKeyDown={addLineOnEnter}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AddIcon
                    style={{ cursor: "pointer" }}
                    onClick={handleAddIconForLine}
                  />
                </InputAdornment>
              ),
            }}
          ></TextField>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontWeight: "bold" }}>Edit&nbsp;Footer&nbsp;Setup</p>
        <div>
          <button
            style={{
              width: "10rem",
              height: "3rem",
              transition: "0.3 #e5e5e5",
              margin: "1rem",
              border: "0px",
              background: "white",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              width: "10rem",
              height: "3rem",
              transition: "0.3 #e5e5e5",
              color: "white",
              background: "#e55050",
              border: "0px",
            }}
            onClick={updateFooter}
          >
            Save&nbsp;Footer
          </button>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(suto-fit,minmax(500px,1fr))",
        }}
      >
        <TextField
          id="footer"
          variant="outlined"
          label="Footer Text"
        ></TextField>
      </div>
    </div>
  );
}

export default Setup;
