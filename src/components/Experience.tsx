import React from "react";

const Experience = () => {
    const experience = [
        {
            title: "QA Engineer Intern",
            company: "Maverick Software Consulting",
            period: "May 2025 - Present",
            description: "• Work on projects for Legal Research Development team at Thomson Reuters using Java and C#\n" +
            "• Run and analyze regression suites and document results in Report Portal to ensure less than 1% error rate\n" +
            "• Write unit tests in Java using testing modules (e.g., Junit) to verify newly implemented API features\n" +
            "• Decrease high and critical vulnerabilities identified by SNYK in APIs, JARs, and microservices by 100%\n" +
            "• Added logging functionality to improve monitoring of APIs using Datadog",
            skills: ["Testing", "APIs", "Java", "C#", "SNYK", "Junit", "Datadog"]
        },

        {
            title: "MavPass Leader",
            company: "Minnesota State University, Mankato",
            period: "Jan 2025 - Dec 2026",
            description: "•	Facilitate hands-on learning sessions for students taking Algorithms in Python\n" +
            "• Create weekly lesson plans that incorporate engaging activities to help students understand course content\n" +
            "• Attend training to further develop facilitation skills and methods for planning sessions",
            skills: ["Leadership", "Python", "Communication", "Algorithms", "Facilitation"]
        }
    ];

    return (
        <div className='bg-zinc-800 text-white py-32' id='experience'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='bg-sky-900 px-12 py-8 justify-center rounded mb-8 mx-auto block shadow-xl shadow-black/30'>
                    <h2 className='text-4xl font-bold text-center'>Experience</h2>
                </div>

                <div className='grid md:grid-cols-2 gap-8'>
                    {experience.map((exp, index) => (
                        <div key={index} className='bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-zinc-600 transition-shadow'>
                            <h3 className='text-2xl font-bold text-white mb-2'>{exp.title}</h3>
                            <p className='text-lg text-gray-200 mb-2'>{exp.company}</p>
                            <p className='text-sm text-gray-400 mb-4'>{exp.period}</p>
                            <p className='text-base mb-4 whitespace-pre-line'>{exp.description}</p>
                            <div className='flex flex-wrap gap-2'>
                                {exp.skills.map((skill, idx) => (
                                    <span key={idx} className='bg-sky-900 px-3 py-1 rounded-full text-sm'>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;