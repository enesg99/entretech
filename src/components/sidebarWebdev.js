import { useState } from 'react';
import { Link } from 'react-router-dom';

function SidebarWebdev() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Hamburger Menu Button */}
            <div
                className="absolute top-24 left-8 cursor-pointer"
                onClick={toggleMenu}
            >
                <div className="space-y-2">
                    <span className="block w-9 h-1 bg-black rounded"></span>
                    <span className="block w-9 h-1 bg-black rounded"></span>
                    <span className="block w-9 h-1 bg-black rounded"></span>
                </div>
            </div>

            {/* Sidebar Menu */}
            <ul
                className={`${
                    isMenuOpen ? "max-h-screen" : "max-h-0"
                } flex flex-col items-center absolute left-0 top-36 w-3/12 bg-gray-200 rounded-md overflow-hidden transition-[max-height] duration-150`}
            >
                <li className="py-2">
                    <Link
                        to="/tracks/webdevpath/basics"
                        onClick={toggleMenu}
                        className="text-black hover:text-gray-600"
                    >
                        Basics
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="/tracks/webdevpath/html"
                        onClick={toggleMenu}
                        className="text-black hover:text-gray-600"
                    >
                        HTML
                    </Link>
                    {/* Subitems */}
                    <ul className="mt-2 ml-4 text-gray-700">
                        <li className="text-sm">Erste Website</li>
                        <li className="text-sm">Einführung</li>
                        <li className="text-sm">Tags</li>
                    </ul>
                </li>
                <li className="py-2">
                    <Link
                        to="/tracks/webdevpath/css"
                        onClick={toggleMenu}
                        className="text-black hover:text-gray-600"
                    >
                        CSS
                    </Link>
                </li>
                <li className="py-2">
                    <Link
                        to="/tracks/webdevpath/javascript"
                        onClick={toggleMenu}
                        className="text-black hover:text-gray-600"
                    >
                        Javascript
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default SidebarWebdev;
