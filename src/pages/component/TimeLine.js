import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import NccuSVG from "../../assets/img/NCCU.svg";
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
        height: "24px",
        width: "24px",
        display: "inline-flex",
        backgroundSize: "cover",
        backgroundImage: `url(${NccuSVG})`,
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
                    <TimelineDot>
                        <div className={classes.NccuIcon} />
                    </TimelineDot>
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
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
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
                    <TimelineDot color="primary" variant="outlined">
                        <HotelIcon />
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
                    <TimelineDot color="secondary">
                        <RepeatIcon />
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
