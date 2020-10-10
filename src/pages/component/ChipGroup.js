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
                avatar={<Avatar>G</Avatar>}
                label="guitar"
                onClick={handleClick}
            />
            <Chip
                avatar={
                    <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
                }
                label="Deletable"
                onDelete={handleDelete}
            />
            <Chip
                icon={<FaceIcon />}
                label="Clickable deletable"
                onClick={handleClick}
                onDelete={handleDelete}
            />
            <Chip
                label="Volleyball"
                onClick={handleClick}
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
            />
            <Chip label="Clickable Link" component="a" href="#chip" clickable />
            <Chip
                avatar={<Avatar>M</Avatar>}
                label="Primary clickable"
                clickable
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
            />
            <Chip
                icon={<FaceIcon />}
                label="Primary clickable"
                clickable
                className="test"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
            />
            <Chip
                label="Deletable primary"
                onDelete={handleDelete}
                color="primary"
            />
            <Chip
                icon={<FaceIcon />}
                label="Deletable secondary"
                onDelete={handleDelete}
                color="secondary"
            />
        </div>
    );
}
