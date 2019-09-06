import React from 'react';

/*import './App.css';*/
import "./App.scss"
import Header from './components/header';
import Footer from './components/footer';
import MainContent from './components/main_content';

function App() {
  return (
    <div id="main-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
