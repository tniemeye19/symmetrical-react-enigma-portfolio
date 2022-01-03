import React from 'react';
import { Card } from 'react-bootstrap';
// HTMLCSSJavaScriptNode.jsExpress.jsMySQLMongoDBReactAngularTypeScriptWordExcelPowerpoint
import './style.css';
import jobs from './jobs.json';
import skills from './skills.js';

function Resume() {

    return(
        <section className="resume">
            <div className='skills row'>
                <h3>Skills</h3>
                <Card className='skills-card col-12'>
                    <Card.Body className='skills-card-body'>
                    {
                        skills && skills.length > 0 && skills.map((skill) => 
                        <Card.Text className="skills-card-text">
                            {skill.name}
                            <br />
                            <i>{skill.icon}</i>
                        </Card.Text>)
                    }
                    </Card.Body>
                </Card>
            </div>
            <div className='employment row justify-content-center'>
                <h3>Employment</h3>
                {
                    jobs && jobs.length > 0 && jobs.map((job) => 
                    <Card className='employment-card col-lg-5 col-md-12'>
                        <img src={require('../../assets/images/jobs/' + job.icon + '.jpg')} alt={job.employer}/>
                        <Card.Body>
                            <Card.Title className='employer'>{job.employer}</Card.Title>
                            <Card.Subtitle className='title'>{job.title}</Card.Subtitle>
                            <Card.Subtitle className='duration'>{job.duration}</Card.Subtitle>
                            <Card.Text className='description'>{job.description}</Card.Text>
                        </Card.Body>
                    </Card>)
                }
            </div>
        </section>
    )
}

export default Resume;