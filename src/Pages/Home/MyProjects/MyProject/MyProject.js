import React, { useState } from 'react';
import { Card, Col, Button, Modal, Row, Container, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./MyProject.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const MyProject = ({ project }) => {

    const { _id, name, picture1, technology, desc, picture2, picture3, picture4, liveSite, githubClient, githubServer } = project;

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (

        <Col xs={12} sm={6} md={4}>
            <Card >
                <div className='myProject-details'>
                    <Card.Img variant="top" src={picture1} className="img-fluid myProject-thumbnail" />

                    <Card.Body className='myProject-hover-detail'>

                        <Card.Title className="mt-5 mb-3">
                            <Link to={liveSite} className="text-decoration-none"
                                style={{ "fontSize": "30px", "fontWeight": "600", "color": "white" }}
                            >
                                {name}
                            </Link>
                        </Card.Title>

                        <Button onClick={handleShow} className="w-50 p-2" style={{ "color": "#320037", "fontWeight": "600", "border": "1px solid #320037" }} >
                            View Details
                        </Button>
                    </Card.Body >
                </div>

                <Card.Footer className='myProject-button'>
                    <Link to={liveSite} target="blank" className="text-decoration-none  ">
                        <Button variant="none" className="w-100 border-0">
                            Live Preview
                        </Button>
                    </Link>
                </Card.Footer>

            </Card >

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Container>
                    <Row style={{ "backgroundColor": "#320037", "color": "white" }}>

                        <Col md={4} className="d-flex align-items-center justify-content-center py-4 ps-5">
                            <Carousel variant="dark" controls={false} indicators={false}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={picture2}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={picture3}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={picture4}
                                        alt="First slide"
                                    />
                                </Carousel.Item>

                            </Carousel>
                        </Col>
                        <Col md={8}>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter"
                                    style={{ "color": "white", "fontWeight": "600", "fontSize": "30px" }}
                                >
                                    {name}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Card.Text className="text-start">
                                    <span className="fw-bold"> Description </span>
                                    {desc}
                                </Card.Text>
                                <Card.Text className="text-start">
                                    <span className="fw-bold"> TECHNOLOGIES: </span>
                                    {technology}
                                </Card.Text>

                            </Modal.Body>

                            <Modal.Footer >
                                <Link to={liveSite} target="blank" className="text-decoration-none myProject-button">
                                    <Button variant="none" className="border-0 me-auto text-white">
                                        Live Preview
                                    </Button>
                                </Link>

                                <Link to={githubClient} target="blank" className="text-decoration-none myProject-button me-auto">
                                    <Button variant="none" className='text-white'>
                                        <FontAwesomeIcon icon={faGithub} className='me-1' />
                                        Github Client
                                    </Button>
                                </Link>
                                {
                                    githubServer &&

                                    <Link to={githubServer} target="blank" className="text-decoration-none myProject-button me-auto text-white">
                                        <Button variant="none" className='text-white'>
                                            <FontAwesomeIcon icon={faGithub} className='me-1' />
                                            Github Server
                                        </Button>
                                    </Link>

                                }
                            </Modal.Footer>
                        </Col>
                    </Row>
                </Container>

            </Modal>
        </Col >


    );
};

export default MyProject;