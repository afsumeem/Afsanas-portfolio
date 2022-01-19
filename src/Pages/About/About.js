import React from 'react';
import './About.css';
import image from "../../image/image.png";

const About = () => {
    return (
        <div id="about" className="container about-me-section text-start mt-5">
            <div className="row about-me">
                <div className="col-md-6">
                    <img src={image} alt="aboutImage" className='img-fluid' />
                </div>

                <div className="mt-4 col-md-6 ps-4">
                    <h3 className="section-title mb-5">ABOUT ME</h3>
                    <p className="text-white">I’m Afsana Meem, a professional and Creative Web Designer with front end development skills.
                        I develop websites with HTML, CSS, JavaScript, React.JS.
                        <br /><br />
                        I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.</p>
                </div>
            </div>
        </div >
    );
};

export default About;