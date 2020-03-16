import React, { Component } from "react";
import { Link } from "react-router-dom";
import { loginRequest } from "../../../Actions";
import { connect } from "react-redux";

import closeImage from "../../../images/PNG/cross.png";

import Header from "../../../Component/CommonComponent/Header";
import Footer from "../../../Component/CommonComponent/Footer";

import "./style.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  componentDidMount = () => {
    
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = () => {
    const loginData= {
      email: this.state.email,
      password: this.state.password
    }
    console.log(loginData);
    this.props.loginRequest(loginData);
  }
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="signin">

            <div className="signin__heading">
              <h1>Sign In</h1>
            </div>

            <form action="#" className="signin__form">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                onChange={this.handleChange}
                className="signin__form__email"
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                className="signin__form__password"
              ></input>
              <div className="signin__form__check">
                <label className="cont">
                  <input type="checkbox" checked="checked"></input>
                  <span className="checkmark"></span>
                </label>
                <h1 className="signin__form__check__remember">Remember</h1>
              </div>
            </form>

            <div className="signin__submit">
              <button className="signin__submit__button" onClick={this.onSubmit}>Sign in</button>
            </div>

            <div className="signin__forgot">
              <a href="#" className="signin__forgot__password">
                <h1>Forgot Password?</h1>
              </a>
              <Link to="/signup" className="signin__forgot__account">
                <h1>Create Account</h1>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.user);
  return {
    user: state.user
  };
};
const mapDispachToProps = dispatch => {
  return {
    loginRequest: loginData => dispatch(loginRequest(loginData))
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Login);
