import React, { Component } from 'react';
import LoginSignupHeader from '../components/LoginSignupHeader';
import Signup from '../components/Signup'
import style from "../style.module.css";



class LoginPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.pageContainer}>
                <LoginSignupHeader></LoginSignupHeader>
                <div className={style.componentPlacer}>
                <Signup></Signup>
                </div>
                <div className={style.loginSignupFooter}></div>
            </div>
         );
    }
}
 
export default LoginPage ;