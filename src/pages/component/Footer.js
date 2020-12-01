import React from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import Popover from "@material-ui/core/Popover";
import Tooltip from "@material-ui/core/Tooltip";
import SmsIcon from "@material-ui/icons/Sms";
import MessageCard from "./MessageCard/MessageMeCard";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useRWD from "../customhooks/useRWD";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import QRCodeImg from "../../assets/img/QRcode.png";
import { motion } from "framer-motion";
const FooterWapper = styled.div`
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    color: #fff;
    height: 10%;
    width: 100%;
    font-size: 2rem;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 760px) {
        height: 8%;
        min-height: 50px;
    }
`;

const CopyRight = styled.div`
    color: #fff;
    flex: 1 0 30%;
    margin: 5px;
    font-size: 0.5rem;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 760px) {
        display: none;
    }
`;

const MessageMe = styled.div`
    color: #fff;
    flex: 1 0 30%;
    margin: 0 10px;
    font-size: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & .SmsIconFab {
        width: 48px;
        height: 48px;
        & .SmsIconItem {
            margin: 5px;
            cursor: pointer;
        }
        @media screen and (max-width: 760px) {
            width: 40px;
            height: 40px;
        }
    }
`;
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
export default function Footer() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const device = useRWD();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
            <MessageMe>
                <Tooltip title="Message me" placement="left-start" arrow>
                    <Fab
                        color="primary"
                        aria-label="add"
                        className="SmsIconFab"
                        onClick={handleClick}
                    >
                        <SmsIcon className="SmsIconItem" />
                    </Fab>
                </Tooltip>
            </MessageMe>
            {device === "PC" ? (
                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                    }}
                    transformOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                >
                    <MessageCard onClose={handleClose} />
                </Popover>
            ) : (
                <Dialog
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    scroll="body"
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogContent style={{ padding: "0" }} dividers={false}>
                        <MessageCard elevation={0} onClose={handleClose} />
                    </DialogContent>
                </Dialog>
            )}
        </FooterWapper>
    );
}
