import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    superScrollbar: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        padding: "0px 10px",
        flex: 1,
        "& .ps__rail-x": {
            display: "none !important",
        },
        "&.ps .ps__rail-x:hover,&.ps .ps--clicking": {
            background: "transparent !important",
            opacity: "0.6 !important",
        },

        "&.ps__thumb-x ": {
            height: "6px !important",
            backgroundColor: "#aaa !important",
        },
        "&.ps .ps__rail-y:hover": {
            backgroundColor: "transparent",
        },
    },

}));

export const RouterWrapper = ({ children }) => {
    const classes = useStyles();
    const { pathname } = useLocation();

    React.useEffect(() => {
        const container = document.querySelector("#scrollContainer");
        container.scrollTop = 0;
    }, [pathname]);

    return (
        <PerfectScrollbar
            id="scrollContainer"
            className={classes.superScrollbar}
        >
            {children}
        </PerfectScrollbar>
    );
};
