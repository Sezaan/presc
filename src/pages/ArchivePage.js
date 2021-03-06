import React, { Component } from 'react';
import LoginSignupHeader from '../components/LoginSignupHeader';
import style from "../style.module.css";
import ButtonList from '../components/ButtonList'
import Header from '../components/Header'
import ArchiveSearch from '../components/ArchiveSearch'
import Footer from '../components/Footer';



class ArchivePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.pageContainer}>
                <Header/>
                <div className={style.componentPlacer} style={{margin:"auto",padding:"0rem",}}>
                    <ButtonList/>
                    <ArchiveSearch/>
                </div>
                <Footer />
            </div>
         );
    }
}
 
export default ArchivePage ;