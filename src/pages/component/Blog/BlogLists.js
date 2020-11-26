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
        marginTop: "5px",
        backgroundColor: "rgba(255,255,255,.8)",
    },
    dateContainer: {
        display: "flex",
        justifyContent: "space-between",
        margin: "5px 0",
        color: "#FFF",
        "& .dateInfo": {},
        "& .viewInfo": { marginRight: "10px" },
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

export default function BlogLists({ itemLists = [] }) {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <div className={classes.Latest}>Latest</div>

            {itemLists.map((item, idx) => (
                <React.Fragment key={idx}>
                    <Divider
                        className={classes.listsDivider}
                        variant="middle"
                        component="li"
                    />
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
                                    <span className={classes.dateContainer}>
                                        <span className="dateInfo">
                                            {item.date}
                                        </span>
                                        <span className="viewInfo">
                                            瀏覽45 回覆0 收藏
                                        </span>
                                    </span>
                                </React.Fragment>
                            }
                        />
                        <div className={classes.ItemImg}>image</div>
                    </ListItem>
                </React.Fragment>
            ))}
        </List>
    );
}
