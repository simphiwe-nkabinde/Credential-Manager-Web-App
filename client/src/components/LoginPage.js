import React from "react";

class LoginPage extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <div className="container my-5">
                <p className="lead text-center">
                    Enter you login details below
                </p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="login-email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="login-email" aria-describedby="emailHelp" placeholder="john@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="login-password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="login-password"/>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-success">Login</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default LoginPage