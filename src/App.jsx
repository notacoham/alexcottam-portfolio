import { useState } from "react";
import DraggableWindow from "./components/DraggableWindow";
import { DndContext } from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import Squares from "./components/Squares";

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
            <div className="font-mozilla h-screen w-screen relative overflow-hidden flex items-center justify-center bg-cyan-950">
                {/* Animated squares background */}
                <Squares 
                    speed={0.125}                    
                    squareSize={100}                
                    direction="diagonal"           
                    borderColor="#271e37"             
                    hoverFillColor="#222222"          
                />
                {/* Main "Desktop" Window */}
                <div className="bg-gray-200 border-2 border-solid border-gray-400 shadow-md p-1 max-w-lg relative z-10">
                    {/* Title bar */}
                    <div className="flex justify-between items-center bg-blue-500 text-white px-2 py-1">
                        <span className="font-bold flex-1">
                            Welcome to My Portfolio
                        </span>
                    </div>
                    {/* Window content */}
                    <div className="p-4 bg-white">
                        <h1 className="text-2xl font-bold mb-4">
                            Welcome to My Portfolio
                        </h1>
                        <p className="mb-4">Click a button to open a new window.</p>
                        <div className="space-x-4">
                            <button
                                className="bg-gray-300 hover:bg-gray-400 p-2 border-2 border-solid border-gray-400 shadow-md"
                                onClick={() => openWindow("about-me", "About Me")}
                            >
                                About Me
                            </button>
                            <button
                                className="bg-gray-300 hover:bg-gray-400 p-2 border-2 border-solid border-gray-400 shadow-md"
                                onClick={() => openWindow("projects", "Projects")}
                            >
                                Projects
                            </button>
                            <button
                                className="bg-gray-300 hover:bg-gray-400 p-2 border-2 border-solid border-gray-400 shadow-md"
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
                            <p>This is the About Me window content.</p>
                        )}
                        {win.id === "projects" && (
                            <p>This is the Projects window content.</p>
                        )}
                        {win.id === "contact" && (
                            <p>This is the Contact window content.</p>
                        )}
                    </DraggableWindow>
                ))}
            </div>
        </DndContext>
    );
}

export default App;
