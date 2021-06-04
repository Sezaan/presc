import React, { Component } from "react";
import ListItem from "./ListItem";
import style from "../style.module.css";
import TextField from "@material-ui/core/TextField";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Autocomplete from "@material-ui/lab/Autocomplete";

class MedicineHistory extends Component {
  state = {
    item: "",
    values: [],
    autocompleteList: [],
  };

  handleKey = (event) => {
    if (event.code === "Enter" && event.target.value !== "") {
      let val = event.target.value;
      this.setState({ item:  val});
      this.handleAdd();
      event.target.value='';
    }
  };

  handleChange = async (event) => {
    let val = event.target.value;
    event.target.value = ""
    this.setState({ item: val });
    var url = `https://calm-plains-47385.herokuapp.com/medicine/?filter=${val}`;
    console.log(url)
    if (val === "") {
      url = "https://calm-plains-47385.herokuapp.com/medicine/";
    }
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        let medicine = [];
        console.log(result.data)
        result.data.map((item) => {
          let newVal = item.brand_name;
          newVal = { title: newVal };
          medicine.push(newVal);
        });
        this.setState({ autocompleteList: medicine });
      });
  };

  handleAdd = () => {
    document.getElementById('medicine').value = ''
    var values = this.state.values;
    var newValue = this.state.item;
    console.log("newValue is ", newValue);
    if (newValue !== "") {
      newValue = { item: newValue };
      values.push(newValue);
    

    this.setState({
      values: values,
    });
    this.props.onChangeMedicines(this.state.values)
}
  };

  handleCross = (item) => {
    var values = this.state.values.filter((c) => c.item !== item);
    this.setState({ values });
  };
  render() {
    return (
      <div>
        <div className={style.container}>
          <div className={style.box1}>
            <span className={style.header}>Medicine History</span>
            <InfoOutlinedIcon
              fontSize="small"
              style={{ color: "#aaaaaa" }}
            ></InfoOutlinedIcon>
            <span style={{ width: "125px" }}></span>
            <span className={style.template}>Load templates</span>
          </div>

          <div className={style.box2}>
            {this.props.onChangeMedicines(this.state.values)}
            {this.state.values.map((listItem) => (
              <ListItem
                item={listItem.item}
                onCrossClicked={this.handleCross}
              ></ListItem>
            ))}
          </div>
          <div className={style.box3}>
            <Autocomplete
              id="medicne"
              freeSolo
              options={this.state.autocompleteList}
              getOptionLabel={(option) => option.title}
              style={{ width: 500 }}
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
            <Button
              type="submit"
              variant="outlined"
              size="small"
              onClick={this.handleAdd}
            >
              <AddIcon fontSize="large" style={{ color: "#888888" }} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default MedicineHistory;
