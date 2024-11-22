import React from 'react';

import About from '../components/About/About';
import Slider from '../components/slider/Slider';
import SuccessSection from '../components/Success/SuccessSection';
import Contact from '../components/Contact/Contact';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <h2 className='py-6 text-2xl font-bold text-center'>About</h2>
            <About></About>


            <SuccessSection></SuccessSection>

            <Contact></Contact>
        </div>
    );
};

export default Home;