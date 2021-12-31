import React from 'react';
import './style.css';

function Navigation() {
    return (
        <header className="d-flex flex-wrap justify-content-between ps-4 pe-4 pt-auto pb-auto">
            <h1 className="fw-bold">
                <a href="/" className="text-decoration-none">
                    Timothy Niemeyer
                </a>
            </h1>
            <nav className="d-flex flex-wrap ms-2 me-2 mt-auto mb-auto">
                <ul className="d-flex justify-content-between mb-0">
                    <li>
                        <a href="#about-me" className="text-decoration-none">About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="text-decoration-none">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-decoration-none">Contact</a>
                    </li>
                    <li>
                        <a href="#resume" className="text-decoration-none">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;