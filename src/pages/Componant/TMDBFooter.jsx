// TMDBFooter.js
import React from 'react';

const TMDBFooter = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-wrap justify-center space-x-6">
                    {/* Footer Links */}
                    <a href="#" className="hover:text-gray-400">About Us</a>
                    <a href="#" className="hover:text-gray-400">Contact</a>
                    <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                </div>
                <div className="mt-4">
                    <p>&copy; {new Date().getFullYear()} The Movie Database, Inc.</p>
                </div>
            </div>
        </footer>
    );
}

export default TMDBFooter;
