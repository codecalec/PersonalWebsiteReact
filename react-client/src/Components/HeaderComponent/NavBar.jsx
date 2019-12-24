import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends Component{
    render(){
        return (
            <header>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </header>
        )
    }
}

export default NavBar;