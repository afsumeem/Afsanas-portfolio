import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';
import logo from "../../image/images.png"

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="fixed-top" style={{ 'backgroundColor': '#000000', 'boxShadow': "rgba(59, 59, 59, 0.35) 0px -50px 36px -28px inset" }}>
            <Container>

                <Navbar.Brand href="/home" className="nav-title"><img src={logo} alt=""
                    style={{ "height": "60px", "width": "60" }}
                /></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/home" className="text-decoration-none fs-5 m-2 menu-item">Home</NavLink>

                        <NavLink to="/allProject" className="text-decoration-none fs-5 m-2 menu-item">Projects</NavLink>

                        <NavLink to="/blog" className="text-decoration-none fs-5 m-2 menu-item">Blog</NavLink>

                        <HashLink smooth to="/home#contact" className="text-decoration-none fs-5 m-2 menu-item">Contact</HashLink>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
};

export default Navigation;