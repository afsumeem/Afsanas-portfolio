import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './Detail.css';

const Detail = ({ projectDetail }) => {

    const { name, picture2, picture3, picture4, technology, liveSite, githubClient, githubServer, desc } = projectDetail;

    return (
        <Container className="py-5">
            <Row>
                <div className="col-md-6 text-start bg-primary bg-opacity-25 pb-5">
                    <h2 className="py-4 project-title">{name}</h2>
                    <p><span className="fs-5 fw-bold">Description: </span><br /><br />{desc}</p>

                    <p><span className="fs-5 fw-bold">Technologies: </span><br /><br />{technology}</p>

                    <div>
                        <p className="fs-5 fw-bold">Links: </p>
                        <a href={liveSite} target="blank" className="text-decoration-none text-dark fw-bold w-25 m-1">
                            <Button className="border-0" style={{ backgroundColor: '#3A023B' }}>Live Site</Button>
                        </a>

                        <a href={githubClient} target="blank" className="text-decoration-none text-dark fw-bold w-25 m-1">
                            <Button className="border-0" style={{ backgroundColor: '#3A023B' }}>Github Client side</Button>
                        </a>

                        <a href={githubServer} target="blank" className="text-decoration-none text-dark fw-bold w-25 m-1">
                            <Button className="border-0" style={{ backgroundColor: '#3A023B' }}>Github Server Side</Button>
                        </a>

                    </div>

                </div>

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <img className="img-fluid mb-2" src={picture2} alt="" />
                        </div>

                        <div className="col-md-6">
                            <img className="img-fluid mb-2" src={picture3} alt="" />
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src={picture4} alt="" />
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Detail;