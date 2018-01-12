import React, { Component } from 'react';
import {Carousel } from 'react-bootstrap';

class Testimonials extends Component {
    render(){
        return (
            <div className="container">
            <Carousel>
                <Carousel.Item>
                    <div className="container">
                        <div className="col-sm-8 col-sm-offset-2">
                            <h6 className="text-center">
                                Our motivation "Perfection simplified" helps to
                                craft meaningful experiences for the people around us, This mission inspires us
                                to jump out of bed each day and guides every aspect of what we
                                do.
                            </h6>
                            <img alt="" className="m-t-10 signature" src="img/signature_sample.png"/>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container">
                        <div className="col-sm-8 col-sm-offset-2">
                            <h6 className="text-center">
                                The dashboard will synergize with the colour selection made by the user and appropriately amend. Similarly, all other elements will sync according to the base colours.
                            </h6>
                            <img alt="" className="m-t-10 signature" src="img/signature_sample.png"/>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="container">
                        <div className="col-sm-8 col-sm-offset-2">
                            <h6 className="text-center">
                                Given our emphasis on operational efficiency and optimization, we have focused heavily on GPU performance with animation to ensure an ultra smooth and fast User Experience.
                            </h6>
                            <img alt="" className="m-t-10 signature" src="img/signature_sample.png"/>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            </div>
        );
    }
}

export default Testimonials;


/*
<section className="p-b-35 p-t-30">
                    <div className="swiper-container" id="testimonials_slider">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="container">
                                    <div className="col-sm-8 col-sm-offset-2">
                                        <h6 className="text-center">
                                            Our motivation "Perfection simplified" helps to
                                            craft meaningful experiences for the people around us, This mission inspires us
                                            to jump out of bed each day and guides every aspect of what we
                                            do.
                                        </h6>
                                        <img alt="" className="m-t-10 signature" src="img/signature_sample.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="container">
                                    <div className="col-sm-8 col-sm-offset-2">
                                        <h6 className="text-center">
                                            The dashboard will synergize with the colour selection made by the user and appropriately amend. Similarly, all other elements will sync according to the base colours.
                                        </h6>
                                        <img alt="" className="m-t-10 signature" src="img/signature_sample.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="container">
                                    <div className="col-sm-8 col-sm-offset-2">
                                        <h6 className="text-center">
                                            Given our emphasis on operational efficiency and optimization, we have focused heavily on GPU performance with animation to ensure an ultra smooth and fast User Experience.
                                        </h6>
                                        <img alt="" className="m-t-10 signature" src="img/signature_sample.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination relative p-t-20"></div>
                    </div>
                </section>
 */