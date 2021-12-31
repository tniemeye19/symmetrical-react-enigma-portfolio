import React from 'react';
import './style.css';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="d-flex justify-content-center">
            <i><FaGithub /></i>
            <i><FaLinkedin /></i>
            <i><FaStackOverflow /></i>
        </footer>
    )
}

export default Footer;