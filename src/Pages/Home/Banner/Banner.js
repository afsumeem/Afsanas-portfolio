import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogleDrive, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Container, Row } from 'react-bootstrap';
import bannerImg from '../../../image/Inkedmeem_LI.jpg'
import { Typewriter } from 'react-simple-typewriter'
import Particles from "react-tsparticles";
AOS.init({
    duration: 1000
});

const Banner = () => {
    const particlesInit = (main) => {
        console.log(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className="text-start banner">
            <div
                className='particleSection'
            >
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}

                    options={{
                        fpsLimit: 80,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "bubble",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 100,
                                    duration: 2,
                                    opacity: 0.5,
                                    size: 20,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 60,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#242124",
                            },
                            links: {
                                color: "#1a031b",
                                distance: 100,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "bottom",
                                enable: true,
                                outMode: "bounce",
                                random: true,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 600,
                                },
                                value: 150,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />


            </div>
            <Container className="container mb-5">
                <Row className="mt-5 banner-section">
                    <div className="col-md-7 mt-5 col-sm-12 col-xs-12">
                        <div className=" banner-content text-white">
                            <p className="fs-5">Hello, I'm</p>
                            <h1 className="mb-4 banner-title">AFSANA MEEM</h1>
                            <h5 className="mb-4">CREATIVE
                                <Typewriter
                                    loop
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={100}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                    words={[" FRONT-END WEB DEVELOPER", " WEB DESIGNER "]}
                                />
                            </h5>
                            <Button variant="none" className="mb-2 resume-button">

                                <a className="text-decoration-none button-title" href="https://drive.google.com/uc?export=download&id=1NqJ0zJYUErByxdLrbgqIVSAMFnKks24_" download>

                                    Download Resume

                                </a>
                            </Button><br />


                            <div>
                                <a href="https://github.com/afsumeem" className="me-2 fs-3 text-white" target="blank" title='Github'>
                                    <FontAwesomeIcon icon={faGithub}
                                        data-aos="fade-right"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/in/afsanameem/" className="mx-2 fs-3 text-info" target="blank" title='LinkedIn'>
                                    <FontAwesomeIcon icon={faLinkedin}
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine"
                                    />
                                </a>
                                <a href="https://web.facebook.com/afsana.meembd/" className="mx-2 fs-3 text-primary" target="blank" title='Facebook'>
                                    <FontAwesomeIcon icon={faFacebook}
                                        data-aos="fade-left"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine"
                                    />
                                </a>
                                <a href="https://drive.google.com/file/d/1NqJ0zJYUErByxdLrbgqIVSAMFnKks24_/view?usp=sharing" className="mx-2 fs-3 text-primary" target="blank" title='Resume Link'>
                                    <FontAwesomeIcon icon={faGoogleDrive}
                                        data-aos="fade-up"
                                        data-aos-offset="300"
                                        data-aos-easing="ease-in-sine"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-12 col-xs-12 m-0 p-0">
                        <div>
                            <img src={bannerImg} alt="bannerImage" className="img-fluid d-block mx-auto banner-image rounded-circle"
                                style={{ "zIndex": "1" }}
                            />
                        </div>
                    </div>

                </Row>
            </Container>
            <hr className=' w-75 d-block m-auto' />
        </div>
    );
};

export default Banner;