const Window = ({
    title,
    children,
    onClose,
    handleRef,
    attributes,
    listeners,
}) => {
    const handleCloseClick = (event) => {
        event.stopPropagation();
        onClose();
    };

    return (
        <div className="bg-gray-200 border-2 border-solid border-gray-400 shadow-md p-1 rounded-lg drop-shadow-lg relative z-10 max-w-2xl min-w-xl max-h-[500px] overflow-scroll scrollbar-hide">
            <div className="flex justify-between items-center bg-[#6b9080] text-white px-2 py-1 rounded-t-md">
                <span
                    ref={handleRef}
                    className="font-bold cursor-move flex-1"
                    {...listeners}
                    {...attributes}
                >
                    {title}
                </span>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-0.5 rounded-sm"
                    onClick={handleCloseClick}
                >
                    X
                </button>
            </div>
            <div className="p-4 bg-[#f6fff8]">{children}</div>
        </div>
    );
};

export default Window;
