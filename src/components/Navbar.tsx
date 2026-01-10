import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
            <div className='container py-2 flex justify-center md:justify-between items-center'>
                <div className='text-2xl font-bold hidden md:inline'>Aaron Leeb</div>
                <div className='space-x-6'>
                    <a href="#about" className='hover:text-gray-400'>About</a>
                    <a href="#skills" className='hover:text-gray-400'>Skills</a>
                    <a href="#experience" className='hover:text-gray-400'>Experience</a>
                    <a href="#projects" className='hover:text-gray-400'>Projects</a>
                </div>
                <button className='bg-gradient-to-r from-blue-400 to-blue-800 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect</button>
            </div>
        </nav>
    );
};

export default Navbar;