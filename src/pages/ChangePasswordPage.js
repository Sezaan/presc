import React, { Component } from 'react';
import LoginSignupHeader from '../components/LoginSignupHeader';
import ChangePassword from '../components/ChangePassword'
import style from "../style.module.css";



class ChangePasswordPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.pageContainer}>
                <LoginSignupHeader></LoginSignupHeader>
                <div className={style.componentPlacer}>
                <ChangePassword></ChangePassword>
                </div>
                <div className={style.loginSignupFooter}></div>
            </div>
         );
    }
}
 
export default ChangePasswordPage ;