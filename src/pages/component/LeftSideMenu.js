import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory, useLocation } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import HomeIcon from "@material-ui/icons/Home";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}
const PathMap1 = {
    0: "/",
    1: "/about",
    2: "/service",
    3: "/portfolio",
    4: "/blog",
};
const PathMap2 = {
    "/": 0,
    "/about": 1,
    "/service": 2,
    "/portfolio": 3,
    "/blog": 4,
};
const PathLists = ["/", "/about", "/service", "/portfolio", "/blog"];
function getMenuIdx(path) {
    if (path.indexOf("blog") > -1 || path.indexOf("article") > -1) {
        return 4;
    } else {
        return PathMap2[path];
        //return PathLists.indexOf(path);
    }
}

function LeftSideMenu() {
    const classes = useStyles();
    let history = useHistory();
    const location = useLocation();

    const [value, setValue] = React.useState(getMenuIdx(location.pathname));
    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push(PathMap1[newValue]);
        //PathLists[newValue]
    };
    return (
        <div>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Home" icon={<HomeIcon />} {...a11yProps(0)} />
                <Tab
                    label="About"
                    icon={<AccountCircleIcon />}
                    {...a11yProps(1)}
                />
                <Tab label="Service" icon={<InfoIcon />} {...a11yProps(2)} />
                <Tab
                    label="Portfolio"
                    icon={<AssignmentIcon />}
                    {...a11yProps(3)}
                />
                <Tab
                    label="Blog"
                    icon={<LibraryBooksIcon />}
                    {...a11yProps(4)}
                />
            </Tabs>
        </div>
    );
}

export default LeftSideMenu;
