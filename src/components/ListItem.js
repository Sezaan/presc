import React, { Component } from "react";
import style from "../style.module.css";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

class ListItem extends Component {
  render() {
    return (
      <div className={style.listItem}>
        <p>{this.props.item}</p>
        <IconButton
          size="small"
          onClick={() => this.props.onCrossClicked(this.props.item)}
        >
          <CloseOutlinedIcon fontSize="large" />
        </IconButton>
      </div>
    );
  }
}

export default ListItem;
