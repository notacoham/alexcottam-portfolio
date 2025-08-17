const Projects = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <hr className="border-t border-gray-300 mb-4" />
            <div className="md:columns-2 pt-2 pb-5">
                <div className="font-semibold text-xl md:text-xl">Tools</div>
                <div className="flex flex-wrap mb-5 md:mb-0">
                    <div className="m-1 px-2 py-2 bg-[#eaf4f4] border-2 border-gray-300 rounded-md shadow-md duration-100 hover:translate-y-[2px]">
                        VSCode
                    </div>
                    <div className="m-1 px-2 py-2 bg-[#eaf4f4] border-2 border-gray-300 rounded-md shadow-md duration-100 hover:translate-y-[2px]">
                        GCP
                    </div>
                    <div className="m-1 px-2 py-2 bg-[#eaf4f4] border-2 border-gray-300 rounded-md shadow-md duration-100 hover:translate-y-[2px]">
                        Firebase
                    </div>
                    <div className="m-1 px-2 py-2 bg-[#eaf4f4] border-2 border-gray-300 rounded-md shadow-md duration-100 hover:translate-y-[2px]">
                        JIRA
                    </div>
                    <div className="m-1 px-2 py-2 bg-[#eaf4f4] border-2 border-gray-300 rounded-md shadow-md duration-100 hover:translate-y-[2px]">
                        Slack
                    </div>
                    <div className="m-1 px-2 py-2 bg-[#eaf4f4] border-2 border-gray-300 rounded-md shadow-md duration-100 hover:translate-y-[2px]">
                        Github
                    </div>
                </div>
                <div className="font-semibold text-xl md:text-xl">
                    Development
                </div>
                <div className="flex flex-wrap mb-5 md:mb-0">
                    <div className="m-1 px-2 py-2 bg-[#eaf4f4] border-2 border-gray-300 rounded-md shadow-md duration-100 hover:translate-y-[2px]">
                        React
                    </div>
                    <div className="m-1 px-2 py-2 bg-[#eaf4f4] border-2 border-gray-300 rounded-md shadow-md duration-100 hover:translate-y-[2px]">
                        Node.js
                    </div>
                    <div className="m-1 px-2 py-2 bg-[#eaf4f4] border-2 border-gray-300 rounded-md shadow-md duration-100 hover:translate-y-[2px]">
                        MongoDB
                    </div>
                    <div className="m-1 px-2 py-2 bg-[#eaf4f4] border-2 border-gray-300 rounded-md shadow-md duration-100 hover:translate-y-[2px]">
                        Python
                    </div>
                    <div className="m-1 px-2 py-2 bg-[#eaf4f4] border-2 border-gray-300 rounded-md shadow-md duration-100 hover:translate-y-[2px]">
                        WordPress
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-1">
                    <a
                        className="text-amber-400 underline"
                        target="_blank"
                        href="https://github.com/notacoham/ignore-cli"
                    >
                        Ignore CLI
                    </a>
                </h2>
                <p className="text-gray-700">
                    Made as a part of an online Hackathon, Ignore CLI is a tool
                    that I use frequently in my day to day development. The tool
                    can be installed in any Python project (Soon to be available
                    for Javascript and React Projects) and the user can run a
                    series of commands to either generate a new .gitignore file,
                    or update an existing one with file endings or directories
                    that should be included. It works by scanning the project
                    directory and identifying files and folders that match the
                    specified patterns. This tool has gained a small user base
                    that has encouraged me to continue working on CLI developer
                    tools.
                </p>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-1">
                    <a
                        className="text-amber-400 underline"
                        target="_blank"
                        href="https://github.com/notacoham/ai_gemini_cli"
                    >
                        Python AI CLI
                    </a>
                </h2>
                <p className="text-gray-700">
                    A command-line interface (CLI) tool that allows users to
                    interact with AI models (currently supporting Google's
                    Gemini) directly from your terminal. This tool allows for
                    conversations with AI about your project, file manipulation,
                    and execution of Python code through natural language
                    commands. When creating this tool, I gave it several
                    functions to allow it to interact with files within the
                    project directory, while also limiting what it can do in the
                    command line.
                </p>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-1">
                    <a
                        className="text-amber-400 underline"
                        target="_blank"
                        href="https://github.com/notacoham/link_scraper"
                    >
                        Django Link Scraper
                    </a>
                </h2>
                <p className="text-gray-700">
                    A Django-based web application that allows users to scrape
                    links and data from a webpage and display the results in
                    your browser. This project was a valuable learning
                    experience and entry point into the Django Web Framework. I
                    have since continued to develop my skills in Django and
                    Python, and I am currently working on a more advanced
                    version of this project that will include user
                    authentication, database storage, and more complex scraping
                    capabilities.
                </p>
            </div>
            <div className="mb-4">
                <h1 className="font-semibold text-lg mb-2">
                    Other dev projects include:
                </h1>
                <ul className="list-disc list-inside">
                    <li className="text-sm mb-1">
                        This website!! It is always a work in progress!
                    </li>
                    <li className="text-sm mb-1">
                        CLI Chat (A command-line interface for chatting with
                        your friends)
                    </li>
                    <li className="text-sm mb-1">
                        React Native side project in the works! Stay tuned!
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="font-semibold text-lg mb-2">
                    Follow my progress on{" "}
                    <a
                        target="_blank"
                        className="text-amber-400 underline"
                        href="https://github.com/notacoham"
                    >
                        Github!
                    </a>
                </h1>
            </div>
        </div>
    );
};

export default Projects;
