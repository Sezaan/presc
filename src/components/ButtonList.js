import { Flare } from '@material-ui/icons';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/AddOutlined'

class Buttonlist extends Component {
    state = {  }
    render() { 
        return ( 
        <di>
            <div style={{display:"flex",justifyContent:"center",margin:"1rem"}}>
                <Button
                id="create"
                variant="contained"
                color="secondary"
                startIcon={<Add  />}
                style={{borderRadius:"0",width:"8rem",margin:"0.2rem"}}
                size="medium"
                >Create</Button>
                <Button
                id="archive"
                variant="outlined"
                style={{border:"1px solid #E55050",borderRadius:"0",width:"8rem",margin:"0.2rem"}}
                size="medium"
                >Archive</Button>
                <Button
                id="patient"
                variant="outlined"
                style={{border:"1px solid #E55050",borderRadius:"0",width:"8rem",margin:"0.2rem"}}
                size="medium"
                >Patients</Button>
                <Button
                id="page-setup"
                variant="outlined"
                style={{border:"1px solid #E55050",borderRadius:"0",width:"8rem",margin:"0.2rem"}}
                size="medium"
                >Page Setup</Button>
                <Button
                id="templates"
                variant="outlined"
                style={{border:"1px solid #E55050",borderRadius:"0",width:"8rem",margin:"0.2rem"}}
                size="medium"
                >Templates</Button>
                <Button
                id="profile"
                variant="outlined"
                style={{border:"1px solid #E55050",borderRadius:"0",width:"8rem",margin:"0.2rem"}}
                size="medium"
                >Profile</Button>
            </div>
        </di>
        );
    }
}
 
export default Buttonlist;