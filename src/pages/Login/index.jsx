import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import LoginForm from "./FormLogin";
import "./Login.css";

export default class index extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col />
          <Col sm="5">
            <Jumbotron className="shadow p-3 mb-5 bg-white rounded">
              <h3
                style={{ fontFamily: "Amazing Kids" }}
                className="text-center"
              >
                Store's Name
              </h3>
              <hr />
              <LoginForm />
            </Jumbotron>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}
