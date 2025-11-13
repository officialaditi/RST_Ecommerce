import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white w-full fixed top-0 left-0 z-50">
            <div className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link
                    to="/"
                    className="font-bold text-3xl uppercase tracking-wider"
                >
                    rst store
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8">
                    <Link to="/login">
                        <li className="font-semibold text-2xl hover:text-gray-300 transition">
                            Login
                        </li>
                    </Link>
                    <Link to="/cart">
                        <li className="font-semibold text-2xl hover:text-gray-300 transition">
                            Cart
                        </li>
                    </Link>
                </ul>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-3xl focus:outline-none"
                >
                    {isOpen ? <RxCross2 /> : <IoMenuSharp />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-700">
                    <ul className="flex flex-col items-center gap-6 py-6">
                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="font-semibold text-lg hover:text-gray-300 transition"
                        >
                            Login
                        </Link>
                        <Link
                            to="/cart"
                            onClick={() => setIsOpen(false)}
                            className="font-semibold text-lg hover:text-gray-300 transition"
                        >
                            Cart
                        </Link>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
