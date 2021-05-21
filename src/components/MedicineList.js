import React, { Component } from 'react';
import style from "../style.module.css";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import IconButton  from '@material-ui/core/IconButton';

class MedicineList extends Component {
    
    render() { 
        return ( 
            <div style={{width:"400px", marginTop:"10px"}}>
                <table style={{border:"1px solid #444444",width:"400px",height:"124px"}}>
                    <tr>
                        <td colSpan={3} >
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <span style={{marginLeft:"23px",marginTop:"10px",fontWeight:"bold"}}>{this.props.medicine}</span>
                                <IconButton size="small" ><CloseOutlinedIcon fontSize="small" color="secondary"/></IconButton>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span style={{marginLeft:"23px",marginTop:"10px"}}>{this.props.dosage}</span></td>
                        <td><span style={{marginLeft:"23px",marginTop:"10px"}}>{this.props.direction}</span></td>
                        <td><span style={{marginLeft:"23px",marginTop:"10px"}}>{this.props.duration}</span></td>
                    </tr>
                    <tr>
                        <td colSpan={3}><span style={{marginLeft:"23px",marginTop:"10px"}}>{this.props.additionalComments}</span></td>
                    </tr>
                </table>
            </div>
         );
    }
}
 
export default MedicineList;