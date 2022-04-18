import React from "react";
import {NavLink} from "react-router-dom";

export const Header = () => {

    const colorOfLink = ({isActive}: {isActive: boolean}) => {
        return {
            color: isActive ? "green" : "red"
        }
    }

    return (
        <>
            <h1>Santa App</h1>
            Menu:
            <br/>
            <NavLink to="/gift" style={colorOfLink}>Gifts</NavLink>
            <br/>
            <NavLink to="/child" style={colorOfLink}>Children</NavLink>
            <hr/>
        </>
    )
}
