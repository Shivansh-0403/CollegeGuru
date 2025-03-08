import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About */}
                    <div className="col-span-1">
                        <div className="flex items-center">
                            <div className="p-2 rounded-md">
                                <GraduationCap className="h-6 w-6 text-white" />
                            </div>
                            <span className="ml-2 text-xl font-bold text-blue-600 dark:text-blue-400">
                                CollegeGuru
                            </span>
                        </div>
                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                            Your one-stop solution for academic and placement preparation. Created by students, for students.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                <Twitter size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                            Resources
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link to="/pyqs" className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Previous Year Questions
                                </Link>
                            </li>
                            <li>
                                <Link to="/notes" className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Study Notes
                                </Link>
                            </li>
                            <li>
                                <Link to="/courses" className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Video Courses
                                </Link>
                            </li>
                            <li>
                                <Link to="/books" className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Reference Books
                                </Link>
                            </li>
                            <li>
                                <Link to="/contribute" className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Contribute
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link to="/about" className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/team" className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link to="/careers" className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                            Contact
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-1 mr-2" />
                                <span className="text-gray-600 dark:text-gray-400">
                                    123 College Street, Tech Campus,<br />
                                    Bangalore, India 560001
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                                <a href="tel:+919876543210" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                                <a href="mailto:info@collegeguru.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                    info@collegeguru.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex space-x-6 md:order-2">
                            <Link to="/privacy" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                Terms of Service
                            </Link>
                            <Link to="/cookies" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                                Cookie Policy
                            </Link>
                        </div>
                        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400 md:mt-0 md:order-1">
                            &copy; {currentYear} CollegeGuru. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;