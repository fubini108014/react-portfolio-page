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
import { FadeSection } from "./FadeSection";
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
    dateInfo: {
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
    position: {
        marginLeft: "5px",
        fontSize: "16px",
    },
}));

const TimeLineItems = [
    {
        date: "2019/07 ~",
        company: "嘉實資訊",
        position: "前端工程師",
        content:
            "文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述",
        dot: "XQ",
    },
    {
        date: "2018/09 ~ 2019/06",
        company: "鉅祥企業",
        position: "AOI工程師",
        content:
            "文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述",
        dot: "GSHANK",
    },
    {
        date: "2015/09 ~ 2018/07",
        company: "政治大學",
        position: "應用數學系 碩士",
        content:
            "文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述",
        dot: "NCCU",
    },
    {
        date: "2010/09 ~ 2014/07",
        company: "中山大學",
        position: "應用數學系 學士",
        content:
            "文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述",
        dot: "NSYSU",
    },
];

function TLDot({ type }) {
    const classes = useStyles();
    return type === "XQ" ? (
        <TimelineDot className={classes.XQIcon} />
    ) : type === "GSHANK" ? (
        <TimelineDot className={classes.GshankDot}>
            <div className={classes.GshankIcon} />
        </TimelineDot>
    ) : type === "NCCU" ? (
        <TimelineDot className={classes.NccuDot}>
            <div className={classes.NccuIcon} />
        </TimelineDot>
    ) : type === "NSYSU" ? (
        <TimelineDot className={classes.NsysuDot}>
            <div className={classes.NsysuIcon} />
        </TimelineDot>
    ) : null;
}

function CustomizedTimeline(props) {
    const classes = useStyles();
    const over_sm = isWidthUp("sm", props.width);
    return (
        <Timeline align={over_sm ? "alternate" : "left"}>
            {TimeLineItems.map((item) => (
                <TimelineItem>
                    <TimelineOppositeContent
                        className={over_sm ? classes.show : classes.hide}
                    >
                        <FadeSection>
                            <Typography
                                variant="body2"
                                color="initial"
                                className={classes.dateInterval}
                            >
                                {item.date}
                            </Typography>
                        </FadeSection>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TLDot type={item.dot} />

                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent>
                        <FadeSection>
                            {!over_sm && (
                                <Typography
                                    variant="body2"
                                    color="initial"
                                    className={classes.dateInfo}
                                >
                                    {item.date}
                                </Typography>
                            )}

                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    {item.company}
                                    <span className={classes.position}>
                                        {item.position}
                                    </span>
                                </Typography>
                                <Typography>{item.content}</Typography>
                            </Paper>
                        </FadeSection>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

export default withWidth()(CustomizedTimeline);
