import { Repeat } from "@material-ui/icons";
import React, { Component } from "react";
import Advice from "./Advice";
import Diagnosis from "./Diagnosis";
import PatientInfo from "./PatientInfo";
import Treatmeant from "./Treatment";
import TestAdvice from "./TestAdvice";
import ChiefComplaints from "./ChiefComplaints";
import MedicineHistory from "./MedicineHistory";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/DescriptionOutlined";
import SaveIcon from "@material-ui/icons/SaveOutlined";
import SystemUpdateIcon from "@material-ui/icons/SystemUpdateOutlined";
import FileCopyIcon from "@material-ui/icons/FileCopyOutlined";

class GeneralPrescription extends Component {
  state = {};
  render() {
    return (
      <div style={{borderRadius:"1px",margin:"1rem", background:"#FFFFFF",width:"1350px"}}>
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
            >
              Save
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
        </div>
        <div
          style={{
            width: "1300px",
            margin: "1rem",
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr fr",
            justifyItems: "start",
            alignItems: "start",
            gap: "1.5rem",
          }}
        >
          <div
            style={{ gridColumn: "1/2", gridRow: "1/2", width: "fit-content" }}
          >
            <Diagnosis></Diagnosis>
          </div>
          <div style={{ gridColumn: "1/2", gridRow: "2/3" }}>
            <ChiefComplaints></ChiefComplaints>
          </div>
          <div style={{ gridColumn: "1/2", gridRow: "3/4" }}>
            <TestAdvice></TestAdvice>
          </div>
          <div style={{ gridColumn: "1/2", gridRow: "4/5" }}>
            <MedicineHistory></MedicineHistory>
          </div>
          <div
            style={{ gridColumn: "2/4", gridRow: "1/5", justifySelf: "start" }}
          >
            <Treatmeant></Treatmeant>
          </div>
          <div style={{ gridColumn: "4/5", gridRow: "1/5" }}>
            <Advice></Advice>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralPrescription;
