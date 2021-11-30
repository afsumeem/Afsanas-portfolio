import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyProject = ({ project }) => {

    const { _id, name, picture1, technology, liveSite, githubClient, githubServer } = project;

    return (

        <Col xs={12} sm={6} md={4}>
            <Card >
                <Card.Img variant="top" src={picture1} className="img-fluid " />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-start">
                        <span className="fw-bold"> TECHNOLOGIES: </span>
                        {technology}
                    </Card.Text>

                    <Button variant="outline-primary" className="m-1">
                        <a href={liveSite} target="blank" className="text-decoration-none text-dark fw-bold">Live Site</a>
                    </Button>
                    <Button variant="outline-primary" className="m-1">
                        <a href={githubClient} className="text-decoration-none text-dark fw-bold" target="blank">Github Client</a>
                    </Button>

                    <Button variant="outline-info" className="m-1">
                        <a href={githubServer} className="text-decoration-none text-dark fw-bold" target="blank">Github Server</a>
                    </Button>

                </Card.Body>

                <Button className="w-100 p-2" style={{ backgroundColor: '#3A023B' }} >
                    <Link to={`/project/${_id}`} className="text-decoration-none text-white">
                        See Details
                    </Link>
                </Button>
            </Card>
        </Col >


    );
};

export default MyProject;