

const Skills = () => {
    const softSkills = ['Written & Oral Communication', 'Learn Quickly', 'Enthusiastic', 'Creative Problem Solver', 'Hard Worker', 'Adaptability', 'Time Management', 'Creativity'];

    return (
        <div className='bg-zinc-800 text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Skills</h2>

                <div className='grid md:grid-cols-2 gap-8'>
                    {/*Soft Skills*/}
                    <div>
                        <h3 className='text-2xl font-bold mb-6'>Soft Skills</h3>
                        <div className='grid grid-cols-2 gap-4'>
                            {softSkills.map((skill, index) => (
                                <div key={index} className='bg-zinc-700 p-4 rounded shadow text-center'>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>              
        </div>
    );
};

export default Skills;