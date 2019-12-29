import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends Component{
    render(){
        return (
            <div className="header container">
                <div class="row">
                    <div className="one-third column">
                        <NavLink exact to="/" className="nav">Home</NavLink>
                    </div>
                    <div class="one-third column">
                        <NavLink to="/stuff" className="nav">Stuff</NavLink>
                    </div>
                    <div class="one-third column">
                        <NavLink to="/contact" className="nav">Contact</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;