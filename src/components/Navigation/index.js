import React from 'react';
import './style.css';

function Navigation(props) {

    let name = '< Timothy Niemeyer />';

    return (
        <header className="d-flex flex-wrap justify-content-between ps-4 pe-4 pt-auto pb-auto">
            <h1 className="fw-bold">
                <a href="/" className="text-decoration-none">
                    {name}
                </a>
            </h1>
            <nav className="d-flex flex-wrap ms-2 me-2 mt-auto mb-auto">
                <ul className="d-flex justify-content-between mb-0">
                    <li>
                        <a href="#about" className="text-decoration-none" onClick={() => props.setCurrentDisplay("About")}>About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="text-decoration-none" onClick={() => props.setCurrentDisplay("Portfolio")}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-decoration-none" onClick={() => props.setCurrentDisplay("Contact")}>Contact</a>
                    </li>
                    <li>
                        <a href="#resume" className="text-decoration-none" onClick={() => props.setCurrentDisplay("Resume")}>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;