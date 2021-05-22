import React, { Component } from "react";
import ListItem from "./ListItem";
import style from "../style.module.css";
import TextField from "@material-ui/core/TextField";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Button, duration } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import MedicineList from "./MedicineList";

class Treatment extends Component {
  state = {
    medicine: "",
    dosage: "",
    duration: "",
    direction: "",
    additionalComments: "",
    value: [ ],
  };

  handleCross = (item) => {
    var value = this.state.value.filter((value) => value.medicine !== item);
    this.setState({ value });
  };

  handleChange = (event) => {
    var key = event.target.id;
    var value = event.target.value;

    if (key === "medicine") {
      this.setState({ medicine: value });
    } else if (key === "dosage") {
      this.setState({ dosage: value });
    } else if (key === "duration") {
      this.setState({ duration: value });
    } else if (key === "direction") {
      this.setState({ direction: value });
    } else if (key === "additionalComments") {
      this.setState({ additionalComments: value });
    }
    console.log(this.state);
  };

  handleAdd =()=>{
    var values = this.state.value;

    var newMedicine = this.state.medicine;
    var newDosage = this.state.dosage;
    var newDuration = this.state.duration;
    var newDirection = this.state.direction;
    var newAdditionalComments = this.state.additionalComments;

    console.log("newValue is ",newValue);
    if(newMedicine!=="")
        {
            var newValue = {medicine: newMedicine,
            dosage: newDosage,
            duration: newDuration,
            direction: newDirection,
            additionalComments: newAdditionalComments,};
            values.push(newValue);
        }

    this.setState(
        {
            values: values,
        }
    );
  }

  render() {
    return (
      <div>
        <div className={style.containerTreatment}>
          <div className={style.box1}>
            <span className={style.header}>Treatment</span>
            <InfoOutlinedIcon
              fontSize="small"
              style={{ color: "#aaaaaa" }}
            ></InfoOutlinedIcon>
            <span style={{ width: "238px" }}></span>
            <span className={style.template}>Load templates</span>
          </div>
          <div style={{ marginTop: "18px" }}>
            <TextField
              id="medicine"
              label="Medicine Name"
              variant="outlined"
              style={{ width: "450px" }}
              onChange={this.handleChange}
            />
            <div
              style={{
                width: "450px",
                display: "flex",
                justifyContent: "start",
                marginTop: "18px",
              }}
            >
              <TextField
                id="dosage"
                label="Dosage"
                variant="outlined"
                style={{ width: "225px" }}
                onChange={this.handleChange}
              />
              <TextField
                id="duration"
                label="Duration"
                variant="outlined"
                style={{ width: "225px" }}
                onChange={this.handleChange}
              />
            </div>
            <TextField
              id="direction"
              label="Direction"
              variant="outlined"
              style={{ width: "450px", marginTop: "18px" }}
              onChange={this.handleChange}
            />
            <TextField
              id="additionalComments"
              label="Additional Comments"
              variant="outlined"
              style={{ width: "450px", marginTop: "18px" }}
              onChange={this.handleChange}
            />
            <button
              style={{
                background: "#444444",
                width: "450px",
                height: "40px",
                borderRadius: "4px",
                display: "flex",
                marginTop: "18px",
                alignContent: "center",
              }}
              onClick={this.handleAdd}
            >
              <AddIcon style={{ color: "#ffffff", marginTop: "6px" }}></AddIcon>
              <span
                style={{
                  color: "#ffffff",
                  fontWeight: "700",
                  fontSize: "14px",
                  marginLeft: "100px",
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
              <span style={{ width: "100px" }}></span>
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
                  onCrossClicked={this.handleCross}
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
