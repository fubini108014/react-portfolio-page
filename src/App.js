import React from "react";
import { Layout, LeftSide, Content, RightSide } from "./styled/styledApp";
import Footer from "./pages/component/Footer";
import Header from "./pages/component/Header";
import LeftSideMenu from "./pages/component/LeftSideMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import Article from "./pages/Article";
import Blog from "./pages/Blog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
    const move = ({ keyCode }) => {
        console.log(keyCode);
        //38 up 40 down
        if (keyCode === 38) {
        } else if (keyCode === 40) {
        }
    };

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Layout
                role="button"
                tabIndex="0"
                onKeyDown={(e) => move(e)}
                //onKeyUp={(e) => console.log(e)}
            >
                <Header />
                <Content>
                    <LeftSide>
                        <LeftSideMenu />
                    </LeftSide>
                    <RightSide>
                        <Switch>
                            <Route exact path="/" component={() => <Home />} />
                            <Route path="/about" component={() => <About />} />
                            <Route
                                path="/service"
                                component={() => <Service />}
                            />
                            <Route
                                path="/portfolio"
                                component={() => <Portfolio />}
                            />
                            <Route
                                path="/blog/:pages?"
                                component={() => <Blog />}
                            />
                            <Route
                                path="/article/:id?"
                                component={() => <Article />}
                            />
                            <Route
                                component={() => <div>404 Not found </div>}
                            />
                        </Switch>
                    </RightSide>
                </Content>
                <Footer />
            </Layout>
        </Router>
    );
}

export default App;
