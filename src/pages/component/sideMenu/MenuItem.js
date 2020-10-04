import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

//const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, link = "", text = "", icon, onClick }) => {
    const style = { color: "rgb(176 181 204)" };
    return (
        <Link to={link} style={{ textDecoration: "none" }} onClick={onClick}>
            <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="icon-placeholder" style={style}>
                    {icon}
                </div>
                <div className="text-placeholder" style={style}>
                    {text}
                </div>
            </motion.li>
        </Link>
    );
};
