import React, { Component } from "react";
import ListItem from "./ListItem";
import style from "../style.module.css";
import TextField from "@material-ui/core/TextField";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

class ChiefComplaints extends Component {
  state = {
    counter: 1,
    values: [],
  };

  handleEnter = (event) => {
    const element = document.getElementById("complaint").value;
    if (event.code === "Enter" && element !== "") {
      document.getElementById("complaint").value = null;
      let values = this.state.values;
      console.log({ titel: element });
      values.push({ id: this.state.counter, item: element });
      this.setState({ counter: this.state.counter + 1 });
      this.setState({ values });
      this.props.onChangeComplaints(this.state.values);
    }
  };

  handleAdd = () => {
    const element = document.getElementById("complaint").value;
    document.getElementById("complaint").value = null;
    var values = this.state.values;
    var newValue = element;
    console.log("newValue is ", newValue);
    if (newValue !== "") {
      newValue = { id: this.state.counter, item: newValue };
      this.setState({ counter: this.state.counter + 1 });
      values.push(newValue);

      this.setState({
        values: values,
      });
      this.props.onChangeComplaints(this.state.values);
    }
  };

  handleCross = (id) => {
    var values = this.state.values.filter((c) => c.id !== id);
    this.setState({ values });
  };

  render() {
    return (
      <div>
        <div className={style.container}>
          <div className={style.box1}>
            <span className={style.header}>Chief Complaints</span>
            <InfoOutlinedIcon
              fontSize="small"
              style={{ color: "#aaaaaa" }}
            ></InfoOutlinedIcon>
            <span style={{ width: "125px" }}> </span>
            <span className={style.template}>Load templates</span>
          </div>

          <div className={style.box2}>
            {this.props.onChangeComplaints(this.state.values)}
            {this.state.values.map((listItem) => (
              <ListItem
                key={listItem.id}
                id={listItem.id}
                item={listItem.item}
                onCrossClicked={this.handleCross}
              ></ListItem>
            ))}
          </div>
          <div className={style.box3}>
            <TextField
              id="complaint"
              style={{ width: "400px" }}
              variant="outlined"
              label="Write CC Point"
              onKeyDownCapture={this.handleEnter}
              onChange={this.handleChange}
            ></TextField>
            <Button variant="outlined" size="small" onClick={this.handleAdd}>
              <AddIcon fontSize="large" style={{ color: "#888888" }} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChiefComplaints;
