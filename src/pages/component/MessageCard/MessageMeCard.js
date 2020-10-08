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
import { motion } from "framer-motion";
const animate = { x: [-10, -4, 0, 2], opacity: [0, 0.4, 0.7, 1] };
const animate1 = { y: [20, 12, 5, 0], opacity: [0, 0.4, 0.7, 1] };
const animate2 = { opacity: [0, 0.4, 0.7, 1] };
const transition = { times: [0, 0.4, 0.7, 1] };

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
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
});

export default function ImgMediaCard({ onClose, elevation }) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={elevation}>
            <CardActionArea>
                <IconButton aria-label="closeIcon" className={classes.closeBtn}>
                    <CloseIcon onClick={onClose} />
                </IconButton>
                <motion.div
                    animate={animate}
                    transition={{ ...transition, delay: 0.1 }}
                >
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.cardContent}
                    >
                        Contact me
                    </Typography>
                </motion.div>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="220"
                    image={animal01}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <motion.div
                        animate={animate}
                        transition={{ ...transition, delay: 0.3 }}
                    >
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            I hope you've enjoyed browsing my website.
                            <br />
                            Is there anything I can help you with?
                        </Typography>
                    </motion.div>
                </CardContent>
            </CardActionArea>
            <motion.div
                animate={animate2}
                transition={{ ...transition, delay: 0.5 }}
            >
                <InputBox label="Your name" icon={<AccountCircle />} />
                <InputBox label="Email" icon={<EmailIcon />} />
                <InputBox label="Message" icon={<ChatIcon />} rows={3} />
            </motion.div>
            <motion.div
                animate={animate2}
                transition={{ ...transition, delay: 0.7 }}
            >
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
            </motion.div>
        </Card>
    );
}
