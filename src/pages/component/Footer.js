import React from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import Popover from "@material-ui/core/Popover";
import Tooltip from "@material-ui/core/Tooltip";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import SmsIcon from "@material-ui/icons/Sms";
import MessageCard from "./MessageCard/MessageMeCard";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useRWD from "../customhooks/useRWD";
const FooterWapper = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #000;
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

export const CopyRight = styled.div`
    color: #fff;
    flex: 0 0 300px;
    margin: 5px;
    font-size: 0.5rem;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 760px) {
        display: none;
    }
`;

const IconGroup = styled.div`
    color: #fff;
    flex: 0 0 200px;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    & .IconItem {
        margin: 5px;
        cursor: pointer;
    }
`;

const MessageMe = styled.div`
    color: #fff;
    margin: 0 10px;
    font-size: 1rem;
    justify-content: center;
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
            <CopyRight>© 2020 Josh Chang. All rights reserved.</CopyRight>

            <IconGroup>
                <FacebookIcon className="IconItem" />
                <InstagramIcon className="IconItem" />
                <TwitterIcon className="IconItem" />
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
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogContent
                        className="messageCardDialog"
                        dividers={false}
                    >
                        <MessageCard elevation={0} onClose={handleClose} />
                    </DialogContent>
                </Dialog>
            )}
        </FooterWapper>
    );
}
