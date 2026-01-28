import React from "react";
import AboutImage from '../assets/Placeholder pic 2.jpg';

const About = () => {
    return (
        <div className='bg-zinc-800 text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-24'>
                    <img src={AboutImage} alt="Photo" 
                    className='w-72 h-84 rounded object-cover mb-8 md:mb-0'/>
                    <div className='flex-1'>
                        <p className='text-lg mb-16'>
                        I am a passionate developer with experience in building web applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;