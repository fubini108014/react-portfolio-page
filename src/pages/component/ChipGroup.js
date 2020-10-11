import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.5),
        },
        "& .test": {
            color: "#fff",
            backgroundColor: "#f1011c",
            "& svg": {
                color: "#fff",
            },
            "&:hover": {
                backgroundColor: "red",
            },
        },
    },
}));
//TODO: 興趣分顏色 good at 、 soso 、 basic 、
export default function Chips() {
    const classes = useStyles();

    const handleDelete = () => {
        console.info("You clicked the delete icon.");
    };

    const handleClick = () => {
        console.info("You clicked the Chip.");
    };

    return (
        <div className={classes.root}>
            <Chip
                icon={<FaceIcon />}
                label="Volleyball"
                onClick={handleClick}
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
            />
            <Chip
                avatar={<Avatar>G</Avatar>}
                label="Guitar"
                clickable
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
            />
            <Chip
                avatar={<FaceIcon />}
                label="Hiking"
                clickable
                color="primary"
                onDelete={handleDelete}
            />
            <Chip
                icon={<FaceIcon />}
                label="Swimming"
                onDelete={handleDelete}
                clickable
                color="secondary"
                deleteIcon={<DoneIcon />}
            />
            <Chip
                icon={<FaceIcon />}
                label="Coding"
                clickable
                onDelete={handleDelete}
                color="secondary"
            />
        </div>
    );
}
