import React, { useEffect, useState } from 'react';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import Banner from '../Banner/Banner';
import MyProjects from '../MyProjects/MyProjects/MyProjects';
import Skills from '../Skills/Skills';
import { Triangle } from 'react-loader-spinner'

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise((r) => setTimeout(r, 2000));
            setLoading((loading) => !loading);
        };
        loadData();
    }, []);

    if (loading) {
        return <div className='d-flex justify-content-center align-items-center'
            style={{ "height": "100vh" }}
        >
            <Triangle color="#74287b" height={100} width={200}
            />
        </div>
    }
    else {
        return (
            <div>
                <Navigation></Navigation>
                <Banner></Banner>
                <About />
                <Skills />
                <MyProjects />
                <Contact></Contact>
                <Footer />
            </div>
        );
    }

};

export default Home;