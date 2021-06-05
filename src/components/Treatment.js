import React, { Component } from "react";
import style from "../style.module.css";
import TextField from "@material-ui/core/TextField";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AddIcon from "@material-ui/icons/Add";
import MedicineList from "./MedicineList";
import Autocomplete from "@material-ui/lab/Autocomplete";

class Treatment extends Component {
  state = {
    counter:1,
    medicine: "",
    dosage: "",
    duration: "",
    direction: "",
    additionalComments: "",
    value: [],
    autocompleteList: [],
  };

  handleKey = (event) => {
    if (event.code === "Enter" && event.target.value !== "") {
      this.handleChange(event);
    }
  };

  handleCross = (id) => {
    var value = this.state.value.filter((value) => value.id !== id);
    this.setState({ value });
  };

  handleChange = (event) => {
    var key = event.target.id;
    var value = event.target.value;

    if (key === "medicine") {
      this.setState({ medicine: value });

      var url = `https://calm-plains-47385.herokuapp.com/medicine/?filter=${value}`;
      console.log(url);
      if (value === "")
        url = "https://calm-plains-47385.herokuapp.com/medicine/";

      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          let medicine = [];
          console.log(result.data);
          result.data.map((item) => {
            let newVal = item.brand_name;
            newVal = { title: newVal };
            medicine.push(newVal);
          });
          this.setState({ autocompleteList: medicine });
        });
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

  handleAdd = () => {
    var values = this.state.value;
    var newId = this.state.counter
    var newMedicine = this.state.medicine;
    var newDosage = this.state.dosage;
    var newDuration = this.state.duration;
    var newDirection = this.state.direction;
    var newAdditionalComments = this.state.additionalComments;

    this.setState({counter: this.state.counter+1})

    document.getElementById("medicine").value = "";
    document.getElementById("dosage").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("direction").value = "";
    document.getElementById("additionalComments").value = "";

    console.log("newValue is ", newValue);
    if (newMedicine !== "") {
      var newValue = {
        id: newId, 
        medicine: newMedicine,
        dosage: newDosage,
        duration: newDuration,
        direction: newDirection,
        additionalComments: newAdditionalComments,
      };
      values.push(newValue);

      this.setState({
        value: values,
      });
      this.props.onChangeTreatments(this.state.value);
    }
  };

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
            <Autocomplete
              id="medicine"
              freeSolo
              options={this.state.autocompleteList}
              getOptionLabel={(option) => option.title}
              style={{ width: 450 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Write Medicine"
                  variant="outlined"
                  onKeyDown={this.handleKey}
                  onChange={this.handleChange}
                  onSelect={this.handleChange}
                />
              )}
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
              {this.props.onChangeTreatments(this.state.value)}
              {this.state.value.map((item) => (
                <MedicineList
                  key={item.id}
                  id={item.id}
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
