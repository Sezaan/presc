import React, { Component } from 'react';
import style from "../style.module.css";
import ButtonList from '../components/ButtonList'
import Header from '../components/Header'
import PatientHistory from '../components/PatientHistory'
import Footer from '../components/Footer';



class ArchivePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.pageContainer}>
                <Header/>
                <div className={style.componentPlacer} style={{margin:"auto",padding:"0rem",}}>
                    <ButtonList/>
                    <PatientHistory/>
                </div>
                <Footer />
            </div>
         );
    }
}
 
export default ArchivePage ;