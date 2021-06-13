import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ListItem from "./ListItem";
import MedicineList from "./MedicineList";
import { useState } from "react";
import style from "../style.module.css";
import { Edit } from "@material-ui/icons";

function Template(props) {
  const [enableEdit, setEnableEdit] = useState(false);

  function handleEdit(event) {
    console.log(event);
    setEnableEdit(!enableEdit);
    console.log(enableEdit);
  }

  return (
    <div
      style={{
        boxShadow: "0px 0px 10px rgba(187, 187, 187, 0.25)",
        boxSizing: "border-box",
        borderRadius: "8px",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
          gap: "0.5rem",
          padding: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexShrink: "-moz-initial",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              border: "1px solid #AAAAAA",
              borderRadius: "8px",
              boxSizing: "border-box",
              boxShadow: "0px 0px 10px rgba(187, 187, 187, 0.25)",
              textAlign: "center",
            }}
          >
            <br />
            <p>List&nbsp;of&nbsp;Templates</p>
            <br />
            <TemplateList />
            <TemplateList />
            <TemplateList />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: "flex-start",
            padding: "2rem",
          }}
        >
          {enableEdit ? (
            <TextField variant="outlined" label="Template Name" />
          ) : (
            <div>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                Template Name
              </span>
              <br />
              <span
                style={{ textDecorationLine: "underline", cursor: "pointer" }}
                onClick={handleEdit}
              >
                Edit Template
              </span>
            </div>
          )}

          <br />

          <div>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              Diagnosis
            </span>
            <InfoOutlinedIcon fontSize="small" />
            <br />
            <br />
            <ListItem item="Dianosis One" />
            <ListItem item="Dianosis Two" />
            {enableEdit ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "auto",
                }}
              >
                <TextField variant="outlined" label="Write Diagnosis Point" />
              </div>
            ) : (
              ""
            )}
          </div>

          <br />
          <div>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              Test Advice
            </span>
            <InfoOutlinedIcon fontSize="small" />
            <br />
            <br />
            <ListItem item="Test Name One" />
            <ListItem item="Test Name Two" />
            {enableEdit ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "auto",
                }}
              >
                <TextField variant="outlined" label="Write Test Point" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexShrink: "-moz-initial",
              justifyContent: "flex-start",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                }}
              >
                {enableEdit ? (
                  <button
                    className={style.loginButton4}
                    onClick={() => setEnableEdit(false)}
                  >
                    Save Template
                  </button>
                ) : (
                  <button className={style.loginButton4}>
                    Create Template
                  </button>
                )}
              </div>
              <br />
              <br />
              {enableEdit ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "1rem",
                  }}
                >
                  <div>
                    <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                      Treatment
                    </span>
                    <InfoOutlinedIcon fontSize="small" />
                  </div>
                  <TextField variant="outlined" label="Medicine Name" />
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField variant="outlined" label="Dosage" />
                    <TextField variant="outlined" label="Duration" />
                  </div>
                  <TextField variant="outlined" label="Direction" />
                  <TextField variant="outlined" label="Additonal Comments" />
                  <br />
                </div>
              ) : (
                ""
              )}

              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                Medicines
              </span>
              <InfoOutlinedIcon fontSize="small" />
              <br />
              <MedicineList
                medicine="Napa Extra 1000mg"
                duration="15 days"
                dosage="1+0+1"
                direction="After Lunch"
              />
              <MedicineList
                medicine="Napa Extra 1000mg"
                duration="15 days"
                dosage="1+0+1"
                direction="After Lunch"
              />
              <MedicineList
                medicine="Napa Extra 1000mg"
                duration="15 days"
                dosage="1+0+1"
                direction="After Lunch"
              />
              <br />
            </div>
            <div>
              <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                Advice
              </span>
              <InfoOutlinedIcon fontSize="small" />
              <br />
              <br />
              <ListItem item="Advice One" />
              <ListItem item="Advice Two" />
              {enableEdit ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "auto",
                  }}
                >
                  <TextField variant="outlined" label="Write Advice Point" />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TemplateList(props) {
  return (
    <div
      style={{
        padding: "5px",
        borderRadius: "4px",
        border: "1px solid #AAAAAA",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <p>Template Name</p>

        <MoreHorizIcon fontSize="small" style={{ cursor: "pointer" }} />
      </div>
      <p> disease name, desease naem</p>
      <p>Last Edit: June 10, 2021</p>
    </div>
  );
}

export default Template;
