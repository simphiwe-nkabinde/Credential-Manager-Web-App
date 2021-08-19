import React from "react";
import { Redirect } from "react-router-dom";
import {showAlert} from "../alert";

class LoginPage extends React.Component {
    constructor() {
        super();

        this.state = {};
        
        this.onClickLogin =  this.onClickLogin.bind(this)
    }

    componentDidMount() {
        sessionStorage.removeItem("user");
    }

    onClickLogin(e) {
        const formElement = document.getElementById('login-form');
        const emailInput = document.getElementById('login-email');
        const passwordInput = document.getElementById('login-password');
        //validation
        if(!formElement.checkValidity()) {
            emailInput.nextSibling.innerText = emailInput.validationMessage;
            passwordInput.nextSibling.innerText = passwordInput.validationMessage;
        } else {
            //login API
            fetch('/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: emailInput.value,
                    password: passwordInput.value
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                   showAlert('danger', data.error)
                }
                if(data.token) {
                    //store jwt and user info in sessionStrorage
                    sessionStorage.setItem('user', JSON.stringify(data));
                    //redirect
                    window.location.href = '/organisation';
                }
                
            })
            .catch(err => {
                console.log(err)
            })
        }


    }

    render() {
        return (
            <div className="container my-2">
                <p className="text-center">
                    Login to access your organisation's credentials. You will only have
                    access to credentials from divisions that your administrator has assigned you to.
                </p>
                <p className="lead text-center">
                    Enter you login details below
                </p>
                <form id="login-form">
                    <div className="mb-3">
                        <label htmlFor="login-email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="login-email" aria-describedby="emailHelp" placeholder="john@example.com" required/>
                        <small className="text-danger"></small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="login-password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="login-password" required/>
                        <small className="text-danger"></small>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-success" onClick={this.onClickLogin}>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage