import React, { Component } from 'react';

export default class ContactUs extends Component {
    render() {
        return (
            <section class="container container-fixed-lg p-t-65 p-b-100  sm-p-b-30 sm-m-b-30">
                <div class="row">
                    <div class="col-md-6">
                        <h2>How can we assist you?</h2>
                        <div class="p-r-40 sm-p-r-0">
                            <p>Despite the UI, We thought of the User experience, With attached From Layouts you can simply categories Important fields and prioritize them.</p>
                            <br/>
                                <br/>
                                    <div class="panel" id="contact-panel">
                                        <p class="semi-bold no-margin">Fill up this form to contact us if you have any futher questions</p>
                                        <form role="form" autocomplete="off" class="m-t-15" id="contact-form">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <div class="form-group form-group-default required">
                                                        <label class="control-label">First name</label>
                                                        <input type="text" name="name" class="form-control" required/>
                                                    </div>
                                                </div>
                                                <div class="col-sm-6">
                                                    <div class="form-group form-group-default">
                                                        <label class="control-label">Last name</label>
                                                        <input type="text" name="last-name" class="form-control" required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group form-group-default">
                                                <label class="control-label">Email</label>
                                                <input type="email" name="email" placeholder="This can be changed later" class="form-control" required/>
                                            </div>
                                            <div class="form-group form-group-default">
                                                <label class="control-label">Message</label>
                                                <textarea name="message" placeholder="Type the message you wish to send" class="form-control" required></textarea>
                                            </div>
                                            <div class="sm-p-t-10 clearfix">
                                                <p class="pull-left small hint-text m-t-5 font-arial">I hereby certify that the information above is true and accurate. </p>
                                                <button class="btn btn-primary font-montserrat all-caps fs-12 pull-right xs-pull-left">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}