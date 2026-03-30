const Experience = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Work Experience</h1>
      <hr className="border-t border-gray-300 mb-4" />
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-1">SDET 1</h2>
        <p className="text-gray-700">
          Verisk Property Estimating Solutions (Xactware) - Lehi, UT
        </p>
        <p className="text-gray-600">Jan 2026 - Current</p>
        <ul className="list-disc list-inside">
          <li className="text-sm">
            Engineered comprehensive automated testing solutions, including UI,
            Unit, and Integration tests, within a custom Java automation
            repository to ensure high quality delivery cycles.
          </li>
          <li className="text-sm">
            Optimized test suite stability and performance by debugging legacy
            Java/TestNG suites, reducing the failure rate by 74%.
          </li>
          <li className="text-sm">
            Architected and spearheaded a greenfield migration from Java to a
            modern TypeScript and Playwright framework, streamlining the
            execution of E2E UI and API unit tests for better scalability and
            stability.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-1">Junior Web Developer</h2>
        <p className="text-gray-700">Atonom AI - Provo, UT</p>
        <p className="text-gray-600">Aug 2025 - Current</p>
        <ul className="list-disc list-inside">
          <li className="text-sm">
            Collaborate closely with the marketing team to design and implement
            clean, responsive web pages using React and TypeScript for front-end
            components and Node.js and PostgreSQL for a backend API and
            relational database.
          </li>
          <li className="text-sm">
            Architect and deploy internal solutions, such as a customer issue
            tracking tool and a CS team collaboration tool, using HTMX and
            GoLang.
          </li>
          <li className="text-sm">
            Create automation workflows with tools such as n8n and Make for
            sales outreach, support ticket creation, and account executive
            routing for clients.
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-1">
          Full-Stack Software Developer
        </h2>
        <p className="text-gray-700">Amano Technologies - Provo, UT</p>
        <p className="text-gray-600">Feb 2025 - Sept 2025</p>
        <ul className="list-disc list-inside">
          <li className="text-sm">
            Led the design and deployment of a new alerts page for the iOS app,
            boosting user engagement and improving response times for critical
            notifications through Firebase Cloud Messaging.
          </li>
          <li className="text-sm">
            Developed a two-stage caching system that reduced dashboard load
            times in the customer app by 50%, improving overall user experience
            and performance.
          </li>
          <li className="text-sm">
            Implemented advanced error handling in the network layer, reducing
            app crashes and increasing system resilience.
          </li>
          <li className="text-sm">
            Authored and integrated new endpoints for a Node.js REST API,
            supporting new features and seamless Firebase NoSQL database
            connectivity.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-1">Web Development Aide</h2>
        <p className="text-gray-700">
          Salt Lake Community College - Taylorsville, UT
        </p>
        <p className="text-gray-600">Feb 2025 - Feb 2026</p>
        <ul className="list-disc list-inside">
          <li className="text-sm">
            Enhanced student learning outcomes by providing instructional
            support for web development courses, covering HTML, CSS, JavaScript,
            PHP, WordPress, and Figma.
          </li>
          <li className="text-sm">
            Led weekly lab sessions, teaching students to apply knowledge to
            practical projects.
          </li>
          <li className="text-sm">
            Authored and implemented new grading rubrics and course materials,
            streamlining evaluation and improving the curriculum for current and
            future cohorts.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
