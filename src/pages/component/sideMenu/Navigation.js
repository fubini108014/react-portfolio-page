import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import HomeIcon from "@material-ui/icons/Home";
import RedditIcon from "@material-ui/icons/Reddit";
import InfoIcon from "@material-ui/icons/Info";
import BugReportIcon from "@material-ui/icons/BugReport";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
const variants = {
    open: {
        display: "block",
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        display: "none",
        transition: {
            delay: 1,
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

export const Navigation = ({ linkEvent }) => (
    <motion.ul variants={variants}>
        {itemLinks.map((item, idx) => (
            <MenuItem
                onClick={linkEvent}
                text={item.text}
                link={item.link}
                icon={item.icon}
                i={idx}
                key={idx}
            />
        ))}
    </motion.ul>
);

const itemLinks = [
    { link: "/", text: "Home", icon: <HomeIcon /> },
    { link: "/about", text: "About", icon: <InfoIcon /> },
    { link: "/service", text: "Service", icon: <RedditIcon /> },
    { link: "/portfolio", text: "Portfolio", icon: <BugReportIcon /> },
    { link: "/blog", text: "Blog", icon: <LibraryBooksIcon /> },
];
