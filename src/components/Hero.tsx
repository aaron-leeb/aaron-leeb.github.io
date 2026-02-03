import heroImage from '../assets/Placeholder pic 1.jpg';

const Hero = () => {
    return (
        <div className='bg-zinc-800 text-white text-center py-32'>
            <img src={heroImage} alt="Hero" className='mx-auto mb-8 w-48 rounded-full object-cover
            transform transition-transform duration-300 hover:scale-105'/>
            <h1 className='text-4xl font-bold'>
                I'm {" "}
                <span className='text-transparent bg-clip-text bg-sky-700'>Aaron Leeb</span>
                , a Computer Science student 
                pursuing a career as a Software Developer.
            </h1>
            <p className='mt-16 text-lg text-gray-100 px-4 md:px-32'>
                I am looking for an internship at a company focused on
                innovative and impactful software solutions.
            </p>
            <div className='mt-24 space-x-8'>
                <button
                className='bg-gradient-to-r from-sky-900 to-teal-900 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>View My Work</button>
                <button className='bg-gradient-to-r from-sky-900 to-teal-900 text-white hidden md:inline
                transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                    <a href="Leeb_Aaron_Resume.pdf" download className='text-white no-underline'>Download Resume</a>
                </button>
            </div>
        </div>
    );
};

export default Hero;