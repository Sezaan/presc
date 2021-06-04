import React, { Component } from "react";
import ListItem from "./ListItem";
import style from "../style.module.css";
import TextField from '@material-ui/core/TextField'
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

class Advice extends Component {
    state = {
        values: [ ],
    };

    handleEnter=(event)=>{
        const element = document.getElementById('advice').value
        if(event.code === "Enter" && element !==""){
            document.getElementById('advice').value = null
            let values = this.state.values;
            console.log({titel:element})
            values.push({item:element})
            this.setState({values})
        }
    }

    handleAdd=()=>{
        const element = document.getElementById("advice").value
        document.getElementById('advice').value = null
        var values = this.state.values;
        var newValue = element;
        console.log("newValue is ",newValue);
        if(newValue!=="")
            {
                newValue = {item : newValue};
                values.push(newValue);
            

        this.setState(
            {
                values: values,
            }
        );
        this.props.onChangeAdvices(this.state.values)
            }
    }

    handleCross = item =>{
        var values = this.state.values.filter(c => c.item!== item );
        this.setState({values});
    }
    render() {
        return (
            <div>
                <div className={style.container}>
                    <div className={style.box1}>
                        <span className={style.header}>Advice</span>
                        <InfoOutlinedIcon
                            fontSize="small"
                            style={{ color: "#aaaaaa" }}
                        ></InfoOutlinedIcon>
                        <span style={{width:"220px"}}></span>
                        <span className={style.template}>Load templates</span>
                    </div>

                    <div className={style.box2}>
                        {this.state.values.map((listItem) => (
                            <ListItem 
                            item={listItem.item}
                            onCrossClicked = {this.handleCross}
                            >
                            </ListItem>
                        ))}
                    </div>
                    <div className={style.box3}>
                        <TextField id="advice" style={{width:"400px"}} variant="outlined" label="Write Advice Point" onKeyDownCapture={this.handleEnter} onChange={this.handleChange}>
                        </TextField>
                        <Button type="submit" variant = "outlined" size="small" onClick={this.handleAdd}>
                            <AddIcon fontSize="large" style={{color:"#888888"}}/>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Advice;
