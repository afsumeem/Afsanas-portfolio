import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Navigation from '../../Navigation/Navigation';
import blogOne from '../../../image/react.png';
import blogTwo from '../../../image/crud.png';
import { NavLink } from 'react-router-dom';

const Blogs = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className='mt-5 text-start ms-5'>
                <h2 className='pt-5'>Blogs</h2>
            </div>

            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={4} xs={12}>

                        <Card className=' text-white' style={{ 'backgroundColor': '#3A023B' }}>
                            <Card.Img variant="top" src={blogOne} className='img-fluid' style={{ 'height': '220px' }} />
                            <Card.Body>
                                <Card.Title>React Component's Lifecycle</Card.Title>
                                <Card.Text className='text-start p-2 mt-3'>
                                    Components in react are mounted (created) on the DOM and it grow by updating, then unmount (die) on DOM. This is called component lifecycle.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className=' border-top'>
                                <NavLink to="/reactDetails" className="text-decoration-none text-white">
                                    <small className="">View Details</small>
                                </NavLink>

                            </Card.Footer>
                        </Card>

                    </Col>
                    <Col xs={12} md={4}>
                        <Card className='text-white' style={{ 'backgroundColor': '#3A023B' }}>
                            <Card.Img variant="top" src={blogTwo} className='img-fluid' style={{ 'height': '220px' }} />
                            <Card.Body>
                                <Card.Title>CRUD Operations</Card.Title>
                                <Card.Text className='text-start p-2 mt-3'>
                                    MongoDB allows us to interact and manage with data through four fundamental types of data operations which are called CRUD operations.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className='border-top'>
                                <NavLink to="/crudDetails" className="text-decoration-none text-white">
                                    <small className="">View Details</small>
                                </NavLink>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </>
    );
};

export default Blogs;