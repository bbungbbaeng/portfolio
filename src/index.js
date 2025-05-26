import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './views/Home/Home';
import AboutMe from './views/AboutMe/AboutMe';
import MyProjects from './views/MyProjects/MyProjects';
import Contact from './views/Contact/Contact';
import ErrorPage from './views/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: 'aboutme', element: <AboutMe /> },
            { path: 'projects', element: <MyProjects /> },
            { path: 'contact', element: <Contact /> }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

reportWebVitals();