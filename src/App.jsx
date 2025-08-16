import { useState } from "react";
import DraggableWindow from "./components/DraggableWindow";
import { DndContext } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import Squares from "./components/Squares";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
                <div className="bg-gray-200 border-2 border-solid border-gray-400 shadow-md p-1 min-w-xl max-w-2xl relative z-10">
                    {/* Title bar */}
                    <div className="flex justify-between items-center bg-[#6b9080] text-white px-2 py-1">
                        <span className="font-bold flex-1">Home</span>
                    </div>
                    {/* Window content */}
                    <div className="p-4 bg-[#f6fff8] min-h-[400px] flex flex-col justify-center items-center">
                        <h1 className="text-4xl font-bold mb-2">
                            Hi! I'm Alex Cottam 👋
                        </h1>
                        <p className="text-lg">📍 Salt Lake City, UT</p>
                        <p className="text-lg mb-10">
                            🖥️ iOS and Frontend Developer
                        </p>
                        <div className="space-x-4 flex justify-center">
                            <button
                                className="bg-[#eaf4f4] hover:bg-[#A4C3B2] p-2 border-2 border-solid border-gray-300 shadow-md"
                                onClick={() =>
                                    openWindow("about-me", "About Me")
                                }
                            >
                                About
                            </button>
                            <button
                                className="bg-[#eaf4f4] hover:bg-[#A4C3B2] p-2 border-2 border-solid border-gray-300 shadow-md"
                                onClick={() =>
                                    openWindow("experience", "Experience")
                                }
                            >
                                Experience
                            </button>
                            <button
                                className="bg-[#eaf4f4] hover:bg-[#A4C3B2] p-2 border-2 border-solid border-gray-300 shadow-md"
                                onClick={() =>
                                    openWindow("projects", "Projects")
                                }
                            >
                                Projects
                            </button>
                            <button
                                className="bg-[#eaf4f4] hover:bg-[#A4C3B2] p-2 border-2 border-solid border-gray-300 shadow-md"
                                onClick={() => openWindow("contact", "Contact")}
                            >
                                Contact
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
                        {win.id === "about-me" && (
                            <AboutMe />
                        )}
                        {win.id === "experience" && (
                            <Experience />
                        )}
                        {win.id === "projects" && (
                            <Projects />
                        )}
                        {win.id === "contact" && (
                            <Contact />
                        )}
                    </DraggableWindow>
                ))}
            </div>
        </DndContext>
    );
}

export default App;
