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
        padding: "6px 8px 12px 10px",
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
    positionTitle: {
        fontWeight: "bold",
        color: "#1b396f",
    },
    position: {
        marginLeft: "5px",
        fontSize: "16px",
    },
    companyInfo: { color: "#808080" },
    contributeList: {
        listStyleType: "square",
        paddingLeft: "24px",
        "& .li_title": {
            fontWeight: "bold",
        },
    },
}));

const TimeLineItems = [
    {
        date: "2019.07 ~ 至今",
        company: "嘉實資訊",
        position: "前端工程師",
        companyInfo: "Money DJ 理財資訊網、XQ 全球贏家看盤交易軟體",
        content: [
            {
                main: "B2B 理財網站客製化（基金、ETF、境外股票）",
                sub: "直接與客戶窗口接洽、傾聽客戶需求、提出方案解決問題 ",
            },
            {
                main: "公司產品  -  新版選股大師 ReactJS ",
                sub: "學習如何與不同專業背景知識的人進行溝通交流、跨部門合作 ",
            },
            {
                main: "提升網站速度、效能、代碼優化重構、瀏覽器相容性問題",
                sub: "",
            },
            {
                main: "TDD 開發、單元測試、E2E 測試",
                sub: "",
            },
            {
                main: "參加前端技術議程 JSDC、讀書會、分享會",
                sub: "",
            },
            {
                main: "舊專案導入 GitLab CI/CD 自動化部署",
                sub: "",
            },
        ],
        dot: "XQ",
    },
    {
        date: "2018.08 ~ 2019.07",
        company: "鉅祥企業",
        position: "AOI 電腦視覺工程師 ",
        companyInfo: "金屬類連續沖模、精密金屬零組件、精密成型模具",
        content: [
            {
                main: "深度學習電腦視覺演算法應用（Python、gluoncv、mxnet）",
                sub: "",
            },
            {
                main: "FPC 軟板檢測程式開發（C#）",
                sub: "",
            },
            {
                main: "無塵室落塵監控系統（Python、MQTT）",
                sub: "",
            },
            {
                main: "PCB 即時瑕疵檢測系統（機械手臂結合 ai 物件偵測）",
                sub: "",
            },
            {
                main: "精密零件沖壓機台之 CCD 瑕疵檢測系統開發 ",
                sub: "",
            },
        ],
        dot: "GSHANK",
    },
    {
        date: "2015/09 ~ 2018/07",
        company: "政治大學",
        position: "應用數學系 碩士",
        content: [
            {
                main: "教學助理（微積分、數學邏輯與人生通識）",
                sub:
                    "配合授課教師，於課後帶領學生進行 TA 課程學習之研究生教學助理",
            },
        ],
        dot: "NCCU",
    },
    {
        date: "2010/09 ~ 2014/07",
        company: "中山大學",
        position: "應用數學系 學士",
        content: [],
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
                        <Typography
                            variant="body2"
                            color="initial"
                            className={classes.dateInterval}
                        >
                            {item.date}
                        </Typography>
                    </TimelineOppositeContent>

                    <TimelineSeparator>
                        <TLDot type={item.dot} />

                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent>
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
                            <Typography
                                className={classes.positionTitle}
                                variant="h6"
                                component="h1"
                            >
                                {item.company}
                                <span className={classes.position}>
                                    {item.position}
                                </span>
                            </Typography>
                            <span className={classes.companyInfo}>
                                {item.companyInfo}
                            </span>
                            <ul className={classes.contributeList}>
                                {item.content.map((item) => (
                                    <>
                                        <li className="li_title">
                                            {item.main}
                                        </li>
                                        <span>{item.sub}</span>
                                    </>
                                ))}
                            </ul>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

export default withWidth()(CustomizedTimeline);
