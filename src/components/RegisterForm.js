import React from "react";
import Form from "./common/Form";
import Joi from "joi-browser";

class RegisterFrom extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("registered");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("name", "Name")}
        {this.renderButton("Register")}
      </div>
    );
  }
}

export default RegisterFrom;
