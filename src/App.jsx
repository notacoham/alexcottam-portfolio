import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Window from "./components/Window";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="h-screen w-screen bg-green-700 relative overflow-hidden">
                <Window title="About Me">
                    <p>This is my personal website!</p>
                </Window>
            </div>
        </DndProvider>
    );
}

export default App;
