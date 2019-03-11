import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    error: {}
  };
  validate = () => {
    const error = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      error.username = "Name can not be empty";
    if (account.password.trim() === "")
      error.password = "Password can not be empty";
    return Object.keys(error).length === 0 ? null : error;
  };
  handleSubmit = e => {
    e.preventDefault();
    //call to validate function and further execution based on value of validate function return value
    const error = this.validate();
    console.log(error);
    this.setState({ error: error || {} }); //key runtime error was caused bcoz of this as during run time if all input fileds where filled then this.setstate was called and value where set to null insted of any object and this causes furhter error so insted of null if error is NULL returned from the Validate function then it must set the error obj of state to empty object insted of NULL for this a beautiful logic is inmplimented via || <or> ie if error is null means a falsi then or part will be set as value
    console.log(Object.keys(this.state.error));
    if (error) return;

    //call server save change and redirect the user
    console.log("Submited");
  };
  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username can't be a empty string";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password can't be a empty string";
    }
  };
  handleChange = ({ currentTarget: input }) => {
    //Logic to register change while typing and for an individual component
    const error = { ...this.state.error }; // copying the main error obj
    const errorMessage = this.validateProperty(input); //call to each propery validator function
    if (errorMessage) error[input.name] = errorMessage;
    // rendering condition to store the error in errors[local] object
    else delete error[input.name]; // If no error then deleting the prv. error object

    const account = { ...this.state.account };
    account[input.name] = input.value;
    console.log("change registered");
    this.setState({ account, error }); // updating the state to render the error object
  };
  render() {
    const { account, error } = this.state;
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
            error={error.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={error.password}
          />

          <button className="btn btn-primary">Login</button>
        </form>
      </React.Fragment>
    );
  }
}
//masti time
export default LoginForm;
