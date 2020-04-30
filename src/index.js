import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts =[
    {id:"12", message:"I am learned 26 lessons! We split code Dialogs into DialogsItem and Messages", likeCounter: "1"},
    {id:"11", message:"I am learned 25 lessons! We learn MAP function", likeCounter: "1"},
    {id:"10", message:"I am learned 24 lessons! We add BLL (business layer logic) in UI,add (objects)", likeCounter: "1"},
    {id:"9", message:"I am learned 22 lessons! We add Navlik-s for friends link dialogs", likeCounter: "1"},
    {id:"8", message:"I am learned 21 lessons! We add DOM murkup for messages component", likeCounter: "1"},
    {id:"7", message:"I am learned 20 lessons! We learn Navlink-s this tan not reload page, and we add attributes 'to' and 'activeClassName'", likeCounter: "1"},
    {id:"6", message:"I am learned 19 lessons! We learn react-router-dom and add components to routing", likeCounter: "1"},
    {id:"5", message:"I am learned 18 lessons! We add new component for page messages/dialogs", likeCounter: "1"},
    {id:"4", message:"I am learned 17 lessons! We repeat previous lessons and contcepts", likeCounter: "1"},
    {id:"3", message:"I am learned 16 lessons! We learn properties, we add properties to dynamic component", likeCounter: "1"},
    {id:"2", message:"I am learned 15 lessons! We split code Profile to MyPosts an Post"},
    {id:"1", message:"I am learned 14 lessons! We split code into files Profile, Navbar and Header"}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
