import { TextField } from "@material-ui/core";
import React, { Component } from "react";
import PreviewContext from "../context/PreviewContext";

class Preview extends Component {
  render() {
    let {value,setValue} = this.context;
    {console.log(value)}
    return (
      <div style={{ width: "1240px", height: "1754px", position: "relative",margin:"auto" }}>
        <div
          style={{
            padding: "0.5rem 1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            background: "#F7F7F7",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Doctor's Name
            </span>
            <br/>
            <br/>
            <span>Doctor's info line 1</span>
            <br/>
            <span>Doctor's info line 2</span>
          </div>
          <div>
            <p>LOGO</p>
          </div>
        </div>
        <div style={{ padding: "1rem 0rem", background: "#F7F7F7" }}>
          <hr />
          <div style={{ display: "flex", padding: "1rem" }}>
            <span>Patient's Name: </span>{" "}
            <TextField
              value="Shamim"
              style={{
                width: "auto",
                marginLeft: "1rem",
                justifySelf: "stretch",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <div>
              <span style={{ marginRight: "1rem" }}>Sex: </span>{" "}
              <TextField value="Male" />
            </div>
            <div>
              <span style={{ marginRight: "1rem" }}>Age(years): </span>{" "}
              <TextField value="25" />
            </div>
            <div>
              <span style={{ marginRight: "1rem" }}>Weight(kg): </span>{" "}
              <TextField value="92" />
            </div>
            <div>
              <span style={{ marginRight: "1rem" }}>Date: </span>{" "}
              <TextField value="16th may, 2021" />
            </div>
          </div>
        </div>
        

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 4fr",
            marginBottom: "0px",
            borderTop: "0.3px solid #ABABAB",
            borderBottom: "0.3px solid #ABABAB",
            height:"1425px"
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column",placeItems:"start",padding:"0 2rem"}}
          >
            <div style={{marginTop:"6rem"}}>
                <p style={{fontWeight:"bold",fontSize:"20px"}}>Dignosis</p>
                <ul>
                {value.diagnosis.map(
                    listItem => <li><span>{listItem.item}</span></li>
                )}
                </ul>
            </div>

            <div style={{marginTop:"0rem"}}>
                <p style={{fontWeight:"bold",fontSize:"20px"}}>Chief Complaints (C/C)</p>
                <ul>
                {value.complaints.map(
                    listItem => <li><span>{listItem.item}</span></li>
                )}
                </ul>
            </div>

            <div style={{marginTop:"0rem"}}>
                <p style={{fontWeight:"bold",fontSize:"20px"}}>On Examination (O/E)</p>
                <ul>
                {value.tests.map(
                    listItem => <li><span>{listItem.item}</span></li>
                )}
                </ul>
            </div>

            <div style={{marginTop:"0rem"}}>
                <p style={{fontWeight:"bold",fontSize:"20px"}}>Previous Investigations</p>
                <ul>
                {value.tests.map(
                    listItem => <li><span>{listItem.item}</span></li>
                )}
                </ul>
            </div>

            <div style={{marginTop:"0 rem"}}>
                <p style={{fontWeight:"bold",fontSize:"20px"}}>Advice Investigations</p>
                <ul>
                {value.tests.map(
                    listItem => <li><span>{listItem.item}</span></li>
                )}
                </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              placeItems:"start",
              padding:"2rem",
              borderLeft: "0.3px solid #ABABAB",
            }}
          >
            <div style={{marginTop:"0",placeItems:"start"}}>
                <p style={{fontFamily:"sans-serif",fontWeight:"bold",fontSize:"20px"}}>Rx</p>
            </div>
            <div style={{marginTop:"0rem"}}>
                <p style={{fontWeight:"bold",fontSize:"20px"}}>Treatment</p>
                <ul>
                {value.treatments.map(
                    listItem => 
                    <li style={{marginBottom:"2rem"}}>
                      <div>
                        <p>{listItem.medicine}</p>
                        <div style={{marginBottom:"10px"}}>
                          <span>{listItem.dosage}&emsp;</span>
                          <span>{listItem.duration}&emsp;</span>
                          <span>{listItem.direction}&emsp;</span>
                        </div>
                        <p>{listItem.additionalComments}</p>
                      </div>
                    </li>
                )}
                </ul>
            </div>

            <div style={{marginTop:"0rem"}}>
                <p style={{fontWeight:"bold",fontSize:"20px"}}>Advice for Treatment</p>
                <ul>
                {value.advices.map(
                    listItem => <li><span>{listItem.item}</span></li>
                )}
                </ul>
            </div>

          </div>
        </div>

        <div
          style={{
            position:"absolute",
            bottom:"0px",
            background: "#F7F7F7",
            marginTop: "0px",
            height: "50px",
            width:"inherit"
          }}
        >
          <p style={{textAlign:"center"}}>
            This prescription was generated in an appointment with the
            respective doctor in www.sobardaktar.com
            <br />
            Sobar Daktar 2021 © all rights reserved
          </p>
        </div>
      </div>
    );
  }
}

Preview.contextType = PreviewContext;

export default Preview;
