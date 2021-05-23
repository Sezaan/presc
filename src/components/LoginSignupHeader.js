import React, { Component } from 'react';
import style from "../style.module.css";
import Button from '@material-ui/core/Button'

class LoginSignupHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <header className={style.loginSignupHeader}>
                
                <div>

                </div>
                <div className={style.headerBox}>
                    <button className={style.loginButton3}>Feature</button>
                    <button className={style.loginButton3}>Pricing</button>
                    <button className={style.loginButton3}>Contact</button>
                    <button className={style.loginButton4}>Login</button>
                </div>
                
            </header>
         );
    }
}
 
export default LoginSignupHeader;