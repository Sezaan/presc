import React, { Component } from 'react';
import LoginSignupHeader from '../components/LoginSignupHeader';
import SetNewPassword from '../components/SetNewPassword'
import style from "../style.module.css";



class LoginPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.pageContainer}>
                <LoginSignupHeader></LoginSignupHeader>
                <div className={style.componentPlacer}>
                <SetNewPassword></SetNewPassword>
                </div>
                <div className={style.loginSignupFooter}></div>
            </div>
         );
    }
}
 
export default LoginPage ;