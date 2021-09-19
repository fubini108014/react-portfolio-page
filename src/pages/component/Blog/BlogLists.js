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
import BlogContentDialog from './BlogContentDialog';

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
        display: "-webkit-box",
        "-webkit-line-clamp": 3,
        "-webkit-box-orient": "vertical",
        whiteSpace: "normal",
    },
    listsDivider: {
        marginTop: "5px",
        backgroundColor: "rgba(255,255,255,.8)",
    },
    dateContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "5px 0",
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
    let history = useHistory();
    const isMobile = useMediaQuery("(max-width:500px)");
    const [bolgDialog, setBolgDialog] = React.useState({open:false,blogID:''});

    const handleClickOpen = (id) => {
        setBolgDialog({open:true,blogID:id});
    };
    const handleClose = () => {
        setBolgDialog({open:false,blogID:''});
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
                            onClick={() =>handleClickOpen(item.id)}
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
                        {!isMobile && (
                            <div className={classes.ItemImg}>image</div>
                        )}
                    </ListItem>
                </React.Fragment>
            ))}
            <BlogContentDialog open={bolgDialog.open} blogID={bolgDialog.blogID} onClose={handleClose}/>
        </List>
    );
}
