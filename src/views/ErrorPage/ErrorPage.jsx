import { useRouteError, Link } from 'react-router-dom';
import "./ErrorPage.css";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>404 ERROR</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/" className="back-button">BACK</Link>
        </div>
    );
};

export default ErrorPage;