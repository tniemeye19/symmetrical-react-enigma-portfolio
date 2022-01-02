import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import './style.css';

function Footer() {
    return (
        <footer className=" footer d-flex justify-content-center">
            <i><a href="https://github.com/tniemeye19"><FaGithub /></a></i>
            <i><a href="https://www.linkedin.com/in/timothy-niemeyer-0b7871218/"><FaLinkedin /></a></i>
            <i><a href="https://stackoverflow.com/"><FaStackOverflow /></a></i>
        </footer>
    )
}

export default Footer;