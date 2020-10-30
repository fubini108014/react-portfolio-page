import React from "react";
import Slide from "@material-ui/core/Slide";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import BlogLists from "./component/Blog/BlogLists";
import BlogPages from "./component/Blog/BlogPages";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { Link, useParams } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    blogContainer: {},
    blogTitle: {
        color: "#fff",
        padding: "5px 0",
        fontSize: "1.5rem",
    },
    blogDesc: {
        color: "rgba(255,255,255,.8)",
        padding: "5px 0",
        fontSize: "1.2rem",
    },
    customDivider: {
        backgroundColor: "rgba(255,255,255,.8)",
        margin: "5px 0",
    },
    searchBox: {},
    pagination: {
        "& .Mui-selected": {
            backgroundColor: "rgb(255 255 255 / 30%)",
        },
        "& .MuiPaginationItem-ellipsis": {
            color: "#FFF",
        },
    },

    paginationItem: {
        color: "#FFF",
    },
    iconButton: { padding: 10, color: "#FFF" },
}));
function Blog() {
    const classes = useStyles();
    let { pages = 0 } = useParams();
    return (
        <>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit>
                <div className={classes.blogContainer}>
                    <div className={classes.blogTitle}>My Blog</div>
                    <div className={classes.blogDesc}>
                        文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述文字敘述
                    </div>
                    <div className={classes.searchBox}>
                        <IconButton
                            type="submit"
                            className={classes.iconButton}
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <Pagination
                        page={parseInt(pages)}
                        className={classes.pagination}
                        count={10}
                        renderItem={(item) => (
                            <PaginationItem
                                className={classes.paginationItem}
                                component={Link}
                                to={
                                    pages === 0
                                        ? `blog/${item.page}`
                                        : `${item.page}`
                                }
                                {...item}
                            />
                        )}
                    />
                    <Divider
                        className={classes.customDivider}
                        variant="fullWidth"
                    />
                    {pages === 0 ? <BlogLists /> : <BlogPages pages={pages} />}
                </div>
            </Slide>
        </>
    );
}

export default Blog;
