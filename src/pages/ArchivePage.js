import React, { Component } from 'react';
import LoginSignupHeader from '../components/LoginSignupHeader';
import style from "../style.module.css";
import ButtonList from '../components/ButtonList'
import Header from '../components/Header'
import ArchiveSearch from '../components/ArchiveSearch'



class ArchivePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.pageContainer}>
                <Header/>
                <div className={style.componentPlacer} style={{marginTop:"5px",marginBottom:"5px"}}>
                    <ButtonList/>
                    <ArchiveSearch/>
                </div>
            </div>
         );
    }
}
 
export default ArchivePage ;