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

export default function AlignItemsList() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <div className={classes.Latest}>Latest</div>
            <Divider
                className={classes.listsDivider}
                variant="middle"
                component="li"
            />
            {[0, 1, 2].map((item) => (
                <>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="div"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        Ali Connors — I'll be in your
                                        neighborhood doing errands
                                        this…testtesttesttesttesttesttesttesttest
                                    </Typography>
                                    <div className={classes.dateInfo}>
                                        2020-10-30 Jan 9
                                    </div>
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
                </>
            ))}
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                    />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="div"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Ali Connors — I'll be in your neighborhood doing
                                errands
                                this…testtesttesttesttesttesttesttesttest
                            </Typography>
                            <div className={classes.dateInfo}>
                                2020-10-30 Jan 9
                            </div>
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
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                    />
                </ListItemAvatar>
                <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                to Scott, Alex, Jennifer — Wish I could come,
                                but I'm out of town this…
                            </Typography>
                            <div className={classes.dateInfo}>
                                2020-10-30 Jan 9
                            </div>
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
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar
                        alt="Cindy Baker"
                        src="/static/images/avatar/3.jpg"
                    />
                </ListItemAvatar>
                <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Sandra Adams — Do you have Paris
                                recommendations? Have you ever…
                            </Typography>
                            <div className={classes.dateInfo}>
                                2020-10-30 Jan 9
                            </div>
                        </React.Fragment>
                    }
                />
                <div className={classes.ItemImg}>image</div>
            </ListItem>
        </List>
    );
}
