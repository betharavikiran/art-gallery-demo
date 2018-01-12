import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Row, Col, Grid } from 'react-bootstrap';

class Footer extends Component {
    render(){
        return (
            <section className="p-b-55 p-t-75 xs-p-b-20 bg-master-darker ">
                <div className="container">
                    <div className="row">
                        <Grid>
                            <Row className="show-grid">
                                <Col xsOffset={1} xs={5} mdOffset={1} md={2}>
                                    <h6 className="font-montserrat text-uppercase fs-14 text-white p-b-10">Column 1</h6>
                                    <ul className="no-style">
                                        <li className="m-b-5 no-padding"><a href="#" className="link text-white ">Item 1</a></li>
                                        <li className="m-b-5 no-padding"><a href="#" className="link text-white">Item 2</a></li>
                                        <li className="m-b-5 no-padding"><a href="#" className="link text-white">Item 3</a></li>
                                        <li className="m-b-5 no-padding"><a href="#" className="link text-white">Item 4</a></li>
                                    </ul>
                                </Col>
                                <Col xsOffset={1} xs={5} md={2}>
                                    <h6 className="font-montserrat text-uppercase fs-14 text-white p-b-10">Column 2</h6>
                                    <ul className="no-style">
                                        <li className="m-b-5 no-padding"><a href="#" className="link text-white ">Item 5</a></li>
                                        <li className="m-b-5 no-padding"><a href="#" className="link text-white ">Item 6</a></li>
                                    </ul>
                                </Col>
                                <Col xsOffset={1} xs={6} md={2}>
                                    <h6 className="font-montserrat text-uppercase fs-14 text-white p-b-10">Column 3</h6>
                                    <ul className="no-style">
                                        <li className="m-b-5 no-padding"><a href="#" className="link text-white ">Item 7</a></li>
                                        <li className="m-b-5 no-padding"><a href="#" className="link text-white">Item 8</a></li>
                                        <li className="m-b-5 no-padding"><a href="#" className="link text-white">Item 9</a></li>
                                    </ul>
                                </Col>
                                <Col xsOffset={1} xs={6} md={2}>
                                    <h6 className="font-montserrat text-uppercase fs-14 text-white p-b-10">Column 4</h6>
                                    <ul className="no-style">
                                        <li className="m-b-5 no-padding"><a href="#" className="link text-white ">Item 10</a></li>
                                        <li className="m-b-5 no-padding"><a href="#" className="link text-white">Item 11</a></li>
                                        <li className="m-b-5 no-padding"><a href="#" className="link text-white">Item 12</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Footer);


/*
<section className="p-b-55 p-t-75 xs-p-b-20 bg-master-darker ">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2 col-xs-6 xs-m-b-20">
                                <h6 className="font-montserrat text-uppercase fs-14 text-white p-b-10">Company </h6>
                                <ul className="no-style">
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white ">Design</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Features</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Team</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Work Station</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Privacy</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Legal</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Jobs</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-2 col-xs-6 xs-m-b-20">
                                <h6 className="font-montserrat text-uppercase fs-14 text-white p-b-10">Work </h6>
                                <ul className="no-style">
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white ">Apps</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white ">Popular</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white ">Web-Arch</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Pages</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Frontend</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Charity</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Marketplaces</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-2 col-xs-6 xs-m-b-20">
                                <h6 className="font-montserrat text-uppercase fs-14 text-white p-b-10">Clients </h6>
                                <ul className="no-style">
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white ">Our team</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Our location</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Contact Us</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">About Us</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-2 col-xs-6 xs-m-b-20">
                                <h6 className="font-montserrat text-uppercase fs-14 text-white p-b-10">Pages </h6>
                                <ul className="no-style">
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white ">Pages</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Home</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Tour</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Versions</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Dropdown</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Pricing Page</a></li>
                                    <li className="m-b-5 no-padding"><a href="#" className="link text-white">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <p className="fs-12 hint-text p-t-10 text-white">Copyright &copy; 2014. All Rights Reserved </p>
                    </div>
                </section>
 */