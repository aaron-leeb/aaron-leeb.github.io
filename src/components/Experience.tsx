import { Link } from 'react-router-dom';

const Experience = () => {
    const experience = [
        {
            title: "Fellow",
            company: <a href="https://btrust.tech" className="relative z-20 hover:text-blue-400 transition-colors duration-200" 
            target="_blank" rel="noopener noreferrer">BTrust</a>,
            period: "Aug 2026 - Present",
            description: "• Contribute to Bitcoin Core and Sparrow Wallet through regression testing, debugging, and code reviews\n" +
            "• Develop Python functional tests for Bitcoin Core, covering wallet startup behavior and block filter RPC edge cases\n" +
            "• Write Java/JUnit tests for Sparrow Wallet, validating UR descriptor exports, multisig configurations, and wallet interoperability\n" +
            "• Analyze C++, Python, and Java codebases to identify edge cases, improve test coverage, and prevent regressions\n" +
            "• Collaborate with open-source maintainers through pull requests, technical discussions, and iterative code reviews\n" +
            "• Participate in weekly learning sessions and homegroup meetings",
            skills: ["Bitcoin Core", "Sparrow Wallet", "C++", "Python", "Java", "GitHub"]
        },

        {
            title: "Software Engineer Intern",
            company: <a href="https://mavericksoftwareconsulting.com" className="hover:text-blue-400 transition-colors duration-200" 
            target="_blank" rel="noopener noreferrer">Maverick Software Consulting</a>,
            period: "May 2025 - Present",
            description: "• Work on projects for Legal Research Development team at Thomson Reuters using Java and C#\n" +
            "• Run and analyze regression suites and document results in Report Portal to ensure less than 1% error rate\n" +
            "• Write unit tests in Java using testing modules (e.g., Junit) to verify newly implemented API features\n" +
            "• Decrease high and critical vulnerabilities identified by SNYK in APIs, JARs, and microservices by 100%\n" +
            "• Add logging functionality to improve monitoring of APIs using Datadog",
            skills: ["Testing", "APIs", "Java", "C#", "SNYK", "Junit", "Datadog"]
        },

        {
            title: "MavPass Leader",
            company: <a href="https://mankato.mnsu.edu/academics/academic-support/student-support-centers/maverick-peer-facilitated-academic-support-system/" 
            className="hover:text-blue-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">Minnesota State University, Mankato</a>,
            period: "Jan 2025 - Dec 2026",
            description: "•	Facilitated hands-on learning sessions for students taking Algorithms in Python\n" +
            "• Created weekly lesson plans that incorporate engaging activities to help students understand course content\n" +
            "• Attended training to further develop facilitation skills and methods for planning sessions",
            skills: ["Leadership", "Python", "Communication", "Algorithms", "Facilitation"]
        }
    ];

    return (
        <div className='bg-zinc-800 text-white py-20'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <div className='bg-sky-900 px-12 py-8 justify-center rounded mb-8 mx-auto block shadow-xl shadow-black/30 scroll-mt-4' id='experience'>
                    <h2 className='text-4xl font-bold text-center'>Experience</h2>
                </div>

                <div className='grid md:grid-cols-2 gap-8'>
                    {experience.map((exp, index) => (
                        <div key={index} className='relative bg-zinc-700 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-200'>
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
                            {exp.title === "Fellow" && (
                                <Link
                                    to="/showcase"
                                    aria-label="Open BTrust Fellowship showcase"
                                    className="absolute inset-0 z-10 rounded-lg focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-700"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;