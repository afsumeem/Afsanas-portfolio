import React from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Navigation from '../../Navigation/Navigation';
import Banner from '../Banner/Banner';
import MyProjects from '../MyProjects/MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About />
            <MyProjects />
            <Contact></Contact>
        </div>
    );
};

export default Home;