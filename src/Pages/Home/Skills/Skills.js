import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import htmlLogo from "../../../image/skills/html.png";
import cssLogo from "../../../image/skills/css.png";
import bootstrap from "../../../image/skills/bootstrap-tutorial.png";
import jsLogo from "../../../image/skills/images.png";
import reactLogo from "../../../image/skills/reactpng.png";
import nodeLogo from "../../../image/skills/node.png";
import mongo from "../../../image/skills/mongo.png";
import firebaseLogo from "../../../image/skills/firebase.png";
import gitLogo from "../../../image/skills/git.png";
import expressLogo from "../../../image/skills/express-routing-logo.png";
import tailwindLogo from "../../../image/skills/pluginIcon.png";
import material from "../../../image/skills/material.png";
import "./Skills.css";

const Skills = () => {
    return (
        <Container className='pt-5'>
            <div className="my-5">
                <h3 className="section-title text-start">SKILLS</h3>
            </div>

            <Row g={5} className='mb-3'
                style={{ "paddingLeft": "100px", "paddingRight": "100px" }}

            >
                <Col md={2} sm={6} xs={12} className='flip-card'>
                    <div className='skills mb-2 flip-card-inner'>
                        <img src={htmlLogo} alt="" className='flip-front' />
                        <h5>HTML5</h5>
                    </div>
                </Col>

                <Col md={2} sm={6} xs={12} className='flip-card'>
                    <div className='skills mb-2 flip-card-inner'>
                        <img src={cssLogo} alt="" className='flip-front' />
                        <h5>CSS5</h5>
                    </div>
                </Col>

                <Col md={2} sm={6} xs={12} className='flip-card'>
                    <div className='skills mb-2 flip-card-inner'>
                        <img src={bootstrap} alt="" className='flip-front' />
                        <h5>Bootstrap</h5>
                    </div>
                </Col>

                <Col md={2} sm={6} xs={12} className='flip-card'>
                    <div className='skills mb-2 flip-card-inner'>
                        <img src={jsLogo} alt="" className='flip-front' />
                        <h5>JavaScript</h5>
                    </div>
                </Col>

                <Col md={2} sm={6} xs={12} className='flip-card'>
                    <div className='skills mb-2 flip-card-inner'>
                        <img src={reactLogo} alt="" className='flip-front' />
                        <h5>React.Js</h5>
                    </div>
                </Col>
                <Col md={2} sm={6} xs={12} className='flip-card'>
                    <div className='skills mb-2 flip-card-inner'>
                        <img src={firebaseLogo} alt="" className='flip-front' />
                        <h5>Firebase</h5>
                    </div>
                </Col>

            </Row>

            <Row g={5}
                style={{ "paddingLeft": "100px", "paddingRight": "100px" }}

            >
                <Col md={2} sm={6} xs={12} className='flip-card'>
                    <div className='skills mb-2 flip-card-inner'>
                        <img src={nodeLogo} alt="" className='flip-front' />
                        <h5>Node.Js</h5>
                    </div>
                </Col>

                <Col md={2} sm={6} xs={12} className='flip-card'>
                    <div className='skills mb-2 flip-card-inner'>
                        <img src={expressLogo} alt="" className='flip-front' />
                        <h5>Express.Js</h5>
                    </div>
                </Col>

                <Col md={2} sm={6} xs={12} className='flip-card'>
                    <div className='skills mb-2 flip-card-inner'>
                        <img src={gitLogo} alt="" className='flip-front' />
                        <h5>Github</h5>
                    </div>
                </Col>

                <Col md={2} sm={6} xs={12} className='flip-card'>
                    <div className='skills mb-2 flip-card-inner'>
                        <img src={mongo} alt="" className='flip-front' />
                        <h5>MongoDB</h5>
                    </div>
                </Col>

                <Col md={2} sm={6} xs={12} className='flip-card'>
                    <div className='skills mb-2 flip-card-inner'>
                        <img src={tailwindLogo} alt="" className='flip-front' />
                        <h5>Tailwind CSS</h5>
                    </div>
                </Col>
                <Col md={2} sm={6} xs={12} className='flip-card'>
                    <div className='skills mb-2 flip-card-inner'>
                        <img src={material} alt="" className='flip-front' />
                        <h5>Material UI</h5>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default Skills;