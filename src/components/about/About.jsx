import React from "react";
import {Form, Button, Row, Col} from "react-bootstrap";

export default function About() {
    return(
        <div className="container-fluid">
            <Row>
                <Col md={3}></Col>
                <Col>
                    <div className="fw-bolder">
                        Submit Your Information
                    </div><hr/>
                    <Form>
                        <div>
                            <label className="fw-bolder">Name</label>
                            <input className="form-control" type="test" placeholder="Enter Name" />
                        </div>
                        <div>
                            <label className="fw-bolder">Email</label>
                            <input className="form-control" type="email" placeholder="Enter Email" />
                        </div>
                        <div>
                            <label className="fw-bolder">Phone</label>
                            <input className="form-control" type="number" placeholder="Phone" />
                        </div>
                        <div>
                            <label className="fw-bolder">Date of birth</label>
                            <input className="form-control" type="date" placeholder="Enter Date" />
                        </div>
                        <div>
                            <label className="fw-bolder">Profile Image</label>
                            <input className="form-control" type="file" />
                        </div>
                        <div>
                            <label className="fw-bolder">Address</label>
                            <textarea className="form-control" placeholder="Enter your address" />
                        </div>
                        <div>
                            <Button className="form-control btn-success mt-1">Submit</Button>
                        </div>
                </Form>
                </Col>
                <Col md={3}></Col>
            </Row>
        </div>
    );
}