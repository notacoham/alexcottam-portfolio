import { useState } from "react";
import DraggableWindow from "./components/DraggableWindow";
import { DndContext } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import Squares from "./components/Squares";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { FaInfo, FaFolder, FaTools, FaMailBulk, FaGithub, FaLinkedin, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

function App() {
    const [windows, setWindows] = useState([]);

    const handleDragEnd = (event) => {
        const { active, delta } = event;
        setWindows((prevWindows) =>
            prevWindows.map((win) =>
                win.id === active.id
                    ? {
                        ...win,
                        position: {
                            x: win.position.x + delta.x,
                            y: win.position.y + delta.y,
                        },
                    }
                    : win
            )
        );
    };

    const openWindow = (windowId, title) => {
        if (!windows.find((win) => win.id === windowId)) {
            const winWidth = 400; 
            const winHeight = 300; 
            const x = Math.max(0, (window.innerWidth - winWidth) / 2);
            const y = Math.max(0, (window.innerHeight - winHeight) / 2);
            setWindows([
                ...windows,
                { id: windowId, title: title, position: { x, y } },
            ]);
        }
    };

    const closeWindow = (windowId) => {
        setWindows(windows.filter((win) => win.id !== windowId));
    };

    return (
        <DndContext
            onDragEnd={handleDragEnd}
            modifiers={[restrictToWindowEdges]}
        >
            <div className="font-mozilla h-screen w-screen relative overflow-hidden flex items-center justify-center bg-[#A4C3B2]">
                {/* Animated squares background */}
                <Squares
                    speed={0.125}
                    squareSize={100}
                    direction="diagonal"
                    borderColor="#4F6C60"
                    hoverFillColor="#6b9080"
                />
                {/* Main "Desktop" Window */}
                <div className="bg-gray-200 border-2 border-solid border-gray-400 shadow-md p-1 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-4 sm:mx-6 md:mx-8 relative z-10 rounded-lg drop-shadow-lg">
                    {/* Title bar */}
                    <div className="flex justify-between items-center bg-[#6b9080] text-white px-2 py-1 rounded-t-md">
                        <span className="font-bold flex-1">Home</span>
                    </div>
                    {/* Window content */}
                    <div className="p-3 sm:p-4 bg-[#f6fff8] min-h-[300px] sm:min-h-[400px] flex flex-col justify-center items-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center">
                            Hi! I'm Alex Cottam 👋
                        </h1>
                        <p className="text-base sm:text-lg text-center">📍 Salt Lake City, UT</p>
                        <p className="text-base sm:text-lg mb-6 sm:mb-10 text-center">
                            🖥️ iOS and Frontend Developer
                        </p>
                        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center items-center">
                            <button
                                className="bg-[#eaf4f4] hover:bg-[#A4C3B2] p-2 sm:p-2 border-2 border-solid border-gray-300 shadow-md rounded-md w-full sm:w-auto min-h-[44px] flex items-center justify-center"
                                onClick={() =>
                                    openWindow("about-me", "About Me")
                                }
                            >
                                <FaInfo className="inline-block mr-2" />
                                About
                            </button>
                            <button
                                className="bg-[#eaf4f4] hover:bg-[#A4C3B2] p-2 sm:p-2 border-2 border-solid border-gray-300 shadow-md rounded-md w-full sm:w-auto min-h-[44px] flex items-center justify-center"
                                onClick={() =>
                                    openWindow("experience", "Experience")
                                }
                            >
                                <FaTools className="inline-block mr-2" />
                                Experience
                            </button>
                            <button
                                className="bg-[#eaf4f4] hover:bg-[#A4C3B2] p-2 sm:p-2 border-2 border-solid border-gray-300 shadow-md rounded-md w-full sm:w-auto min-h-[44px] flex items-center justify-center"
                                onClick={() =>
                                    openWindow("projects", "Projects")
                                }
                            >
                                <FaFolder className="inline-block mr-2" />
                                Projects
                            </button>
                            <button
                                className="bg-[#eaf4f4] hover:bg-[#A4C3B2] p-2 sm:p-2 border-2 border-solid border-gray-300 shadow-md rounded-md w-full sm:w-auto min-h-[44px] flex items-center justify-center"
                                onClick={() => openWindow("contact", "Contact")}
                            >
                                <FaMailBulk className="inline-block mr-2" />
                                Contact
                            </button>
                        </div>
                        <div className="mt-6 align-bottom">
                            <a
                                href="https://github.com/notacoham"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="inline-block mx-4 text-2xl text-gray-700 hover:text-gray-900" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/alex-jinoo-cottam/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="inline-block mx-4 text-2xl text-gray-700 hover:text-gray-900" />
                            </a>
                            <button
                                onClick={() => {
                                    alert("Website Audio Coming Soon!");
                                }}
                            >
                                <FaVolumeUp className="inline-block mx-4 text-2xl text-gray-700 hover:text-gray-900" />
                            </button>
                        </div>
                    </div>
                </div>

                {windows.map((win) => (
                    <DraggableWindow
                        key={win.id}
                        id={win.id}
                        title={win.title}
                        onClose={() => closeWindow(win.id)}
                        initialPosition={win.position}
                    >
                        {win.id === "about-me" && <AboutMe />}
                        {win.id === "experience" && <Experience />}
                        {win.id === "projects" && <Projects />}
                        {win.id === "contact" && <Contact />}
                    </DraggableWindow>
                ))}
            </div>
        </DndContext>
    );
}

export default App;
