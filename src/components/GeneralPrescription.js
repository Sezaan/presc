import { Repeat, SettingsPower } from "@material-ui/icons";
import React, { Component, useContext, useState } from "react";
import Advice from "./Advice";
import Diagnosis from "./Diagnosis";
import Preview from "./Preview";
import Treatmeant from "./Treatment";
import TestAdvice from "./TestAdvice";
import ChiefComplaints from "./ChiefComplaints";
import MedicineHistory from "./MedicineHistory";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/DescriptionOutlined";
import SaveIcon from "@material-ui/icons/SaveOutlined";
import SystemUpdateIcon from "@material-ui/icons/SystemUpdateOutlined";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import PreviewContext from "../context/PreviewContext";
import { Modal } from "semantic-ui-react";
import { ClickAwayListener } from "@material-ui/core";

function GeneralPrescription(props) {
  const [testvar, settestvar] = useState("");
  const [diagnosisL, setDiagnosis] = useState();
  const [complaintsL, setComplaint] = useState();
  const [testsL, setTests] = useState();
  const [medicinesL, setMedicine] = useState();
  const [treatmentsL, setTreatment] = useState();
  const [advicesL, setAdvice] = useState();
  const { value, setValue } = useContext(PreviewContext);
  const [open, setOpen] = useState(false);
  const [autocomplete, setAutocomplete] = useState([]);

  function handleSave() {
    const name = document.getElementById("name").value;
    const date_of_birth = document.getElementById("date_of_birth").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value;

    const values = {
      name: name,
      date_of_birth: date_of_birth,
      age: age,
      gender: gender,
      phone: phone,
    };
    console.log(values);
  }

  function setAutocompleteList(event) {
    console.log(event.target.id);

    let url = "";

    if (event.target.value !== "") {
      url = `https://calm-plains-47385.herokuapp.com/patient/get_patient?filter=${event.target.value}`;
    } else {
      url = `https://calm-plains-47385.herokuapp.com/patient/get_patient`;
    }
    fetch(url, {
      method: "GET",
      headers: {
        "prescription-generator": `${localStorage.getItem("auth_token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success === "yes") {
          setAutocomplete(result.data);
        }
      });
  }

  function handleAutocompleteInputs(event) {
    if (event.target.value !== '') {
      const input = document.getElementById(event.target.id).value;
      const result = input.split(",");
      if (result.length == 5) {
        document.getElementById("patient_id").value = result[4]
          ? result[4]
          : "";
        document.getElementById("date_of_birth").value = result[1]
          ? result[1]
          : " ";
        document.getElementById("gender").value = result[2] ? result[2] : "";
        document.getElementById("phone").value = result[3] ? result[3] : "";
        document.getElementById("name").value = result[0] ? result[0] : "";
        settestvar(result[0]);
      }
    }
  }

  function getDate() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var today = new Date(),
      date =
        monthNames[today.getMonth()] +
        " " +
        today.getDate() +
        ", " +
        today.getFullYear();
    return date;
  }

  function saveDiagnosis(values) {
    setDiagnosis(values);
  }

  function saveComplaints(values) {
    setComplaint(values);
  }

  function saveTests(values) {
    setTests(values);
  }

  function saveMedicines(values) {
    setMedicine(values);
  }

  function saveTreatments(values) {
    setTreatment(values);
  }

  function saveAdvices(values) {
    setAdvice(values);
  }

  function handlePatientInfo() {
    const name = document.getElementById("name").value;
    const date_of_birth = document.getElementById("date_of_birth").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    console.log(name);
  }

  function handleClickAwayName(event) {
    const input = document.getElementById('name').value;
    const result = input.split(",");
    if (result.length == 5) {
      console.log("I am here",result);
      document.getElementById("name").value = result[0] ? result[0] : "";
      settestvar(result[0]);
    }
  }

  function handleClickAwayId(event) {
    const input = document.getElementById('patient_id').value;
    const result = input.split(",");
    if (result.length == 5) {
      console.log("I am here",result);
      document.getElementById("patient_id").value = result[4] ? result[4] : "";
      settestvar(result[0]);
    }
  }

  function handleSave() {
    /*let diagnosis = [],
      complaints = [],
      tests = [],
      advices = [],
      medicines = [],
      treatments = [];
    diagnosisL.map((item) => {
      diagnosis.push(item.item);
    });
    complaintsL.map((item) => {
      complaints.push(item.item);
    });
    testsL.map((item) => {
      tests.push(item.item);
    });
    medicinesL.map((item) => {
      medicines.push(item.item);
    });
    treatmentsL.map((item) => {
      treatments.push({
        name: item.medicine,
        dosage: item.dosage,
        duration: item.duration,
        direction: item.direction,
        additional_comment: item.additionalComments,
      });
    });
    advicesL.map((item) => {
      advices.push(item.item);
    });
    console.log(diagnosis, complaints, tests, advices, medicines, treatments);*/
  }

  function handlePreview(event) {
    let info = {
      diagnosis: diagnosisL,
      complaints: complaintsL,
      tests: testsL,
      medicines: medicinesL,
      treatments: treatmentsL,
      advices: advicesL,
    };
    setValue(info);
    setOpen(true);
  }

  return (
    <div>
      <div
        style={{
          witdth: "auto",
          borderRadius: "4px",
          margin: "1rem",
          background: "#ffffff",
          boxShadow: "0px 0px 10px rgba(187, 187, 187, 0.25)",
          display: "grid",
          gridTemplateColumns: "4fr,1fr",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        <div style={{ gridColumn: "1/5", padding: "0 2rem 1rem 1rem" }}>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>Patient Info</p>
          <div style={{ display: "grid", gridTemplateColumns: "75% 25%" }}>
            <ClickAwayListener
              onClickAway={handleClickAwayName}
            >
              <Autocomplete
                id="name"
                freeSolo
                style={{ margin: "5px" }}
                options={autocomplete}
                getOptionLabel={(option) =>
                  `${option.name},${option.date_of_birth},${option.gender},${option.phone},${option.short_id}`
                }
                onChangeCapture={setAutocompleteList}
                onSelectCapture={handleAutocompleteInputs}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Patient Name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  ></TextField>
                )}
                renderOption={(option) => {
                  return (
                    <div style={{ padding: "1rem" }}>
                      <div>
                        {option.name}({option.short_id})
                      </div>
                      <div>{option.gender}</div>
                      {option.date_of_birth}
                      <div>{option.phone}</div>
                    </div>
                  );
                }}
              />
            </ClickAwayListener>
            <ClickAwayListener
              onClickAway={handleClickAwayId}
            >
            <Autocomplete
              id="patient_id"
              freeSolo
              style={{ margin: "5px" }}
              options={autocomplete}
              getOptionLabel={(option) =>
                `${option.name},${option.date_of_birth},${option.gender},${option.phone},${option.short_id}`
              }
              onChangeCapture={setAutocompleteList}
              onSelectCapture={handleAutocompleteInputs}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Patient ID"
                  InputLabelProps={{
                    shrink: true,
                  }}
                ></TextField>
              )}
              renderOption={(option) => {
                return (
                  <div>
                    <div>
                      {option.name}({option.short_id})
                    </div>
                    <div>{option.gender}</div>
                    {option.date_of_birth}
                    <div>{option.phone}</div>
                  </div>
                );
              }}
            />
            </ClickAwayListener>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "25% 25% 25% 25%",
              marginTop: "0.5rem",
            }}
          >
            <TextField
              id="phone"
              variant="outlined"
              label="Contact Number"
              style={{ margin: "5px" }}
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>

            <TextField
              id="gender"
              variant="outlined"
              label="Sex"
              style={{ margin: "5px" }}
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
            <TextField
              id="age"
              variant="outlined"
              label="Age"
              style={{ margin: "5px" }}
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
            <TextField
              id="date_of_birth"
              variant="outlined"
              label="Year of Birth"
              style={{ margin: "5px" }}
              InputLabelProps={{
                shrink: true,
              }}
            ></TextField>
          </div>
        </div>
        <div
          style={{
            gridColumn: "5/6",
            display: "grid",
            padding: "0 1rem 1rem 0",
          }}
        >
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>Today</p>
          <p style={{ fontWeight: "bold", margin: "5px" }}>{getDate()}</p>
          <TextField
            variant="outlined"
            label="Serial No."
            style={{ marginTop: "35px" }}
          ></TextField>
        </div>
      </div>
      <div
        style={{
          borderRadius: "1px",
          margin: "1rem",
          background: "#FFFFFF",
          width: "1350px",
          padding: "2rem",
        }}
      >
        <div
          style={{
            width: "1300px",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
            marginBottom: "2rem",
            marginLeft: "1rem",
          }}
        >
          <div>
            <span style={{ fontWeight: "bold", fontSize: "2rem" }}>
              Generate Prescription
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              variant="outlined"
              size="medium"
              style={{
                margin: "2px",
                border: "1 solid black",
                borderRadius: "0px",
                width: "8rem",
              }}
            >
              Templates
            </Button>
            <Button
              variant="outlined"
              size="medium"
              style={{
                margin: "2px",
                border: "1 solid black",
                borderRadius: "0px",
                width: "8rem",
              }}
              startIcon={<SaveIcon />}
              onClick={handlePatientInfo}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              onClickCapture={handlePreview}
              size="medium"
              style={{
                margin: "2px",
                border: "1 solid black",
                borderRadius: "0px",
                width: "8rem",
              }}
              startIcon={<DescriptionIcon />}
            >
              Preview
            </Button>
            <Button
              variant="outlined"
              size="medium"
              style={{
                margin: "2px",
                border: "1 solid black",
                borderRadius: "0px",
                width: "8rem",
              }}
              startIcon={<SystemUpdateIcon />}
            >
              Download
            </Button>
            <Button
              variant="outlined"
              size="medium"
              style={{
                margin: "2px",
                border: "1 solid black",
                borderRadius: "0px",
                width: "8rem",
              }}
              startIcon={<FileCopyIcon />}
            >
              Print
            </Button>
          </div>
          <Modal
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            open={open}
            size="fullscreen"
          >
            <Modal.Header>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p> Prescription&nbsp;Preview</p>
                <Button onClick={() => setOpen(false)} style={{ color: "red" }}>
                  Close
                </Button>
              </div>
            </Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Preview />
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
        <div
          style={{
            width: "1300px",
            margin: "1rem",
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr 1fr",
            justifyItems: "start",
            alignItems: "start",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <div style={{ width: "fit-content", marginBottom: "1rem" }}>
              <Diagnosis onChangeDiagnosis={saveDiagnosis}></Diagnosis>
            </div>
            <div style={{ width: "fit-content", marginBottom: "1rem" }}>
              <ChiefComplaints
                onChangeComplaints={saveComplaints}
              ></ChiefComplaints>
            </div>
            <div style={{ width: "fit-content", marginBottom: "1rem" }}>
              <TestAdvice onChangeTests={saveTests}></TestAdvice>
            </div>
            <div style={{ width: "fit-content", marginBottom: "1rem" }}>
              <MedicineHistory
                onChangeMedicines={saveMedicines}
              ></MedicineHistory>
            </div>
          </div>
          <div style={{ width: "fit-content" }}>
            <Treatmeant onChangeTreatments={saveTreatments}></Treatmeant>
          </div>
          <div style={{ width: "fit-content" }}>
            <Advice onChangeAdvices={saveAdvices}></Advice>
          </div>
        </div>
      </div>
    </div>
  );
}

//GeneralPrescription.contextType = PreviewContext;

export default GeneralPrescription;
