const Experience = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Work Experience</h1>
            <hr className="border-t border-gray-300 mb-4" />
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-1">iOS Developer</h2>
                <p className="text-gray-700">Amano Technologies - Provo, UT</p>
                <p className="text-gray-600">Feb 2025 - Present</p>
                <ul className="list-disc list-inside">
                    <li className="text-sm">
                        Designed and developed a comprehensive "Alerts" page
                        with dynamic table views, service entry tracking, and
                        tab bar badge integration, significantly improving user
                        engagement and response times.
                    </li>
                    <li className="text-sm">
                        Implemented a two-stage loading and caching mechanism,
                        drastically reducing load times for dashboards and
                        property details, and eliminating redundant network
                        calls on the notifications page.
                    </li>
                    <li className="text-sm">
                        Refactored the networking layer for enhanced resilience,
                        incorporating advanced error handling, comprehensive
                        logging, and improved user experience on slower
                        connections via adjusted timeouts.
                    </li>
                    <li className="text-sm">
                        Developed features and new endpoints for Amano's Node.js
                        API, including new salt cell feature, integrating with a
                        Firebase NoSQL database hosted on Google Cloud.
                    </li>
                </ul>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-1">Web Dev Lab Aide</h2>
                <p className="text-gray-700">
                    Salt Lake Community College - Taylorsville, UT
                </p>
                <p className="text-gray-600">Jan 2025 - Present</p>
                <ul className="list-disc list-inside">
                    <li className="text-sm">
                        Provided comprehensive instructional support for web
                        development courses, covering essential technologies
                        such as HTML, CSS, JavaScript, WordPress, PHP, and
                        Figma.
                    </li>
                    <li className="text-sm">
                        Led engaging weekly lab sessions, guiding students
                        through complex homework assignments and classwork,
                        fostering a deeper understanding of web development
                        principles and practical application.
                    </li>
                    <li className="text-sm">
                        Developed and implemented detailed grading rubrics for
                        coursework, ensuring fair and consistent evaluation of
                        student performance and progress while providing
                        constructive feedback.
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-1">Web Developer</h2>
                <p className="text-gray-700">
                    ZwiCoat Materials Innovations - Remote
                </p>
                <p className="text-gray-600">Sept 2024 - May 2025</p>
                <ul className="list-disc list-inside">
                    <li className="text-sm">
                        Spearheaded the end-to-end development and successful
                        launch of Zwicoat's medical technology website,
                        leveraging React, React Router, Tanstack Query, HTML,
                        CSS, and JavaScript to deliver a modern and functional
                        platform.
                    </li>
                    <li className="text-sm">
                        Managed project timelines and maintained high code
                        quality through diligent use of GitHub for version
                        control and collaborative development, ensuring timely
                        delivery and long-term maintainability.
                    </li>
                    <li className="text-sm">
                        Engineered a fully responsive website layout,
                        significantly improving user experience across all
                        devices and optimizing for search engine discoverability
                        (SEO) to increase online visibility.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;
