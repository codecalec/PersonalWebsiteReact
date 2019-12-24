import React, { Component } from 'react';
import { HashRouter, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import StuffPage from './StuffPage';
import ContactPage from './ContactPage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <NavBar />
                    <div className="content">
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/stuff" component={StuffPage}/>
                        <Route path="/contact" component={ContactPage}/>    
                    </div>
                    <Footer/>
                </div>
            </HashRouter>
        )
    }
}

export default App;