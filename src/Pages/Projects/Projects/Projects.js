import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Navigation from '../../Navigation/Navigation';
import Project from '../Project/Project';

const Projects = () => {
    const [allProjects, setAllProjects] = useState([])

    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setAllProjects(data))
    }, []);
    return (
        <div>
            <Navigation></Navigation>
            <div className="container">

                <div className="project-header my-5">
                    <h3 className="project-title text-start">PROJECTS</h3>
                </div>

                <div className="project-details">
                    <Row>
                        {
                            allProjects.map(allProject => <Project
                                key={allProject._id}
                                allProject={allProject}
                            ></Project>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Projects;