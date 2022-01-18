import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import './MyProjects.css';
import MyProject from '../MyProject/MyProject'


const MyProjects = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setProjects(data.slice(0, 3)))
    }, []);


    return (
        <div className="container pt-5">
            <div className="project-header my-5">
                <h3 className="section-title text-start">MY PROJECTS</h3>
            </div>

            <div className="project-details">
                <Row>
                    {
                        projects.map(project => <MyProject
                            key={project._id}
                            project={project}
                        ></MyProject>)
                    }
                </Row>
            </div>

            <div className="break my-5"></div>
        </div>
    );
};

export default MyProjects;