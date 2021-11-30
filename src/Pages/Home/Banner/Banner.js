import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'react-bootstrap';
import bannerImg from '../../../image/meem.jpg'
import { Typewriter } from 'react-simple-typewriter'
AOS.init();

const Banner = () => {

    return (
        <div className="text-start banner">
            <div className="container mb-5">

                <div className="row mt-5 banner-section">
                    <div className="col-md-7 mt-5 col-sm-12 col-xs-12 " data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">

                        <div className="ps-5 pt-5">
                            <p className="fs-5">Hello I'm</p>
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
                            <Button variant="outline-info" className="mb-2" onClick={alert}>
                                <a className="text-decoration-none button-title" href="./Afsana Meem(resume).pdf " download> Download Resume</a>
                            </Button><br />
                            <div className="ms-2">
                                <a href="https://github.com/afsumeem" className="mx-2 fs-3 text-dark" target="blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="https://www.linkedin.com/in/afsana-meem-a8a7b3148/" className="mx-2 fs-3 text-info" target="blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://web.facebook.com/afsana.meembd/" className="mx-2 fs-3 text-primary" target="blank">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-12 col-xs-12 m-0 p-0">
                        <div data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">

                            <img src={bannerImg} alt="bannerImage" className="mt-5 img-fluid d-block mx-auto banner-image rounded-circle w-100" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="break mb-5"></div>
        </div>
    );
};

export default Banner;