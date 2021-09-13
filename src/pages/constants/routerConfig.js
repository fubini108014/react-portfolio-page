import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import RedditIcon from "@material-ui/icons/Reddit";
import InfoIcon from "@material-ui/icons/Info";
import BugReportIcon from "@material-ui/icons/BugReport";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

import Home from "../Home";
import About from "../About";
import Service from "../Service";
import Portfolio from "../Portfolio";
import Blog from "../Blog";

export const Routes = [
    {
        pageId: 0,
        path: "/home",
        defaultPath: "/home",
        text: "Home",
        icon: <HomeIcon />,
        page: <Home />,
    },
    {
        pageId: 1,
        path: "/about",
        defaultPath: "/about",
        text: "About",
        icon: <InfoIcon />,
        page: <About />,
    },
    {
        pageId: 2,
        path: "/service",
        defaultPath: "/service",
        text: "Service",
        icon: <RedditIcon />,
        page: <Service />,
    },
    {
        pageId: 3,
        path: "/portfolio",
        defaultPath: "/portfolio",
        text: "Portfolio",
        icon: <BugReportIcon />,
        page: <Portfolio />,
    },
    {
        pageId: 4,
        path: "/blog/:pages?",
        defaultPath: "/blog",
        text: "Blog",
        icon: <LibraryBooksIcon />,
        page: <Blog />,
    },
];
