import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: { color: "#FFF" },
}));
function BlogPages({ pages }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1> Page {pages} !!!</h1>
        </div>
    );
}

export default BlogPages;
