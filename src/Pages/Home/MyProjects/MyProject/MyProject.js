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
                    <Card.Title className="my-3 fw-bold">{name}</Card.Title>
                    <Card.Text className="text-start">
                        <span className="fw-bold"> TECHNOLOGIES: </span>
                        {technology}
                    </Card.Text>
                    <a href={liveSite} target="blank" className="text-decoration-none text-dark fw-bold">
                        <Button variant="light" style={{ border: '1px solid #3A023B' }} className="m-1">
                            Live Site
                        </Button>
                    </a>
                    <a href={githubClient} target="blank" className="text-decoration-none text-dark fw-bold">
                        <Button variant="light" style={{ border: '1px solid #3A023B' }} className="m-1">
                            Github Client
                        </Button>
                    </a>
                    <a href={githubServer} target="blank" className="text-decoration-none text-dark fw-bold">
                        <Button variant="light" style={{ border: '1px solid #3A023B' }} className="m-1">
                            Github Server
                        </Button>
                    </a>
                </Card.Body>
                <Link to={`/project/${_id}`} className="text-decoration-none text-white">
                    <Button className="w-100 p-2" style={{ backgroundColor: '#3A023B' }} >
                        See Details
                    </Button>
                </Link>

            </Card>
        </Col >


    );
};

export default MyProject;