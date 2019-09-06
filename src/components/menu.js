import React from "react";

class Menu extends React.Component {
   render(){
    return(
        <nav>
            <div><a href="#">Профиль</a></div>
            <div><a href="#">Питание</a></div>
            <div><a href="#">Тренировки</a></div>
            <div><a href="#">Учеба</a></div>
            <div><a href="#">Настроийки</a></div>
        </nav>
    )     
    }
}

export default Menu;