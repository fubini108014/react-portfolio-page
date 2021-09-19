import React,{useState ,useRef ,useEffect} from "react";
import Slide from "@material-ui/core/Slide";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import BlogLists from "./component/Blog/BlogLists";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { BLOG_ITEM_LISTS } from "./component/Helper";
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
    blogPaginationSticky:{
        padding: '6px 5px 0px 5px',
        zIndex: 10,
        position: 'sticky',
        top: '-1px',
        '&.isSticky':{
            backdropFilter: 'blur(50px)',
            boxShadow: '0 4px 3px -2px #161616c7',
        },
        '& .paginationContainer':{
            display:'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& .pagination': {
                "& .Mui-selected": {
                    backgroundColor: "rgb(255 255 255 / 30%)",
                },
                "& .MuiPaginationItem-ellipsis": {
                    color: "#FFF",
                },
            },
        
            '& .paginationItem': {
                color: "#FFF",
            },

            '& .searchBox': {
                width: "200px",
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: "5px",
                '& .iconButton':{
                    padding: 10, color: "#FFF"
                }
            }, 
        },
        '& .customDivider': {
            backgroundColor: "rgba(255,255,255,.8)",
            margin: "5px 0",
        },

    },
   
    

}));

const BlogPagination=({pages,className})=>{
    const [isSticky, setIsSticky] = useState(false);
    const ref = useRef();
    
    // mount 
    useEffect(()=>{
        
        const cachedRef = ref.current,
            observer = new IntersectionObserver(
                ([e]) => setIsSticky(e.intersectionRatio < 1),
                {threshold: [1]}
            )
            console.log('cachedRef:',cachedRef);
        observer.observe(cachedRef);
        
        // unmount
        return function(){
        observer.unobserve(cachedRef);
        }
    }, [])

    return (
    <div className={`${className} ${isSticky?'isSticky':''}`} ref={ref}>
        <div className={'paginationContainer'}>
            <Pagination
                page={parseInt(pages)}
                className={'pagination'}
                count={PAGE_LENGTH}
                renderItem={(item) => (
                    <PaginationItem
                        className={'paginationItem'}
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
            <div className={'searchBox'}>
                <IconButton
                    type="submit"
                    className={'iconButton'}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </div>
        </div>
        <Divider
            className={'customDivider'}
            variant="fullWidth"
        />
    </div>
    );
}


const BLOG_ITEM_COUNT = 5;
const PAGE_LENGTH = Math.ceil(BLOG_ITEM_LISTS.length / BLOG_ITEM_COUNT);
function Blog() {
    const classes = useStyles();
    let { pages = 1 } = useParams();

    const [displayItemLists, setDisplayItemLists] = React.useState([]);
    React.useEffect(() => {
        const newPages = parseInt(pages - 1) * BLOG_ITEM_COUNT;
        const newLists = BLOG_ITEM_LISTS.slice(
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
                    <BlogPagination  pages={pages} className={classes.blogPaginationSticky}/>
                    <BlogLists itemLists={displayItemLists} />
                </div>
            </Slide>
        </>
    );
}

export default Blog;
