import style from '../style.module.css'
import TextButton from '@material-ui/core/Button'
import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header className={style.pageHeader}>
                <button className={style.loginButton3}> Contact Us </button>
                <button className={style.loginButton4}>Dashboard</button>
            </header>
         );
    }
}
 
export default Header;
