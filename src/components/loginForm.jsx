import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    error: {}
  };
  validate = () => {
    return { username: "User name is req" };
  };
  handleSubmit = e => {
    e.preventDefault();
    //call to validate function and further execution based on value of validate function return value
    const error = this.validate();
    this.setState({ error });
    if (error) return;

    //call server save change and redirect the user
    console.log("Submited");
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    console.log("change registered");
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <React.Fragment>
        <div>
          <h1>Log-In</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </React.Fragment>
    );
  }
}
//masti time
export default LoginForm;
