import React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        strokeLinecap="round"
        stroke="hsl(0, 0%, 18%)"
        {...props}
    />
);

export const MenuToggle = ({ toggle, className, stroke }) => (
    <button onClick={toggle} className={className}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                stroke={stroke}
                variants={{
                    closed: { d: "M 3 4.5 L 21 4.5" },
                    open: { d: "M 5 18.5 L 19 4.5" },
                }}
            />
            <Path
                stroke={stroke}
                d="M 3 11.423 L 21 11.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                stroke={stroke}
                variants={{
                    closed: { d: "M 3 18.346 L 21 18.346" },
                    open: { d: "M 5 4.5 L 19 18.346" },
                }}
            />
        </svg>
    </button>
);
