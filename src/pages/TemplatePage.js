import React, { Component } from 'react';
import style from "../style.module.css";
import ButtonList from '../components/ButtonList'
import Header from '../components/Header'
import TemplateSearch from '../components/TemplateSearch'
import Footer from '../components/Footer';



class TemplatePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.pageContainer}>
                <Header/>
                <div className={style.componentPlacer} style={{padding:"0rem",margin:"1rem"}}>
                    <ButtonList/>
                    <TemplateSearch/>
                </div>
                <Footer />
            </div>
         );
    }
}
 
export default TemplatePage ;