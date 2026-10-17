import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-gradient-to-r from-sky-900 to-teal-900 text-white px-2 sm:px-4 md:px-16 lg:px-48'>
                <div className='container mx-auto flex items-center justify-between gap-1 py-3 md:py-4'>
                    <Link to="/" className='shrink-0 whitespace-nowrap text-sm font-bold max-[380px]:text-xs sm:text-base md:text-3xl'>Aaron Leeb</Link>
                    <div className='flex min-w-0 flex-1 justify-center gap-2 whitespace-nowrap text-xs max-[380px]:gap-1.5 max-[380px]:text-[11px] sm:gap-3 md:gap-8 md:text-lg'>
                        <Link to="/#about" className='hover:text-gray-300'>About</Link>
                        <Link to="/#experience" className='hover:text-gray-300'>Experience</Link>
                        <Link to="/#projects" className='hover:text-gray-300'>Projects</Link>
                        <Link to="/blog" className='hover:text-gray-300'>Blog</Link>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/aaron-leeb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='shrink-0 whitespace-nowrap rounded-full bg-white px-2 py-1 text-xs text-zinc-800 transition-transform duration-300 hover:scale-105 max-[380px]:px-1.5 max-[380px]:text-[10px] sm:px-4 sm:py-2 sm:text-sm md:text-base'
                    >
                        Connect
                    </a>
                </div>
        </nav>
    );
};

export default Navbar;