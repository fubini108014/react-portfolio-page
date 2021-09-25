import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Markdown from "markdown-to-jsx";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    cardWrapper: {
        "& .cardImg": {
            width: "100%",
        },
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
    blogDialog: {
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

/*title: "LeetCode 筆記 (python) 189. Rotate Array",
        content:
            "題目:Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.",
        date: { M: "January", D: "10" },
        id: "adsg45e6r",
        watch: "45",
        good: "10",*/

function BlogContentDialog({ open = "", blogItem, className = "", onClose }) {
    const classes = useStyles();
    const [content, setContent] = React.useState("");

    React.useEffect(() => {
        if (!open && !!content) {
            setContent("");
        }
    }, [open]);

    React.useEffect(() => {
        if (!!blogItem) {
            import(`../../../markdown/${blogItem.id}.md`)
                .then((res) => {
                    fetch(res.default)
                        .then((res) => res.text())
                        .then((res) => setContent(res))
                        .catch((err) => console.log(err));
                })
                .catch((err) => setContent("not fund page"));
        }
    }, [blogItem]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            className={classes.blogDialog}
        >
            <DialogTitle id="scroll-dialog-title" onClose={onClose}>
                {!!blogItem ? blogItem.title : ""}
            </DialogTitle>
            <DialogContent dividers={true}>
                <Markdown>{content}</Markdown>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => console.log("gogog")}
                    className={classes.launchButton}
                    variant="contained"
                    color="primary"
                >
                    Launch
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default BlogContentDialog;
