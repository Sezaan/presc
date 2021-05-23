import React, { Component } from 'react';
import LoginSignupHeader from '../components/LoginSignupHeader';
import ForgetPassword from '../components/ForgetPassword'
import style from "../style.module.css";



class LoginPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.pageContainer}>
                <LoginSignupHeader></LoginSignupHeader>
                <div className={style.componentPlacer}>
                <ForgetPassword></ForgetPassword>
                </div>
                <div className={style.loginSignupFooter}></div>
            </div>
         );
    }
}
 
export default LoginPage ;