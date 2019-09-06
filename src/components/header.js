import React from "react";
import logo from './../reasavings-logo.png';

class Header extends React.Component {
   render(){
    return(
        <header>
            <div className="wrapper">
                <img src={logo} className="logo" />
            </div>
        </header>
    )     
    }
}

export default Header;