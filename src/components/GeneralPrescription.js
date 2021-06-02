import { Repeat } from "@material-ui/icons";
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
import MyContext from "./MyContext";
import { useHistory } from "react-router";

function GeneralPrescription(props) {
  
    const [diagnosisL,setDiagnosis] = useState();
    const [complaintsL,setComplaint] = useState();
    const [testsL,setTests] = useState();
    const [medicinesL,setMedicine] = useState();
    const [treatmentsL,setTreatment] = useState();
    const [advicesL,setAdvice] = useState();
    const {value, setValue} = useContext(MyContext);
    const history = useHistory();
  

  function saveDiagnosis(values) {
    setDiagnosis(values)
    
  }

  function saveComplaints (values){
    setComplaint(values)
  };

  function saveTests(values) {
    setTests(values)
  };

  function saveMedicines(values) {
    setMedicine(values)
  };

  function saveTreatments(values) {
    setTreatment(values)
  };

  function saveAdvices(values) {
   setAdvice(values)
  };

  function handlePreview(event){
    let info = {
      diagnosis: diagnosisL,
      complaints: complaintsL,
      tests: testsL,
      medicines: medicinesL,
      treatments: treatmentsL,
      advices: advicesL,}
    ;
    setValue(info);
    history.push('./preview')
    //console.log("this is context :"+ value[diagnosis]);
  };

 
    return (
      <div
        style={{
          borderRadius: "1px",
          margin: "1rem",
          background: "#FFFFFF",
          width: "1350px",
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
            style={{ gridColumn: "1/5", gridRow: "1/2", width: "fit-content" }}
          >
            <Diagnosis onChangeDiagnosis={saveDiagnosis}></Diagnosis>
          </div>
          <div style={{ gridColumn: "1/2", gridRow: "2/3" }}>
            <ChiefComplaints
              onChangeComplaints={saveComplaints}
            ></ChiefComplaints>
          </div>
          <div style={{ gridColumn: "1/2", gridRow: "3/4" }}>
            <TestAdvice onChangeTests={saveTests}></TestAdvice>
          </div>
          <div style={{ gridColumn: "1/2", gridRow: "4/5" }}>
            <MedicineHistory
              onChangeMedicines={saveMedicines}
            ></MedicineHistory>
          </div>
          <div
            style={{ gridColumn: "2/4", gridRow: "1/5", justifySelf: "start" }}
          >
            <Treatmeant onChangeTreatments={saveTreatments}></Treatmeant>
          </div>
          <div style={{ gridColumn: "4/5", gridRow: "1/5" }}>
            <Advice onChangeAdvices={saveAdvices}></Advice>
          </div>
        </div>
      </div>
    );
  }


GeneralPrescription.contextType = MyContext;

export default GeneralPrescription;
