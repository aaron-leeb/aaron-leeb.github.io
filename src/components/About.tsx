import AboutImage from '../assets/Headshot1.jpg';

const About = () => {
    return (
        <div className='bg-zinc-800 text-white py-32'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='bg-sky-900 px-12 py-8 justify-center rounded mb-8 mx-auto block shadow-xl shadow-black/30 scroll-mt-4' id='about'>
                    <h2 className='text-4xl font-bold text-center'>About Me</h2>
                </div>
                <div className='flex flex-col md:flex-row items-center md:space-x-24'>
                    <img src={AboutImage} alt="Headshot" 
                    className='w-72 h-84 rounded object-cover mb-8 md:mb-0'/>
                    <div className='flex-1'>
                        <p className='text-lg mb-16'>
                        <br /><br />Through my upper division coursework in computer science, I have gained hands on experience designing and developing <strong>full stack applications</strong>, utilizing <strong>agile methodologies</strong> throughout the lifecycle of a project, from planning and architecture to testing and deployment. These experiences strengthened my ability to write <strong>clean and maintainable code</strong>, collaborate effectively on teams, and solve complex technical problems under real constraints.

                        <br /><br />In addition to my academic work, I have contributed to professional software projects for <strong>Thomson Reuters</strong>, where I worked in a collaborative engineering environment to test, validate, and support production level code. This experience has provided exposure to industry standards, <strong>continuous integration and deployment</strong> workflows, <strong>regression testing</strong>, and the importance of clear communication when working with senior engineers and cross functional teams. It also reinforced my ability to quickly understand existing systems and contribute meaningfully to ongoing development efforts.

                        <br /><br />Outside of my academics and internship, I have taken part in the <strong>Bitcoin open source challenge</strong> to learn how to contribute to <strong>open source Bitcoin projects</strong>. I have also worked on personal projects involving <strong>decentralized technologies</strong> and <strong>embedded systems</strong>, including building and maintaining my own <strong>Bitcoin infrastructure</strong>, running a node, managing mining hardware, and developing tools around <strong>self sovereign systems</strong>. In addition, I have explored projects using <strong>microcontrollers</strong> and <strong>mesh networking</strong> to experiment with <strong>low level communication protocols</strong>.

                        <br /><br />I am particularly drawn to opportunities at the intersection of <strong>software engineering</strong>, <strong>networking</strong>, <strong>embedded systems</strong>, and <strong>decentralization</strong>, where I can continue building systems that are not only technically sound, but also empower users with greater control and transparency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;