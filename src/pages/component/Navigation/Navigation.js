import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory, useLocation } from "react-router-dom";
import { Routes } from "../../constants/routerConfig";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    bottomNavigation: {
        width: "100%",
    },
    VerticalNavigationWrapper: {
        boxSizing: "border-box",
        color: "#fff",
        width: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        "& .verticalTabsNavigation": {
            borderRight: `1px solid ${theme.palette.divider}`,
            alignItems: "center",
        },
    },
}));

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

function getMenuIdx(path) {
    if (path === "/") return 0;
    let getRouter = Routes.find((route) => path.indexOf(route.defaultPath) > -1);
    if (!!getRouter) {
        return getRouter.pageId;
    }
}

export function VerticalNavigation() {
    const classes = useStyles();
    let history = useHistory();
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const [value, setValue] = React.useState(getMenuIdx(location.pathname));
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        const getRouter = Routes.find((route) => route.pageId === newValue);
        history.push(getRouter.defaultPath);
    };

    return isMobile ? (
        <></>
    ) : (
        <div className={classes.VerticalNavigationWrapper}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={"verticalTabsNavigation"}
            >
                {Routes.map((route, idx) => (
                    <Tab
                        key={`key_${idx}`}
                        label={route.text}
                        icon={route.icon}
                        {...a11yProps(idx)}
                    />
                ))}
            </Tabs>
        </div>
    );
}

export function SimpleBottomNavigation() {
    const classes = useStyles();
    let history = useHistory();
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const [value, setValue] = React.useState(getMenuIdx(location.pathname));

    const handleChange = (event, newValue) => {
        setValue(newValue);
        const getRouter = Routes.find((route) => route.pageId === newValue);
        history.push(getRouter.defaultPath);
    };

    return isMobile ? (
        <div>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                showLabels
                className={classes.bottomNavigation}
            >
                {Routes.map((route, idx) => (
                    <BottomNavigationAction
                        key={`b_key_${idx}`}
                        label={route.text}
                        icon={route.icon}
                    />
                ))}
            </BottomNavigation>
        </div>
    ) : (
        <></>
    );
}
