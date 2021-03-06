import React from 'react';
import logo from './reasavings-logo.png';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Workout from "./components/Workout/Workout";
import FutureI from "./components/FutureI/FutureI";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Whishes from './components/Whishes/Whishes';


function App(props) {


    return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Header />
          <Nav />
          <div className="app-wrapper-content">
              <Route path="/profile" render = {() => <Profile state={props.state.profilePage} /> } />
              <Route path="/dialogs" render = {() => <Dialogs state={props.state.dialogsPage} />} />
              <Route path="/workout" component={Workout} />
              <Route path="/future_i" component={FutureI} />
              <Route path="/whishes" component={Whishes} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />

          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
