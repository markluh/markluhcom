import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setmenuOpen }) => {
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                    `}
        >
            <button
                onClick={() => setmenuOpen(false)}
                className="absolute top-4 right-7 text-3xl text-white focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <a
                href="#home"
                onClick={() => setmenuOpen(false)}
                className="text-3xl md-text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right hover:text-blue-500 hover:underline hover:border-2px-purple"
            >
                Home
            </a>
            <a
                href="#About"
                onClick={() => setmenuOpen(false)}
                className="text-3xl md-text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right hover:text-blue-500 hover:underline hover:border-2px-purple"
            >
                About
            </a>
            <a
                href="#Projects"
                onClick={() => setmenuOpen(false)}
                className="text-3xl md-text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right hover:text-blue-500 hover:underline hover:border-2px-purple"
            >
                Projects
            </a>
            <a
                href="#Contact"
                onClick={() => setmenuOpen(false)}
                className="text-3xl md-text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right hover:text-blue-500 hover:underline hover:border-2px-purple"
            >
                Contact
            </a>
        </div>
    );
};
