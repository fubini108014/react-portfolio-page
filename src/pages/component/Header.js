import React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./sideMenu/MenuToggle";
import HomeIcon from "@material-ui/icons/Home";
import { Navigation } from "./sideMenu/Navigation";
import Avatar from "@material-ui/core/Avatar";
import headshot from "../../assets/img/chinphoto.jpg";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import styled from "styled-components";
import QRCodeImg from "../../assets/img/QRcode.png";
import {
    HeaderWrapper,
    AccountBox,
    MotionMenu,
    AccountInfo,
    Others,
} from "../../styled/styledHeader";

const IconGroup = styled.div`
    color: #fff;
    flex: 1 0 30%;
    margin: 0 7px;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    display: inline-flex;
    & .IconItem {
        margin: 5px 10px;
        cursor: pointer;
    }
`;
const QRcodeIcon = styled.div`
    height: 24px;
    width: 24px;
    display: inline-flex;
    background-size: cover;
    background-image: url(${QRCodeImg});
`;

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

    const iconLists = [
        { title: "Email", component: <EmailIcon className="IconItem" /> },
        {
            title: "Facebook",
            component: (
                <FacebookIcon
                    className="IconItem"
                    onClick={() =>
                        window.open(
                            "https://www.facebook.com/profile.php?id=100000191509477"
                        )
                    }
                />
            ),
        },
        {
            title: "Instagram",
            component: (
                <InstagramIcon
                    className="IconItem"
                    onClick={() =>
                        window.open("https://www.instagram.com/ga576895/")
                    }
                />
            ),
        },
        { title: "GitHub", component: <GitHubIcon className="IconItem" /> },
        { title: "QRcode", component: <QRcodeIcon className="IconItem" /> },
    ];

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
            <IconGroup>
                {iconLists.map((item, i) => (
                    <Tooltip
                        key={i + "tool"}
                        title={item.title}
                        placement="top"
                        arrow
                    >
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {item.component}
                        </motion.div>
                    </Tooltip>
                ))}
            </IconGroup>
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
