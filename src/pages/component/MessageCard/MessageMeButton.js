import React from "react";
import Fab from "@material-ui/core/Fab";
import Popover from "@material-ui/core/Popover";
import Tooltip from "@material-ui/core/Tooltip";
import SmsIcon from "@material-ui/icons/Sms";
import MessageCard from "./MessageMeCard";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { MessageMe } from "../../../styled/styledFooter";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

export default function MessageMeButton() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
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

            {isMobile ? (
                <Dialog
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    scroll="body"
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogContent style={{ padding: "0" }} dividers={false}>
                        <MessageCard onClose={handleClose} />
                    </DialogContent>
                </Dialog>
            ) : (
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
            )}
        </>
    );
}
