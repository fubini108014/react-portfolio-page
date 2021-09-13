import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import InputBox from "./InputBox";
import Typography from "@material-ui/core/Typography";
import animal01 from "../../../../src/images/pexels-snapwire-292426.jpg";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import SendIcon from "@material-ui/icons/Send";
import ChatIcon from "@material-ui/icons/Chat";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,

        [theme.breakpoints.up("md")]: {
            width: 345,
        },
    },
    cardActions: { justifyContent: "center" },
    sendBtn: { width: "100%", letterSpacing: "5px" },
    closeBtn: {
        position: "absolute",
        color: "#FFF",
        right: "5px",
        top: "5px",
        "&:hover": {
            backgroundColor: "rgb(245 245 245 / 25%)",
        },
    },
    cardContent: {
        position: "absolute",
        top: "15px",
        left: "15px",
        color: "#FFF",
    },
}));

export default function ImgMediaCard({ onClose, elevation = 0 }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={elevation}>
            <CardActionArea>
                <IconButton aria-label="closeIcon" className={classes.closeBtn}>
                    <CloseIcon onClick={onClose} />
                </IconButton>

                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.cardContent}
                >
                    Contact me
                </Typography>

                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="220"
                    image={animal01}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        I hope you've enjoyed browsing my website.
                        <br />
                        Is there anything I can help you with?
                    </Typography>
                </CardContent>
            </CardActionArea>

            <InputBox label="Your name" icon={<AccountCircle />} />
            <InputBox label="Email" icon={<EmailIcon />} />
            <InputBox label="Message" icon={<ChatIcon />} rows={3} />

            <CardActions className={classes.cardActions}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.sendBtn}
                    endIcon={<SendIcon />}
                >
                    Send
                </Button>
            </CardActions>
        </Card>
    );
}
