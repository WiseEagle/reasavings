import React from 'react';

/*import './App.css';*/
import "./App.scss"
import Header from './components/header';
import Menu from './components/menu';
import Footer from './components/footer';
import Profile from './components/profile';

function App() {
  return (
    <div id="main-container">
      <Header />
      <Menu />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
