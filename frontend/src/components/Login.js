import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "../Login.css"
const Login = () => {
  return (
    <Row className="login" >
      <Col md={6}>
<h2>Login-Section</h2>
      </Col>
      <Col md={6} >
        <Form className="border border-primary rounded ">
          <Form.Group className="mx-3 my-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted text-white">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mx-3 my-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary " className="mx-3 my-3" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
