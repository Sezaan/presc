import style from "../style.module.css";
import ButtonList from '../components/ButtonList'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Footer from '../components/Footer';
import React, { Component } from 'react';



class ProfilePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.pageContainer}>
                <Header/>
                <div className={style.componentPlacer} style={{padding:"0rem",margin:"1rem"}}>
                    <ButtonList/>
                    <Profile/>
                </div>
                <Footer />
            </div>
         );
    }
}
 
export default ProfilePage ;