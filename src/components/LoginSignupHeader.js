import React, { Component } from 'react';
import style from "../style.module.css";
import {useHistory} from 'react-router-dom'

;


function LoginSignupHeader(props) {

    let history = useHistory();
    

     function handleLoginButton(){
        history.push('/')
    }

    
        return ( 
            <header className={style.loginSignupHeader}>
                
                <div>

                </div>
                <div className={style.headerBox}>
                    <button className={style.loginButton3}>Feature</button>
                    <button className={style.loginButton3}>Pricing</button>
                    <button className={style.loginButton3}>Contact</button>
                    <button className={style.loginButton4} onClick={handleLoginButton}>Login</button>
                </div>
                
            </header>
         );
    
}
 
export default LoginSignupHeader;