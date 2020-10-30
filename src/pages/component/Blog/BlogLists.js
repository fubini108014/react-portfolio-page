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
        color: "rgba(255,255,255,.8)",
        margin: "5px 0",
        display: "block",
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
}));
const blogItemLists = [
    {
        title: "Brunch this weekend?",
        content:
            "Ali Connors — I'll be in your neighborhood doing errands this…",
        date: "2020-10-28 Jan 9",
    },
    {
        title: "Summer BBQ",
        content:
            "to Scott, Alex, Jennifer — Wish I could come, but I'm out of town this…",
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
                                    <span className={classes.dateInfo}>
                                        {item.date}
                                    </span>
                                </React.Fragment>
                            }
                        />
                        <div className={classes.ItemImg}>image</div>
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
