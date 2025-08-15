import { useRef } from "react";
import { useDrag } from "react-dnd";

const Window = ({
    title,
    children,
    initialPosition = { top: 50, left: 50 },
}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "window",
        item: { id: title },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const ref = useRef(null);
    drag(ref);

    const style = {
        position: "absolute",
        top: initialPosition.top,
        left: initialPosition.left,
        zIndex: isDragging ? 2 : 1, // Optional: bring to front when dragging
    };

    return (
        <div
            ref={ref}
            className="bg-gray-200 border-2 border-solid border-gray-400 shadow-md p-1"
            style={style}
        >
            <div className="flex justify-between items-center bg-blue-500 text-white px-2 py-1 cursor-move">
                <span className="font-bold">{title}</span>
                <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-0.5 rounded-sm">
                    X
                </button>
            </div>
            <div className="p-4 bg-white">{children}</div>
        </div>
    );
};

export default Window;
