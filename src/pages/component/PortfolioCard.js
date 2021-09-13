import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import VisibilityIcon from "@material-ui/icons/Visibility";

import {
    ProCardContainer,
    Description,
    Introduction,
    PortfolioImage,
} from "../../styled/styledPortfolio";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    launchButton: {
        backgroundColor: "#113679",
        "&:hover": { backgroundColor: "#1c4a9e" },
    },
    protfolioCardDialog: {
        "& .MuiDialog-paperWidthSm": {
            minHeight: "50vh",
            minWidth: "50vw",
        },
    },
}));

const DialogTitle = ({ children, onClose, ...other }) => {
    const classes = useStyles();

    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
};

function PortfolioCard({
    title = "",
    link = "",
    introduction = "",
    content = "",
    image = "default",
}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const descriptionElementRef = React.useRef(null);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleGoLanuch = (url) => {
        window.open(url, "PortfolioCard");
    };

    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    return (
        <>
            <ProCardContainer onClick={handleClickOpen}>
                <PortfolioImage imgTag={image} />
                <Description>{title}</Description>
                <Introduction>{introduction}</Introduction>
                <VisibilityIcon fontSize="large" className="showModalBtn" />
            </ProCardContainer>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                className={classes.protfolioCardDialog}
            >
                <DialogTitle id="scroll-dialog-title" onClose={handleClose}>
                    {title}
                </DialogTitle>
                <DialogContent dividers={true}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => handleGoLanuch(link)}
                        className={classes.launchButton}
                        variant="contained"
                        color="primary"
                    >
                        Launch
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default PortfolioCard;
