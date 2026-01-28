import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-gradient-to-r from-sky-900 to-teal-900 text-white px-8 md:px-16 lg:px-24'>
                <div className='container py-4 flex justify-center md:justify-between items-center'>
                    <div className='text-3xl font-bold hidden md:inline'>Aaron</div>
                    <div className='space-x-8 text-lg'>
                        <a href="#about" className='hover:text-gray-300'>About</a>
                        <a href="#experience" className='hover:text-gray-300'>Experience</a>
                        <a href="#projects" className='hover:text-gray-300'>Projects</a>
                    </div>
                    <button className='bg-white text-zinc-800 hidden md:inline
                    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                        <a href="https://www.linkedin.com/in/aaron-leeb/" target="_blank" rel="noopener noreferrer">Connect</a></button>
                </div>
        </nav>
    );
};

export default Navbar;