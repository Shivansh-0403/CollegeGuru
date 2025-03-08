import React from 'react';
import { ArrowRight, BookOpen, Video, FileText, BookMarked } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    {/* Text Content */}
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <h1>
                            <span className="block text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                                INTRODUCING
                            </span>
                            <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                                <span className="block text-gray-900 dark:text-white">CollegeGuru</span>
                                <span className="block text-blue-600 dark:text-blue-400 mt-1">Academic Excellence Simplified</span>
                            </span>
                        </h1>
                        <p className="mt-3 text-base text-gray-700 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            One stop solution for your academic and placement preparation. Access notes, previous year questions, books, and courses created by students, for students.
                        </p>
                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <Link
                                    to="/signup"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    to="/explore"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 dark:text-blue-400 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Explore Resources
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="mt-12 lg:mt-0 lg:col-span-6">
                        <div className="grid grid-cols-2 gap-4">
                            {/* PYQs Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center transform transition-transform hover:scale-105">
                                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                                    <FileText className="h-8 w-8" />
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white text-center">Previous Year Questions</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-center">
                                    Practice with exam papers from past years
                                </p>
                            </div>

                            {/* Notes Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center transform transition-transform hover:scale-105">
                                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                                    <BookOpen className="h-8 w-8" />
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white text-center">Study Notes</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-center">
                                    Comprehensive notes shared by top students
                                </p>
                            </div>

                            {/* Courses Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center transform transition-transform hover:scale-105">
                                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                                    <Video className="h-8 w-8" />
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white text-center">Video Courses</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-center">
                                    Learn from peer-created video tutorials
                                </p>
                            </div>

                            {/* Books Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center transform transition-transform hover:scale-105">
                                <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300">
                                    <BookMarked className="h-8 w-8" />
                                </div>
                                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white text-center">Reference Books</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 text-center">
                                    Access essential books and references
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;