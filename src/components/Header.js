import style from '../style.module.css'
import TextButton from '@material-ui/core/Button'
import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={style.header}>
                <TextButton size="small" style={{gridColumn:"9/10",gridRow:"2/3"}}>Contact Us</TextButton>
                <TextButton size="small" style={{gridColumn:"10/11",gridRow:"2/3",background:"#E55050"}}>
                    <span style={{fontWeight: "bold",color:"white"}}>Dashboard</span></TextButton>
            </div>
         );
    }
}
 
export default Header;
