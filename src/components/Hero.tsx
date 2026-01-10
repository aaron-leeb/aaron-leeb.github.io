import React from "react";
//import heroImage from '../assets/hero-image.png';

const Hero = () => {
    return (
        <div className='bg-black text-white text-center py-16'>
            <img src="" alt="Hero" className='mx-auto mb-8 w-48 rounded-full object-cover
            transform transition-transform duration-300 hover:scale-105'/>
            <h1 className='text-4xl font-bold'>
                I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-800'>Aaron Leeb</span>
                , a Computer Science student 
                pursuing a career as a Software Developer.
            </h1>
            <p className='mt-4 text-lg text-gray-300 px-4 md:px-32'>
                I am interested in contributing to a company focused on
                innovative and impactful software solutions.
            </p>
            <div>
                <button>View My Work</button>
                <button>Download Resume</button>
            </div>
        </div>
    );
};

export default Hero;