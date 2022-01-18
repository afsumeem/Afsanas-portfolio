import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Button, Form, Row } from 'react-bootstrap';
import swal from 'sweetalert';


function Contact() {

    const [state, handleSubmit] = useForm("xjvlbeen");
    if (state.succeeded) {
        swal("Sent!", "Your Message Sent Successfully!", "success");
    }

    return (
        <div id="contact" className="container mb-5">
            <div className="text-start my-5">
                <h3 className="section-title">CONTACT</h3>
            </div>
            <Row>
                <Form onSubmit={handleSubmit} className=" ms-start col-md-6">
                    <input
                        placeholder="Your Name"
                        className="w-75 mx-auto"
                        id="name"
                        type="text"
                        name="name"
                    />

                    <ValidationError
                        prefix="Name"
                        field="text"
                        errors={state.errors}
                    />


                    <br />
                    <br />

                    <input
                        placeholder="Your Email"
                        className="w-75 p-2"
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <br />
                    <br />

                    <textarea
                        placeholder="Your Message"
                        className="w-75 p-2"
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <br />
                    <br />
                    <Button type="submit" variant="none" className="w-75 formButton" disabled={state.submitting}>
                        Submit
                    </Button>
                </Form>

                <div className="col-md-6 ps-5 mt-5">
                    <h5 className="pt-4 text-white">Feeling social? Find me on these online spaces too!</h5>

                    <div className="ms-2">
                        <a href="https://github.com/afsumeem" className="mx-2 fs-2 text-dark" target="blank">
                            <FontAwesomeIcon icon={faGithub} className='text-white' />
                        </a>
                        <a href="https://www.linkedin.com/in/afsana-meem-a8a7b3148/" className="mx-2 fs-2 text-info" target="blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://web.facebook.com/afsana.meembd/" className="mx-2 fs-2 text-primary" target="blank">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>

                </div>
            </Row>


        </div >

    );
}
function App() {
    return (
        <Contact />
    );
}
export default App;
