import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
    active = {
        backgroundColor: "#212F3D",
        color: "white",
        fontWeight: "bold"
    };
    header = {
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evenly"
    };
    render() {
        return (
            <div className="navbar navbar-dark bg-dark">
                <NavLink exact to="/2017-2018/dcs/dev_40/client_app/" activeStyle={this.active}>
                All Profiles
                </NavLink>
                <NavLink to="/2017-2018/dcs/dev_40/client_app/ProfileById" className="navbar navbar-dark bg-dark" activeStyle={this.active}>
                Profile by id
                </NavLink> 
                <NavLink to="/2017-2018/dcs/dev_40/client_app/ProfileByGenderAge" className="navbar navbar-dark bg-dark" activeStyle={this.active}>
                Profile by Gender <b>&</b> Age</NavLink>
            </div>
);}}
export default Header;