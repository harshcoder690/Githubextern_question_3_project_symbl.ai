import React from 'react';
import {Navbar, NavbarBrand, Nav, Button} from 'reactstrap';
import GroupIcon from '@material-ui/icons/Group';

function Navigationbar(props) {

    const brand={fontSize:'50px', fontFamily: 'Kaushan Script, cursive'};
    const spanColor={color:'#dc3545'};
  
    return (
      <>
        <Navbar color="dark" dark expand="md">
            <div className="container">
                <NavbarBrand href="/" style={brand}><span style={spanColor}>Get</span>Info&nbsp;&nbsp;
                <GroupIcon style={{ fontSize: 50 }} /></NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <Button outline color="danger" size="lg" onClick={props.getUsers}>Get Data</Button>
                </Nav>
            </div>
        </Navbar>
      </>
    );
}

  export default Navigationbar;