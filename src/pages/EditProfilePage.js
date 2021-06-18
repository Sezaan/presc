import React, { Component } from 'react';
import LoginSignupHeader from '../components/LoginSignupHeader';
import EditProfile from '../components/EditProfile'
import style from "../style.module.css";



class EditProfilePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.pageContainer}>
                <LoginSignupHeader></LoginSignupHeader>
                <div className={style.componentPlacer}>
                <EditProfile></EditProfile>
                </div>
                <div className={style.loginSignupFooter}></div>
            </div>
         );
    }
}
 
export default EditProfilePage ;