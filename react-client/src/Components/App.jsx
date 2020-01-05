import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HomePage = lazy(() => import("./HomePage"));
const StuffPage = lazy(() => import("./StuffPage"));
const ResumePage = lazy(() => import("./ResumePage"));

import NavBar from "./HeaderComponent/NavBar";
import Footer from "./FooterComponent/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="section content">
            <Suspense fallback={<div>Loading Page...</div>}>
              <Route exact path="/" component={HomePage} />
              <Route path="/stuff" component={StuffPage} />
              <Route path="/resume" component={ResumePage} />
            </Suspense>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
