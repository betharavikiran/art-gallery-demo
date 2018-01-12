import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';

import Home from './../pages/home/Home';
import ContactUs from './../pages/contact-us/ContactUs';



class App extends Component {
    state = {
        loading: false
    };

    componentDidMount() {
        //setTimeout(() => this.setState({ loading: false }), 0);
    }

    render() {
        const { loading } = this.state;

        if(loading) {
            return <Loading/>;
        }

        return (
            <Router>
                <div className="page-container">
                    <Nav/>
                    <Header/>
                    <div className="row">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/contact-us" component={ContactUs}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default  App;