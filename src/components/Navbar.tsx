import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-gradient-to-r from-sky-900 to-teal-900 text-white px-8 md:px-16 lg:px-48'>
                <div className='container py-4 flex justify-center md:justify-between items-center'>
                    <Link to="/" className='text-3xl font-bold hidden md:inline'>Aaron Leeb</Link>
                    <div className='space-x-8 text-lg'>
                        <Link to="/#about" className='hover:text-gray-300'>About</Link>
                        <Link to="/#experience" className='hover:text-gray-300'>Experience</Link>
                        <Link to="/#projects" className='hover:text-gray-300'>Projects</Link>

                        <Link to="/blog" className='hover:text-gray-300'>Blog</Link>
                        
                    </div>
                    <button className='bg-white text-zinc-800 hidden md:inline
                    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                        <a href="https://www.linkedin.com/in/aaron-leeb/" target="_blank" rel="noopener noreferrer">Connect</a></button>
                </div>
        </nav>
    );
};

export default Navbar;