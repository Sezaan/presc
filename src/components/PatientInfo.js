import React, { Component } from 'react';
import style from '../style.module.css'
import TextField from '@material-ui/core/TextField'
import { Flare } from '@material-ui/icons';

class PatientInfo extends Component {
    state = {  }
    getDate(){
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        var today = new Date(),
        date = monthNames[today.getMonth()] + ' ' + today.getDate()+ ', ' + today.getFullYear();  
        return date;  
    }
    render() { 
        return ( 
        <div style={{width:"1318px",border:"1px solid black",margin:'1rem',background:"#ffffff"}}>
            <div style={{display:"flex"}}>
                <span style={{fontWeight:"bold",fontSize:"20px",padding:"10px"}}>Patient Info</span>
                <span style={{width:"750px"}}></span>
                <span style={{fontWeight:"bold",fontSize:"20px",padding:"10px"}}>Today</span>
            </div>
            <div style={{padding:"10px"}}>
                <TextField size="small" style={{width:"611px",marginRight:"5px"}} label="Patient Name" variant="outlined"></TextField>
                <TextField size="small" label="Patient ID" variant="outlined"></TextField>
                <span style={{fontSize:"16px",fontWeight:"bold",marginLeft:"70px"}}>{this.getDate()}</span>
            </div>
            <div style={{padding:"10px"}}>
                <TextField style={{marginRight:"5px"}} size="small" label="Contact Number" variant="outlined"></TextField>
                <TextField style={{marginRight:"5px"}} size="small" label="Sex" variant="outlined"></TextField>
                <TextField style={{marginRight:"5px"}} size="small" label="Age" variant="outlined"></TextField>
                <TextField style={{marginRight:"5px"}} size="small" label="Year of Birth" variant="outlined"></TextField>
                <TextField style={{marginLeft:"63px"}} size="small" label="Serial" variant="outlined"></TextField>
            </div>
            
        </div>
             );
    }
}
 
export default PatientInfo;