import React, { Component } from 'react';
import {Row, Col, Grid } from 'react-bootstrap';
import Testimonials from './../../components/testimonials/testimonials';


export default class Home extends Component {
    render() {
        return (
            <div>
               <div className="main-header bg-color"></div>
               <section class="p-b-30 p-t-30">
                    <div class="container">
                        <div class="panel panel-transparent">
                            <div class="tab-content bg-white ">
                                <div class="row p-l-20 p-r-20 p-b-20 p-t-5 xs-no-padding">
                                    <div class="col-md-11">
                                        <div class="tab-pane active" id="tab3hellowWorld">
                                            <h5 class="font-montserrat text-uppercase fs-14 hint-text">Explore</h5>
                                            <p class="hint-text">Our long standing vision has been to bypass the usual admin dashboard structure, and move forward with a more sophisticated yet simple framework that would create a credible impact on the many conventional dashboard users.Funny how you can always tell when somebody's laughing behind your back. Jodie hadn't really heard anything, maybe a whisper, but when she turned around, the girls in the back row of the class were looking at her, trying to hide smiles and giggles. She looked back at her teacher.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonials/>
            </div>
        );
    }
}