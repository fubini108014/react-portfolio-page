import React from "react";
import { Layout, Body } from "./styled/styledLayout";
import Footer from "./pages/component/Footer";
import Header from "./pages/component/Header";
import { VerticalNavigation } from "./pages/component/Navigation/Navigation";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./pages/constants/routerConfig";
import { RouterWrapper } from "./pages/component/RouterWrapper";

function App() {
    const move = ({ keyCode }) => {
        console.log(keyCode);
        //38 up 40 down
        if (keyCode === 38) {
        } else if (keyCode === 40) {
        }
    };
    console.log("ffffffff");
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Layout
                role="button"
                tabIndex="0"
                onKeyDown={(e) => move(e)}
                //onKeyUp={(e) => console.log(e)}
            >
                <Header />
                <Body>
                    <VerticalNavigation />
                    <RouterWrapper>
                        <Switch>
                            <Route exact path="/" component={() => <Home />} />
                            {Routes.map((route, idx) => (
                                <Route
                                    key={`route_${idx}`}
                                    path={route.path}
                                    component={() => route.page}
                                />
                            ))}
                            <Route
                                component={() => <div>404 Not found </div>}
                            />
                        </Switch>
                    </RouterWrapper>
                </Body>
                <Footer />
            </Layout>
        </Router>
    );
}

export default App;
