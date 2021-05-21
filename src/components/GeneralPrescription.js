import { Repeat } from '@material-ui/icons';
import React, { Component } from 'react';
import Advice from './Advice';
import Diagnosis from './Diagnosis'
import PatientInfo from './PatientInfo';
import Treatmeant from './Treatment'
import ChiefComplaints from './ChiefComplaints'

class GeneralPrescription extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{width:"1200px", border:"1px solid black",display:"grid"
             ,gridTemplateColumns:"1fr 3fr 1fr"
             ,gridTemplateRows:"1fr 1fr 1fr fr"
             ,justifyItems:"center"
             ,alignItems:"center"
             ,gap:"10px"
            
            }}>
                <div style={{background:"#eee",gridColumn:"1/2",gridRow:"1/2"}}>
                <ChiefComplaints></ChiefComplaints>
                </div>
                <div style={{background:"#aaa",gridColumn:"2/3",gridRow:"1/5"}}>
                <Treatmeant></Treatmeant>
                </div>
                
                <div style={{background:"#ccc",gridColumn:"3/4",gridRow:"1/2"}}><Advice></Advice>
                </div>
            </div>
         );
    }
}
 
export default GeneralPrescription;