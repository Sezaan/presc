import React, { Component } from "react";
import ListItem from "./ListItem";
import style from "../style.module.css";
import TextField from "@material-ui/core/TextField";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MedicineList from "./MedicineList";

class Treatment extends Component {
  state = {
    value: [
      {
        medicine: "Napa",
        dosage: "1+0+1",
        duration: "15days",
        direction: "After Meal",
        additionalComments: "Good work",
      },
	 {
		medicine: "Ace",
		dosage: "1+0+1",
		duration: "15days",
		direction: "After Meal",
		additionalComments: "Good work",
	   },
	   
    ],
  };
  render() {
    return (
      <div>
        <div className={style.containerTreatment}>
          <div className={style.box1}>
            <span className={style.header}>Medicine History</span>
            <InfoOutlinedIcon
              fontSize="small"
              style={{ color: "#aaaaaa" }}
            ></InfoOutlinedIcon>
            <span style={{ width: "280px" }}></span>
            <span className={style.template}>Load templates</span>
          </div>
          <div style={{ marginTop: "18px" }}>
            <TextField
              label="Medicine Name"
              variant="outlined"
              style={{ width: "583px" }}
            />
            <div
              style={{
                width: "583px",
                display: "flex",
                justifyContent: "space-between",
                marginTop: "18px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Dosage"
                variant="outlined"
                style={{ width: "285px" }}
              />
              <TextField
                id="outlined-basic"
                label="Duration"
                variant="outlined"
                style={{ width: "285px" }}
              />
            </div>
            <TextField
              label="Direction"
              variant="outlined"
              style={{ width: "583px", marginTop: "18px" }}
            />
            <TextField
              label="Additional Comments"
              variant="outlined"
              style={{ width: "583px", marginTop: "18px" }}
            />
            <button
              style={{
                background: "#444444",
                width: "583px",
                height: "40px",
                borderRadius: "4px",
                display: "flex",
                marginTop: "18px",
                alignContent: "center",
              }}
            >
              <AddIcon style={{ color: "#ffffff", marginTop: "6px" }}></AddIcon>
              <span
                style={{
                  color: "#ffffff",
                  fontWeight: "700",
                  fontSize: "14px",
                  marginLeft: "200px",
                  marginTop: "8px",
                }}
              >
                Add To Prescription
              </span>
            </button>
          </div>
          <div style={{ marginTop: "40px" }}>
            <div className={style.box1}>
              <span className={style.header}>Added Medicines</span>
              <InfoOutlinedIcon
                fontSize="small"
                style={{ color: "#aaaaaa" }}
              ></InfoOutlinedIcon>
              <span style={{ width: "200px" }}></span>
            </div>
            <div style={{ marginTop: "18px" }}>
              {this.state.value.map((item) => (
                <MedicineList
                  key={item.id}
                  medicine={item.medicine}
                  duration={item.duration}
                  dosage={item.dosage}
                  direction={item.direction}
                  additionalComments={item.additionalComments}
                ></MedicineList>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Treatment;
