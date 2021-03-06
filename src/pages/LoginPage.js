import React, { Component } from 'react';
import LoginSignupHeader from '../components/LoginSignupHeader';
import Login from '../components/Login'
import style from "../style.module.css";



class LoginPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.pageContainer}>
                <LoginSignupHeader></LoginSignupHeader>
                <div className={style.componentPlacer}>
                <Login></Login>
                </div>
                <div className={style.loginSignupFooter}></div>
            </div>
         );
    }
}
 
export default LoginPage ;