import React, { Component } from 'react';
import GeneralPrescription from "../components/GeneralPrescription";
import ButtonList from "../components/ButtonList";
import PatientInfo from "../components/PatientInfo";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Prescription extends Component {
    state = {  }

    render() { 
        return ( 
            <div >
            <Header></Header>
            <div style={{ margin:"auto",background: "#E5E5E5",display:"grid",justifySelf:"center", padding:"10px 20px",width:"fit-content"}}>
              <ButtonList />
              <PatientInfo />
              <GeneralPrescription />
            </div>
            <Footer />
          </div>
         );
    }
}
 
export default Prescription;