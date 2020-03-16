import React, { Component } from 'react';
import { render } from '@testing-library/react';
import {Link} from "react-router-dom";

import Header from "../../../Component/CommonComponent/Header";
import Footer from "../../../Component/CommonComponent/Footer";

import closeImage from "../../../images/PNG/cross.png"

import "./style.css";

class SignUp extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div class="signup">
                        <div class="signup__close">
                            <a href="#">
                                <div class="signup__close__icon">
                                    <img src={closeImage}></img>
                                </div>
                            </a>

                        </div>

                        <div class="signup__heading">
                            <h1 >Sign Up</h1>
                        </div>

                        <form action="#" class="signup__form">
                            <input type="text" placeholder="Full Name*" class="signup__form__fullname" required></input>
                            <input type="text" placeholder="Email*" class="signup__form__email" required></input>
                            <input type="password" placeholder="Password*" class="signup__form__password" required></input>
                            <input type="password" placeholder="Re Type Password" class="signup__form__repassword"></input>

                        </form>

                        <div class="signup__submit">
                            <button class="signup__submit__button">Create</button>
                        </div>

                        <div class="signup__forgot">
                            <a href="#" class="signup__forgot__already"><h1>Already a member?</h1></a>
                            <Link to="/" class="signup__forgot__siginin"><h1>Sign In</h1></Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default SignUp;