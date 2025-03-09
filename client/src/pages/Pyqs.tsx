import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal, Download, Calendar, User, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define types for the PYQ data
interface PYQ {
    id: string;
    title: string;
    uploader: string;
    uploaderAvatar?: string;
    uploadDate: string;
    subject: string;
    examType: string;
    year: string;
    coinCost: number;
    fileType: string;
    downloadCount: number;
}

const Pyqs: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [sortOption, setSortOption] = useState('recent');

    // Sample PYQ data
    const pyqs: PYQ[] = [
        {
            id: 'pyq-001',
            title: 'Data Structures Mid Semester Exam 2024',
            uploader: 'Rahul Sharma',
            uploaderAvatar: '/avatars/rahul.jpg',
            uploadDate: '2025-02-15',
            subject: 'Computer Science',
            examType: 'Mid Semester',
            year: '2024',
            coinCost: 5,
            fileType: 'PDF',
            downloadCount: 142
        },
        {
            id: 'pyq-002',
            title: 'Digital Electronics End Semester 2024',
            uploader: 'Priya Patel',
            uploadDate: '2025-02-10',
            subject: 'Electronics',
            examType: 'End Semester',
            year: '2024',
            coinCost: 3,
            fileType: 'PDF',
            downloadCount: 87
        },
        {
            id: 'pyq-003',
            title: 'Calculus II Quiz Papers (Set of 3)',
            uploader: 'Arjun Mehta',
            uploaderAvatar: '/avatars/arjun.jpg',
            uploadDate: '2025-01-28',
            subject: 'Mathematics',
            examType: 'Quiz',
            year: '2024',
            coinCost: 7,
            fileType: 'PDF',
            downloadCount: 203
        },
        {
            id: 'pyq-004',
            title: 'Operating Systems Lab Exam Questions',
            uploader: 'Neha Singh',
            uploadDate: '2025-01-15',
            subject: 'Computer Science',
            examType: 'Lab Exam',
            year: '2024',
            coinCost: 4,
            fileType: 'PDF',
            downloadCount: 75
        },
        {
            id: 'pyq-005',
            title: 'Machine Learning End Semester 2023',
            uploader: 'Vikram Joshi',
            uploaderAvatar: '/avatars/vikram.jpg',
            uploadDate: '2025-01-05',
            subject: 'Computer Science',
            examType: 'End Semester',
            year: '2023',
            coinCost: 6,
            fileType: 'PDF',
            downloadCount: 231
        },
        {
            id: 'pyq-006',
            title: 'Microprocessors Mid Semester Exam',
            uploader: 'Ananya Reddy',
            uploadDate: '2024-12-20',
            subject: 'Electronics',
            examType: 'Mid Semester',
            year: '2023',
            coinCost: 4,
            fileType: 'PDF',
            downloadCount: 112
        }
    ];

    // Format date for display
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Previous Year Question Papers
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                        Master your exams with insights from the past
                    </p>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        {/* Search */}
                        <div className="relative w-full md:w-1/2">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search by subject, exam type, or year..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Sort and Filter */}
                        <div className="flex gap-3 w-full md:w-auto">
                            <div className="relative w-1/2 md:w-auto">
                                <select
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={sortOption}
                                    onChange={(e) => setSortOption(e.target.value)}
                                >
                                    <option value="recent">Most Recent</option>
                                    <option value="popular">Most Downloaded</option>
                                    <option value="price-low">Lowest Price</option>
                                    <option value="price-high">Highest Price</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                                    <SlidersHorizontal className="h-4 w-4" />
                                </div>
                            </div>

                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2 md:w-auto justify-center"
                            >
                                <Filter className="h-5 w-5 mr-2" />
                                <span>Filter</span>
                            </button>
                        </div>
                    </div>

                    {/* Expanded Filters */}
                    {showFilters && (
                        <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Subject
                                    </label>
                                    <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                                        <option value="">All Subjects</option>
                                        <option value="computer-science">Computer Science</option>
                                        <option value="mathematics">Mathematics</option>
                                        <option value="electronics">Electronics</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Exam Type
                                    </label>
                                    <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                                        <option value="">All Types</option>
                                        <option value="mid-sem">Mid Semester</option>
                                        <option value="end-sem">End Semester</option>
                                        <option value="quiz">Quiz</option>
                                        <option value="lab">Lab Exam</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Year
                                    </label>
                                    <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                                        <option value="">All Years</option>
                                        <option value="2024">2024</option>
                                        <option value="2023">2023</option>
                                        <option value="2022">2022</option>
                                        <option value="2021">2021</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-end">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* PYQ Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pyqs.map(pyq => (
                        <div
                            key={pyq.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700"
                        >
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                    {pyq.title}
                                </h3>

                                <div className="flex items-center mt-3 text-sm text-gray-600 dark:text-gray-400">
                                    <User className="h-4 w-4 mr-1" />
                                    <span>{pyq.uploader}</span>
                                </div>

                                <div className="flex items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    <span>{formatDate(pyq.uploadDate)}</span>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <span className="inline-flex items-center bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200">
                                        <span>{pyq.subject}</span>
                                    </span>
                                    <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 rounded-full text-sm font-medium text-blue-800 dark:text-blue-200">
                                        <span>{pyq.year}</span>
                                    </span>
                                </div>

                                <div className="flex justify-between items-center mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center text-amber-600 dark:text-amber-400">
                                        <Coins className="h-5 w-5 mr-1" />
                                        <span className="font-medium">{pyq.coinCost} coins</span>
                                    </div>

                                    <Link
                                        to={`/pyqs/${pyq.id}`}
                                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        <Download className="h-4 w-4 mr-1" />
                                        View File
                                    </Link>
                                </div>

                                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-right">
                                    {pyq.downloadCount} downloads
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="mt-10 text-center">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-300 dark:bg-blue-900/50 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Load More PYQs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pyqs;