import { Flare } from "@material-ui/icons";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/AddOutlined";

class Buttonlist extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          style={{ display: "flex",flexWrap:"wrap", justifyContent: "center", margin: "1rem" }}
        >
          <Button
            id="create"
            variant="contained"
            color="secondary"
            startIcon={<Add />}
            style={{ borderRadius: "0", width: "10rem", margin: "0.4rem" }}
            size="medium"
          >
            Create
          </Button>
          <Button
            id="archive"
            variant="outlined"
            style={{
              border: "1px solid #E55050",
              borderRadius: "0",
              width: "10rem",
              margin: "0.4rem",
            }}
            size="medium"
          >
            <span style={{ color: "#E55050" }}>Archive</span>
          </Button>
          <Button
            id="patient"
            variant="outlined"
            style={{
              border: "1px solid #E55050",
              borderRadius: "0",
              width: "10rem",
              margin: "0.4rem",
            }}
            size="medium"
          >
            <span style={{ color: "#E55050" }}>Patients</span>
          </Button>
          <Button
            id="page-setup"
            variant="outlined"
            style={{
              border: "1px solid #E55050",
              borderRadius: "0",
              width: "10rem",
              margin: "0.4rem",
            }}
            size="medium"
          >
            <span style={{ color: "#E55050" }}>Page Setup</span>
          </Button>
          <Button
            id="templates"
            variant="outlined"
            style={{
              border: "1px solid #E55050",
              borderRadius: "0",
              width: "10rem",
              margin: "0.4rem",
            }}
            size="medium"
          >
            <span style={{ color: "#E55050" }}>Templates</span>
          </Button>
          <Button
            id="profile"
            variant="outlined"
            style={{
              border: "1px solid #E55050",
              borderRadius: "0",
              width: "10rem",
              margin: "0.4rem",
            }}
            size="medium"
          >
            <span style={{ color: "#E55050" }}>Profile</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default Buttonlist;
