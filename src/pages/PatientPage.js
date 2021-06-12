import React, { Component } from 'react';
import style from "../style.module.css";
import ButtonList from '../components/ButtonList'
import Header from '../components/Header'
import PatientSearch from '../components/PatientSearch'
import Footer from '../components/Footer';



class PatientPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.pageContainer}>
                <Header/>
                <div className={style.componentPlacer} style={{margin:"auto",padding:"0rem",}}>
                    <ButtonList/>
                    <PatientSearch/>
                </div>
                <Footer />
            </div>
         );
    }
}
 
export default PatientPage ;