import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    let navigate = useNavigate();

    return (
        <div className="error-page">
            <div className="error-content">
                <h2>404</h2>
                <h3>Page Not Found</h3>
                <p>Oops! The page you are looking for does not exist.</p>
                <div className="navigation-buttons">
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
            </div>
            
        </div>
    );
};

export default ErrorPage;
