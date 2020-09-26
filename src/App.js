import React from "react";
import { Layout, LeftSide, Content, RightSide } from "./styled/styledApp";
import Footer from "./pages/component/Footer";
import Header from "./pages/component/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Layout>
                <Header />
                <Content>
                    <LeftSide>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/skill">skill</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">portfolio</Link>
                            </li>
                            <li>
                                <Link to="/contact">contact</Link>
                            </li>
                        </ul>
                    </LeftSide>
                    <RightSide>
                        <Switch>
                            <Route exact path="/" component={() => <Home />} />
                            <Route path="/about" component={() => <About />} />
                            <Route path="/skill" component={() => <Skill />} />
                            <Route
                                path="/portfolio"
                                component={() => <Portfolio />}
                            />
                            <Route
                                path="/contact"
                                component={() => <Contact />}
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
