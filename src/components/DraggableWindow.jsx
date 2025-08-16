import { useDraggable } from "@dnd-kit/core";
import Window from "./Window";
import { useRef } from "react";

const DraggableWindow = ({ id, title, children, initialPosition, onClose }) => {
    const handleRef = useRef(null);

    const { attributes, listeners, setNodeRef, transform, isDragging } =
        useDraggable({
            id: id,
        });

    const style = {
        position: "absolute",
        left: initialPosition.x,
        top: initialPosition.y,
        zIndex: isDragging ? 15 : 11,
        transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
    };

    return (
        <div ref={setNodeRef} style={style}>
            <Window
                title={title}
                onClose={onClose}
                handleRef={handleRef}
                attributes={attributes}
                listeners={listeners}
            >
                {children}
            </Window>
        </div>
    );
};

export default DraggableWindow;
