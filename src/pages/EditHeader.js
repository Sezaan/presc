import React, { Component } from 'react';
import style from "../style.module.css";
import ButtonList from '../components/ButtonList'
import Header from '../components/Header'
import Setup from '../components/Setup'
import Footer from '../components/Footer';



class EditHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.pageContainer}>
                <Header/>
                <div className={style.componentPlacer} style={{margin:"auto",}}>
                    <ButtonList/>
                    <Setup/>
                </div>
                <Footer />
            </div>
         );
    }
}
 
export default EditHeader ;