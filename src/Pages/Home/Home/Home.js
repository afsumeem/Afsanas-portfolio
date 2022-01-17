import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Navigation from '../../Navigation/Navigation';
import Banner from '../Banner/Banner';
import MyProjects from '../MyProjects/MyProjects/MyProjects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About />
            <Skills />
            <MyProjects />
            <Contact></Contact>
        </div>
    );
};

export default Home;