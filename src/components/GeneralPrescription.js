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
import MyContext from "./MyContext";
import { Modal } from "semantic-ui-react";

function GeneralPrescription(props) {
  const [diagnosisL, setDiagnosis] = useState();
  const [complaintsL, setComplaint] = useState();
  const [testsL, setTests] = useState();
  const [medicinesL, setMedicine] = useState();
  const [treatmentsL, setTreatment] = useState();
  const [advicesL, setAdvice] = useState();
  const { value, setValue } = useContext(MyContext);
  const [open, setOpen] = useState(false);

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
          style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
        >
          <div
            style={{ width: "fit-content", marginBottom:"1rem" }}
          >
            <Diagnosis onChangeDiagnosis={saveDiagnosis}></Diagnosis>
          </div>
          <div style={{ width: "fit-content", marginBottom:"1rem"  }}>
            <ChiefComplaints
              onChangeComplaints={saveComplaints}
            ></ChiefComplaints>
          </div>
          <div style={{ width: "fit-content", marginBottom:"1rem" }}>
            <TestAdvice onChangeTests={saveTests}></TestAdvice>
          </div>
          <div style={{ width: "fit-content", marginBottom:"1rem"  }}>
            <MedicineHistory
              onChangeMedicines={saveMedicines}
            ></MedicineHistory>
          </div>
        </div>
        <div
          style={{ width: "fit-content" }}
        >
          <Treatmeant onChangeTreatments={saveTreatments}></Treatmeant>
        </div>
        <div style={{ width: "fit-content" }}>
          <Advice onChangeAdvices={saveAdvices}></Advice>
        </div>
      </div>
    </div>
  );
}

GeneralPrescription.contextType = MyContext;

export default GeneralPrescription;
