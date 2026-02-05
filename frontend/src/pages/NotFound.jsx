import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-primary-light dark:bg-primary-dark flex flex-col items-center justify-center text-center px-6">
            <Helmet>
                <title>404 | Page Not Found</title>
            </Helmet>
            <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-6">Page Not Found</h2>
            <p className="text-muted-light dark:text-muted-dark text-lg mb-8 max-w-lg">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-hover transition-all shadow-lg shadow-accent/20"
            >
                Return Home
            </Link>
        </div>
    );
};

export default NotFound;
