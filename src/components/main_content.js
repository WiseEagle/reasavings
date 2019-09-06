import React from "react";
import Menu from "./menu";
import Profile from "./profile";

class MainContent extends React.Component {
   render(){
    return(
        <div className="mainBlock">
            <Menu />
            <Profile />
        </div>
    )     
    }
}

export default MainContent;