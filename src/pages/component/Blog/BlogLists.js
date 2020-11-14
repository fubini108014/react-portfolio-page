import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        color: "#FFF",
        maxWidth: "70ch",
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: "10px",
    },
    Latest: {
        color: "#FFF",
        margin: "10px 0",
        paddingLeft: "16px",
        paddingRight: "16px",
    },
    inline: {
        color: "rgba(255,255,255,0.7)",
        display: "inline",
    },
    listsDivider: {
        backgroundColor: "rgba(255,255,255,.8)",
    },
    dateInfo: {
        position: "absolute",
        left: "71px",
        bottom: "14px",
        color: "rgba(255,255,255,.8)",
    },
    ItemImg: {
        width: "180px",
        height: "120px",
        margin: "7px",
        border: "1px solid #fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    itemTitle: {
        marginTop: 0,
        "& .MuiTypography-body1": {
            fontSize: "1.2rem",
            cursor: "pointer",
        },
    },
}));
const blogItemLists = [
    {
        title: "LeetCode 筆記 (python) 189. Rotate Array",
        content:
            "題目:Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.",
        date: "2020-11-14 Jan 9",
    },
    {
        title: "LeetCode 筆記 (python) 283. Move Zeroes",
        content:
            "題目:Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
        date: "2020-10-29 Jan 9",
    },
    {
        title: "Oui Oui",
        content:
            "Sandra Adams — Do you have Paris recommendations? Have you ever…",
        date: "2020-10-30 Jan 9",
    },
    {
        title: "Brunch this weekend?",
        content:
            "Ali Connors — I'll be in your neighborhood doing errands this…",
        date: "2020-10-31 Jan 9",
    },
];
export default function BlogLists() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <div className={classes.Latest}>Latest</div>
            <Divider
                className={classes.listsDivider}
                variant="middle"
                component="li"
            />
            {blogItemLists.map((item, idx) => (
                <React.Fragment key={idx}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            onClick={() => console.log("asdasd")}
                            className={classes.itemTitle}
                            primary={item.title}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {item.content}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                        <div className={classes.ItemImg}>image</div>
                        <span className={classes.dateInfo}>{item.date}</span>
                    </ListItem>
                    <Divider
                        className={classes.listsDivider}
                        variant="middle"
                        component="li"
                    />
                </React.Fragment>
            ))}
        </List>
    );
}
