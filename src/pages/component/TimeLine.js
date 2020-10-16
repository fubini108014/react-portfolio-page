import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import NccuSVG from "../../assets/img/NCCU.svg";
import NsysuSVG from "../../assets/img/nsysu.png";
import GshankPNG from "../../assets/img/Gshank.png";
import XQPNG from "../../assets/img/XQ-Logo.png";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "6px 16px",
        textAlign: "left",
    },
    hide: { display: "none" },
    show: { display: "block" },
    dateInterval: {
        margin: "11px 0",
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    position: {
        margin: "5px 0",
    },
    NccuIcon: {
        height: "26px",
        width: "26px",
        display: "inline-flex",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${NccuSVG})`,
    },
    NccuDot: {
        color: "#fff",
        borderColor: "transparent",
        borderWidth: "0px",
        background: "linear-gradient(to right, #83a4d4, #b6fbff)",
    },
    NsysuIcon: {
        height: "26px",
        width: "26px",
        display: "inline-flex",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${NsysuSVG})`,
    },
    NsysuDot: {
        color: "#fff",
        borderColor: "transparent",
        background: "linear-gradient(to right, #ffefba, #ffffff)",
        borderWidth: "0px",
    },
    GshankIcon: {
        height: "26px",
        width: "26px",
        display: "inline-flex",
        backgroundRepeat: "no-repeat",
        backgroundSize: "108% 100%",
        backgroundPosition: "center",
        backgroundImage: `url(${GshankPNG})`,
    },
    GshankDot: {
        color: "#fff",
        borderColor: "transparent",
        borderWidth: "0px",
        background: "linear-gradient(to right, #8697ea, #c5d9f5)",
    },
    XQIcon: {
        height: "26px",
        width: "26px",
        display: "inline-flex",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${XQPNG})`,
        borderWidth: "0px",
    },
}));

function CustomizedTimeline(props) {
    const classes = useStyles();
    const over_sm = isWidthUp("sm", props.width);
    return (
        <Timeline align={over_sm ? "alternate" : "left"}>
            <TimelineItem>
                <TimelineOppositeContent
                    className={over_sm ? classes.show : classes.hide}
                >
                    <Typography
                        variant="body2"
                        color="initial"
                        className={classes.dateInterval}
                    >
                        2019/07 ~
                    </Typography>
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot className={classes.XQIcon} />

                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    {!over_sm && (
                        <Typography
                            variant="body2"
                            color="initial"
                            className={classes.position}
                        >
                            2019/07 ~
                        </Typography>
                    )}
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            嘉實資訊
                            <span style={{ fontSize: "16px" }}>
                                &emsp;前端工程師
                            </span>
                        </Typography>
                        <Typography>
                            文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    className={over_sm ? classes.show : classes.hide}
                >
                    <Typography
                        variant="body2"
                        color="inherit"
                        className={classes.dateInterval}
                    >
                        2018/09 ~ 2019/06
                    </Typography>
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot className={classes.GshankDot}>
                        <div className={classes.GshankIcon} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    {!over_sm && (
                        <Typography
                            variant="body2"
                            color="inherit"
                            className={classes.position}
                        >
                            2018/09 ~ 2019/06
                        </Typography>
                    )}
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            鉅祥企業
                            <span style={{ fontSize: "16px" }}>
                                &emsp;AOI工程師
                            </span>
                        </Typography>
                        <Typography>
                            文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    className={over_sm ? classes.show : classes.hide}
                >
                    <Typography
                        variant="body2"
                        color="initial"
                        className={classes.dateInterval}
                    >
                        2015/09 ~ 2018/07
                    </Typography>
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot className={classes.NccuDot}>
                        <div className={classes.NccuIcon} />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                </TimelineSeparator>
                <TimelineContent>
                    {!over_sm && (
                        <Typography
                            variant="body2"
                            color="initial"
                            className={classes.position}
                        >
                            2015/09 ~ 2018/07
                        </Typography>
                    )}
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            政治大學
                            <span style={{ fontSize: "16px" }}>
                                &ensp;應用數學系&ensp;碩士
                            </span>
                        </Typography>

                        <Typography>
                            文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    className={over_sm ? classes.show : classes.hide}
                >
                    <Typography
                        variant="body2"
                        color="initial"
                        className={classes.dateInterval}
                    >
                        2010/09 ~ 2014/07
                    </Typography>
                </TimelineOppositeContent>

                <TimelineSeparator>
                    <TimelineDot className={classes.NsysuDot}>
                        <div className={classes.NsysuIcon} />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    {!over_sm && (
                        <Typography
                            variant="body2"
                            color="initial"
                            className={classes.position}
                        >
                            2010/09 ~ 2014/07
                        </Typography>
                    )}
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            中山大學
                            <span style={{ fontSize: "16px" }}>
                                &ensp;應用數學系&ensp;學士
                            </span>
                        </Typography>
                        <Typography>
                            文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

export default withWidth()(CustomizedTimeline);
