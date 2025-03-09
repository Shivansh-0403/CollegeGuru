import React, { useState, useEffect } from 'react';
import { Sun, Moon, User, Menu, X, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

// // Define types for props and user
// interface NavbarProps {
//     isLoggedIn: boolean;
//     userName?: string;
//     userAvatar?: string;
// }

const Navbar: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    // Check user's preferred theme on initial load
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }

        // Check for saved theme preference in localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    // Toggle theme function
    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    // Menu items
    const menuItems = [
        { name: 'PYQs', path: '/pyqs' },
        { name: 'Notes', path: '/notes' },
        { name: 'Courses', path: '/courses' },
        { name: 'Books', path: '/books' }
    ];

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center">
                            {/* <img
                                className="h-8 w-auto"
                                src="/logo.svg"
                                alt="CollegeGuru Logo"
                            /> */}
                            <GraduationCap className="h-6 w-6 text-white" />
                            <span className="ml-2 text-xl font-bold text-blue-600 dark:text-blue-400">
                                CollegeGuru
                            </span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center justify-center flex-1">
                        <div className="flex space-x-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="px-3 py-2 rounded-md text-md font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right side - User & Theme toggle */}
                    <div className="flex items-center space-x-4">
                        {/* Theme toggle button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 focus:outline-none"
                            aria-label="Toggle theme"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* User button */}
                        <div>
                            {isLoggedIn ? (
                                <Link
                                    to="/dashboard"
                                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-blue-400 dark:hover:bg-gray-800 transition-colors"
                                >
                                    {userAvatar ? (
                                        <img
                                            src={userAvatar}
                                            alt={userName}
                                            className="h-8 w-8 rounded-full mr-2"
                                        />
                                    ) : (
                                        <User size={20} className="mr-2" />
                                    )}
                                    <span>{userName || 'Dashboard'}</span>
                                </Link>
                            ) : (
                                <Link
                                    to="/login"
                                    className="flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                                >
                                    <User size={18} className="mr-2" />
                                    Login
                                </Link>
                            )}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 focus:outline-none"
                                aria-expanded={mobileMenuOpen}
                                aria-label="Toggle mobile menu"
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-inner">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-blue-400 dark:hover:bg-gray-800"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;