import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaCircle, FaTrophy } from "react-icons/fa";
import { MdArticle } from "react-icons/md";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/"><img src={logo} alt="Logo de Neikko" /></NavLink>
                </li>
                <li>
                    <NavLink to="/"><FaCircle /> Live</NavLink>
                </li>
                <li>
                    <NavLink to="/"><FaTrophy /> Concours </NavLink>
                </li>
                <li>
                    <NavLink to="/"><MdArticle /> Articles </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;