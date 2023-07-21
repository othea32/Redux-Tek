// import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { darkMode, lightMode } from "../features/theme.jsx";

function NavBar() {
 const dispatch = useDispatch();

 return (
 <div className="navbar">
  <div className="theme-buttons">
   <button 
    onClick={() => {
     dispatch(darkMode());
    }}
    >
    Dark
   </button>
   <button onClick={() => dispatch(lightMode())}>Light Mode</button>

  </div>
 </div>
 );
}

export default NavBar;