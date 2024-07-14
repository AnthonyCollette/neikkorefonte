import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaCircle, FaTrophy, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const Nav = () => {
    return (
        <nav>
            <div className='nav-container'>
                <ul>
                    <li>
                        <NavLink to="/"><img src={logo} alt="Logo de Neikko" /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/"><FaCircle /> Live</NavLink>
                    </li>
                    <li>
                        <NavLink to="/giveaways"><FaTrophy /> Concours </NavLink>
                    </li>
                    {/* <li>
                    <NavLink to="/"><MdArticle /> Articles </NavLink>
                </li> */}
                </ul>
                <div className="social-medias">
                    <Link to="https://www.facebook.com/profile.php?id=100070014880206" target='_blank'><FaFacebookSquare /></Link>
                    <Link to="https://x.com/NeikkoMinou" target='_blank'><FaSquareXTwitter /></Link>
                    <Link to="https://www.tiktok.com/@neikkominou" target='_blank'><AiFillTikTok /></Link>
                    <Link to="https://www.instagram.com/neikkominou/" target='_blank'><FaInstagramSquare /></Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;