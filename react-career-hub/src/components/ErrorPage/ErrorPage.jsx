import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops.!.!.!..</h2>
            <p>Dont post a blogs</p>
            <Link to='/'>Go Back to home</Link>
        </div>
    );
};

export default ErrorPage;