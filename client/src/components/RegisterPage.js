import React from 'react';

class RegisterPage extends React.Component {
    constructor() {
        super();

        this.state ={};
    }

    render() {
        return (
            <div className="container my-5">
                <p className="lead text-center">
                    Enter your details below to Register
                </p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="register-name" className="form-label">Full name</label>
                        <input type="text" className="form-control" id="register-name" placeholder="John Jackson"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="register-email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="register-email" aria-describedby="emailHelp" placeholder="john@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="register-password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="register-password"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="register-confirm-password" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" id="register-confirm-password"/>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Register</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default RegisterPage