import React from 'react';
import './About.css';
import image from "../../image/image.png";
import AOS from 'aos';
AOS.init({
    delay: 0,
    duration: 1000,
});


const About = () => {
    return (
        <div id="about" className="container about-me-section text-start mt-4">
            <div className="row about-me">
                <div className="col-md-6"
                    data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <img src={image} alt="aboutImage" className='img-fluid' />
                </div>

                <div className="mt-4 col-md-6 ps-4"

                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
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