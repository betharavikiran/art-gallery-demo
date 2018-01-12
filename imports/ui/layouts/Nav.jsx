import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <nav className="header static" data-pages="header">
            <nav className="header relative dark-solid">
                <div className="container relative">
                    <div className="pull-left">
                        <div className="header-inner">
                            <img src="img/logo_white.png" className="logo" alt=""/>
                        </div>
                    </div>
                    <div className="visible-sm-inline visible-xs-inline menu-toggler pull-right" data-pages="header-toggle" data-pages-element="#header">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>
                    <div className="pull-right hidden-xs hidden-sm">
                        <div className="header-inner">
                            <ul className="menu no-padding">
                                <li>
                                    <a className="text-master text-white fs-16 " href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a className="text-master text-white fs-16 " href="#"><i className="fa fa-dribbble"></i></a>
                                </li>
                                <li>
                                    <a className="text-master text-white fs-16" href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </nav>
                <nav className="header sm-header relative horizontal dark sm-p-t-20" data-spy="affix" data-offset-top="60">
                    <div className="container relative ">
                        <div className="menu-content" data-pages-direction="slideRight" id="header">
                            <div className="pull-right">
                                <a href="#" className="text-black link padding-10 visible-xs-inline visible-sm-inline pull-right m-t-10 m-b-10 m-r-10" data-pages="header-toggle" data-pages-element="#header">
                                    <i className=" pg-close_line"></i>
                                </a>
                            </div>
                            <div className="pull-left sm-block sm-full-width">
                                <div className="header-inner">
                                    <ul className="menu no-padding">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pull-right sm-block sm-full-width">
                                <div class="header-inner">
                                    <ul class="menu no-padding">
                                        <li>
                                            <a href="#" data-text="Home">Sign up </a>
                                        </li>
                                        <li>
                                            <a href="#" data-text="Drop">Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </nav>
        );
    }
}

export default withRouter(Nav);