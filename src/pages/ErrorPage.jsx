import React from 'react'

const ErrorPage = (props) => {


    return (
        <div className="min-h-screen flex my-12  justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-semibold text-gray-800">404 - Not Found</h1>
                <p className="mt-4 text-gray-600">The page you are looking for does not exist.</p>
            </div>
        </div>
    );
}

export default ErrorPage