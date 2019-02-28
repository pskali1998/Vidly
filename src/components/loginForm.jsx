import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    //call server save change and redirect the user
    console.log("Submited");
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Log-In</h1>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
