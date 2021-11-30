import React from 'react';
import './About.css'

const About = () => {
    return (
        <div id="about" className="container about-me-section text-start">

            <h3 className="about-me-title">ABOUT ME</h3>

            <div className="row about-me">

                <div className="ms-5 mt-4 col-md-6">
                    <p className="px-5">I’m Afsana Meem, a professional and Creative Web Designer with front end development skills.
                        I develop websites with HTML, CSS, JavaScript, React.JS.
                        <br /><br />
                        I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.</p>
                </div>

            </div>
            <div className="break my-5"></div>
        </div>
    );
};

export default About;