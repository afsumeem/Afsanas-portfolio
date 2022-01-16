import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="fixed-top" style={{ 'backgroundColor': '#000000', 'boxShadow': "rgb(21, 21, 21) 0px 25px 20px -20px" }}>
            <Container>
                <Navbar.Brand href="#home" className="nav-title text-center text-white">AFSANA MEEM</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/home" className="text-decoration-none fs-5 m-2 menu-item">Home</NavLink>

                        <HashLink smooth to="/home#about" className="text-decoration-none fs-5 m-2  menu-item">About</HashLink>

                        <NavLink to="/allProject" className="text-decoration-none fs-5 m-2 menu-item">Projects</NavLink>

                        <NavLink to="/blog" className="text-decoration-none fs-5 m-2 menu-item">Blog</NavLink>

                        <HashLink smooth to="/home#contact" className="text-decoration-none fs-5 m-2 menu-item">Contact</HashLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;