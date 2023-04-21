import React from "react";
import RandomSpace from "../RandomSpace/RandomSpace";
import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
  return(
    <nav className='navBar'>
      <NavLink
        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
        to='/'>List</NavLink>
      <NavLink
        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
        to="/about">About</NavLink>
      <NavLink
        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
        to="/signup">Signup</NavLink>
      <RandomSpace />
    </nav>
  )
}