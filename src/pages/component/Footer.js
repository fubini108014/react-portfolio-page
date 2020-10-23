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

import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

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
const AudioContainer = styled.div`
    color: #fff;
    flex: 1 0 30%;
    justify-content: center;
    align-items: center;
    display: flex;
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

const audioList1 = [
    {
        name: "Despacito",
        singer: "Luis Fonsi",
        cover:
            "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
        musicSrc:
            "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
    },
    {
        name: "Dorost Nemisham",
        singer: "Sirvan Khosravi",
        cover:
            "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
        musicSrc:
            "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
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
            <AudioContainer>
                <ReactJkMusicPlayer
                    className="musicPlayer"
                    mode="full"
                    showDownload={false}
                    showThemeSwitch={false}
                    showLyric={false}
                    showPlayMode={false}
                    showDestroy={false}
                    toggleMode={false}
                    responsive={false}
                    showReload={false}
                    audioLists={audioList1}
                />
            </AudioContainer>
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
