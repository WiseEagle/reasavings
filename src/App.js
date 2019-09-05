import React from 'react';
import logo from './reasavings-logo.png';
/*import './App.css';*/
import "./App.scss"

function App() {
  return (
    <div id="main-container">
      <header>
        <img src={logo} className="logo" />
      </header>
      <nav>
        <div><a href="#">Профиль</a></div>
        <div><a href="#">Питание</a></div>
        <div><a href="#">Тренировки</a></div>
        <div><a href="#">Учеба</a></div>
        <div><a href="#">Настроийки</a></div>

      </nav>
      <main>
        контент
      </main>
      <footer>Copyraight WiseEagle</footer>
    </div>
  );
}

export default App;
