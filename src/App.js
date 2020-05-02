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


function App(props) {


    return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Header />
          <Nav />
          <div className="app-wrapper-content">
              <Route path="/profile" render = {() => <Profile posts={props.posts} /> } />
              <Route path="/dialogs" render = {() => <Dialogs />} />
              <Route path="/workout" component={Workout} />
              <Route path="/future_i" component={FutureI} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />

          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
