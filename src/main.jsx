import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from './views/Home/Home';
import Buttons from "./components/Buttons/Buttons";
import NameTag from "./components/NameTag/NameTag";
import CatAnimation from "./components/CatAnimation/CatAnimation";
import AboutMe from "./views/AboutMe/AboutMe";
import MyProjects from "./views/MyProjects/MyProjects";
import Contact from "./views/Contact/Contact";

import "./index.css"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "aboutme", element: <AboutMe /> },
            { path: "projects", element: <MyProjects /> },
            { path: "contact", element: <Contact /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);