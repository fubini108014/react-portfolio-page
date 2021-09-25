import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from "react-router-dom";
import BlogContentDialog from "./BlogContentDialog";
import imageMapping from "../ImagesCenter";

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
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "flex",
        whiteSpace: "normal",
    },
    listsDivider: {
        //marginTop: "5px",
        backgroundColor: "rgba(255,255,255,.8)",
    },
    dateContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        //margin: "5px 0",
        color: "#FFF",
        "& .dateInfo": {},
        "& .viewInfo": { marginRight: "10px" },
        "& .othersBtn": {
            color: "#FFF",
            padding: "4px 6px",
            margin: "0 2px",
            "@media (max-width:500px)": { minWidth: "40px" },
        },
        "& .othersIcon": { fontSize: "1.2rem", margin: "0 3px" },
    },
    ItemImg: {
        minWidth: "120px",
        width: "180px",
        height: "120px",
        margin: "7px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .cardImg": {
            width: "100%",
            border: "1px solid #6b6b6b",
            padding: "1px",
        },
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
    let history = useHistory();
    const isMobile = useMediaQuery("(max-width:500px)");
    const [bolgDialog, setBolgDialog] = React.useState({
        open: false,
        blogItem: null,
    });

    const handleClickOpen = (id) => {
        const getBlogItem = itemLists.find((el) => el.id === id);
        setBolgDialog({
            open: true,
            blogItem: !!getBlogItem ? getBlogItem : null,
        });
    };
    const handleClose = () => {
        setBolgDialog({ open: false, blogItem: null });
    };

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
                            onClick={() => handleClickOpen(item.id)}
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
                                        {!isMobile && (
                                            <span className={classes.ItemImg}>
                                                <img
                                                    src={
                                                        imageMapping[item.image]
                                                    }
                                                    className={"cardImg"}
                                                    alt="Background"
                                                />
                                            </span>
                                        )}
                                    </Typography>
                                    <span className={classes.dateContainer}>
                                        <span className="dateInfo">
                                            {`${
                                                !isMobile
                                                    ? item.date.M
                                                    : item.date.M.slice(0, 3)
                                            } ${item.date.D}`}
                                        </span>
                                        <span className="viewInfo">
                                            <Button className="othersBtn">
                                                <VisibilityIcon className="othersIcon" />
                                                {!isMobile && "瀏覽 "}
                                                {item.watch}
                                            </Button>
                                            <Button className="othersBtn">
                                                <ThumbUpIcon className="othersIcon" />
                                                {!isMobile && "讚 "}
                                                {item.good}
                                            </Button>
                                            <Button className="othersBtn">
                                                <LibraryAddIcon className="othersIcon" />
                                                {!isMobile && "收藏"}
                                            </Button>
                                        </span>
                                    </span>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </React.Fragment>
            ))}
            <BlogContentDialog
                open={bolgDialog.open}
                blogItem={bolgDialog.blogItem}
                onClose={handleClose}
            />
        </List>
    );
}
