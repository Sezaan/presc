import React, { Component } from "react";
import ListItem from "./ListItem";
import style from "../style.module.css";
import TextField from '@material-ui/core/TextField'
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { IconButton,Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

class Diagnosis extends Component {
    state = {
        values: [
            { item: "diagnosis one" },
            { item: "diagnosis two" },
            { item: "diagnosis three" },
            { item: "diagnosis four" },

        ],
    };
    render() {
        return (
            <div>
                <div className={style.container}>
                    <div className={style.box1}>
                        <span className={style.header}>Diagnosis</span>
                        <InfoOutlinedIcon
                            fontSize="small"
                            style={{ color: "#aaaaaa" }}
                        ></InfoOutlinedIcon>
                        <span style={{width:"265px"}}></span>
                        <span className={style.template}>Load templates</span>
                    </div>

                    <div className={style.box2}>
                        {this.state.values.map((listItem) => (
                            <ListItem item={listItem.item}></ListItem>
                        ))}
                    </div>
                    <div className={style.box3}>
                        <TextField style={{width:"500px"}} variant="outlined" label="Write Diagnosis Point">
                        </TextField>
                        <Button variant = "outlined" size="small">
                            <AddIcon fontSize="large" style={{color:"#888888"}}/>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Diagnosis;
