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
    searchBox: {
        width: "200px",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderRadius: "5px",
        //boxShadow: "inset 0 0 8px 1px #000000",
    },
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

const blogItemLists = [
    {
        title: "LeetCode 筆記 (python) 189. Rotate Array",
        content:
            "題目:Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.",
        date: { M: "January", D: "10" },
        id: "adsg45e6r",
        watch: "45",
        good: "10",
    },
    {
        title: "LeetCode 筆記 (python) 283. Move Zeroes",
        content:
            "題目:Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
        date: { M: "Feburary", D: "15" },
        id: "asf515eg1",
        watch: "85",
        good: "15",
    },
    {
        title: "Oui Oui333333333",
        content:
            "Sandra Adams — Do you have Paris recommendations? Have you everSandra Aall 0's to the end of it while maintaining the relative order of the non-zero elementdams — Do you have Paris recommendations?Sandra Adams — Do you have Paris recommendations?",
        date: { M: "July", D: "25" },
        id: "aresg8q",
        watch: "20",
        good: "7",
    },
    {
        title: "Brunch this weekend?444444444444444444",
        content:
            "Ali Connors — I'll be in your neighborhood doing errands this…",
        date: { M: "Jan", D: "9" },
        id: "5as4fd5as6f4",
        watch: "21",
        good: "14",
    },
    {
        title: "Brunch this weekend?55555555555555",
        content:
            "Ali Connors — I'll be in your neighborhood doing errands this…",
        date: { M: "Jan", D: "9" },
        id: "etjh54te6ah",
        watch: "7",
        good: "3",
    },
    {
        title: "Brunch this weekend?66666666666666666",
        content:
            "Ali Connors — I'll be in your neighborhood doing errands this…",
        date: { M: "Jan", D: "9" },
        id: "asd4774wq",
        watch: "6",
        good: "1",
    },
    {
        title: "Brunch this weekend?77777777777777",
        content:
            "Ali Connors — I'll be in your neighborhood doing errands this…",
        date: { M: "Jan", D: "9" },
        id: "7sca4584as6dg",
        watch: "7",
        good: "2",
    },
    {
        title: "Brunch this weekend?888888888888888888",
        content:
            "Ali Connors — I'll be in your neighborhood doing errands this…",
        date: { M: "Jan", D: "9" },
        id: "8asd146qfwf",
        watch: "4",
        good: "1",
    },
    {
        title: "Brunch this weekend?999999999999",
        content:
            "Ali Connors — I'll be in your neighborhood doing errands this…",
        date: { M: "Jan", D: "9" },
        id: "9qwf46d5asf",
        watch: "20",
        good: "1",
    },
];
const BLOG_ITEM_COUNT = 3;
const PAGE_LENGTH = Math.ceil(blogItemLists.length / BLOG_ITEM_COUNT);
function Blog() {
    const classes = useStyles();
    let { pages = 1 } = useParams();

    const [displayItemLists, setDisplayItemLists] = React.useState([]);
    React.useEffect(() => {
        const newPages = parseInt(pages - 1) * BLOG_ITEM_COUNT;
        const newLists = blogItemLists.slice(
            newPages,
            newPages + BLOG_ITEM_COUNT
        );
        setDisplayItemLists(newLists);
    }, [pages]);
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
                        count={PAGE_LENGTH}
                        renderItem={(item) => (
                            <PaginationItem
                                className={classes.paginationItem}
                                component={Link}
                                to={
                                    pages === 1
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
                    <BlogLists itemLists={displayItemLists} />
                    {/*pages === 0 ? (
                        <BlogLists itemLists={displayItemLists} />
                    ) : (
                        <BlogPages pages={pages} />
                    )*/}
                </div>
            </Slide>
        </>
    );
}

export default Blog;
