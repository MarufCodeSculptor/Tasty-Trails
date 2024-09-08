


const ProgrecBar = () => {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col">
            <p className="capitalize font-josefin text-lg text-blue-500 mb-3">proccesing</p>
            <progress className="progress w-56 bg-blue-500"></progress>
        </div>
    );
};

export default ProgrecBar;