import React from 'react';
import Project from '../Project';
import './style.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <div>
                <h2>Portfolio</h2>
                <Project />
            </div>
        </section>
    )
}

export default Portfolio;