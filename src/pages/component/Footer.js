import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import { motion } from "framer-motion";
import {
    FooterWapper,
    CopyRight,
    IconGroup,
    QRcodeIcon,
} from "../../styled/styledFooter";
import { SimpleBottomNavigation } from "./Navigation/Navigation";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import MessageMeButton from "./MessageCard/MessageMeButton";

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
    {
        title: "QRcode",
        component: <QRcodeIcon className="IconItem QRCode" />,
    },
];

function FooterActions() {
    return (
        <FooterWapper>
            <CopyRight>Copyright © 2020 Josh Chang.</CopyRight>
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
            <MessageMeButton />
        </FooterWapper>
    );
}

export default function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    return isMobile ? <SimpleBottomNavigation /> : <FooterActions />;
}
