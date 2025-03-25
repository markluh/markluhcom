import { useEffect } from "react";

export const Navbar = ({menuOpen, setmenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);
    
    return ( 
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
         <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    Markluh<span className="text-blue-500">com</span>
                </a>

                <div className="w-7 h-5 relative cursor-pointer md:hidden z-240"
                onClick={() => setmenuOpen((prev)=> !prev)}>
                   &#9776;
                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#home" 
                    className="text-blue-500-bold hover:white transition-colors hover:bg-purple hover:underline hover:text-purple-500 text-40px"
                    >Home</a>
                     <a href="#About" 
                    className="text-blue-500-bold hover:white transition-colors hover:bg-purple hover:underline hover:text-purple-500 text-40px"
                    >About</a>
                     <a href="#Projects" 
                    className="text-blue-500-bold hover:white transition-colors hover:bg-purple hover:underline hover:text-purple-500 text-40px"
                    >Projects</a> <a href="#Contact" 
                    className="text-blue-500-bold hover:white transition-colors hover:bg-purple hover:underline hover:text-purple-500 text-40px"
                    >Contact</a>
                    
                </div>
            </div>
         </div>
    </nav>
    );
};