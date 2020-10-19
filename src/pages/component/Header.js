import React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./sideMenu/MenuToggle";
import HomeIcon from "@material-ui/icons/Home";
import { Navigation } from "./sideMenu/Navigation";
import Avatar from "@material-ui/core/Avatar";
import headshot from "../../assets/img/chinphoto.jpg";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import {
    HeaderWrapper,
    AccountBox,
    MotionMenu,
    AccountInfo,
    Others,
} from "../../styled/styledHeader";
const useDimensions = (ref) => {
    const dimensions = React.useRef({ width: 0, height: 0 });
    React.useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
    }, [ref]);
    return dimensions.current;
};
const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(20px at 121px 24px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};
const varNav = {
    open: {
        height: "100%",
    },
    closed: {
        height: "20%",
        transition: {
            delay: 1,
        },
    },
};

function Header() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = React.useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <HeaderWrapper>
            <AccountBox>
                <Avatar
                    alt="Remy Sharp"
                    className="accountIcon"
                    src={headshot}
                />
                <AccountInfo>
                    <div className="myName">Josh Chang</div>
                    <div className="myJobs">Front-end Developer</div>
                </AccountInfo>
                <MotionMenu>
                    <motion.nav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        custom={height}
                        ref={containerRef}
                        variants={varNav}
                    >
                        <motion.div className="background" variants={sidebar} />
                        <Navigation linkEvent={() => toggleOpen()} />

                        <MenuToggle
                            className="MenuBtn"
                            stroke="rgb(239 240 245)"
                            toggle={() => toggleOpen()}
                        />
                    </motion.nav>
                </MotionMenu>
            </AccountBox>
            <motion.div
                whileHover={{
                    y: [2, -2, -7, -2, 2],
                }}
                transition={{
                    duration: 2,
                    ease: "linear",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    loop: Infinity,
                    repeatDelay: 0.5,
                }}
            >
                <Others>
                    <Tooltip title="Home" placement="left-end" arrow>
                        <Link to={"/"}>
                            <HomeIcon className="homeIcon" />
                        </Link>
                    </Tooltip>
                </Others>
            </motion.div>
        </HeaderWrapper>
    );
}

export default Header;
