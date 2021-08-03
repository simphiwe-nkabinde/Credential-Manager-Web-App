import React from 'react';

class RegisterPage extends React.Component {
    constructor() {
        super();

        this.state ={
            registered: false
        };
        this.onclickRegister = this.onclickRegister.bind(this)
    }

    onclickRegister(e) {
        //form Validation
        var formElement = e.target.parentElement.parentElement
        if(!formElement.checkValidity()) {
            [].forEach.call(formElement.children, element => {
                //used the try catch block because react throws incorrect error: "Cannot read property 'validationMessage' of undefined"
                try{
                    var msg = element.children[1].validationMessage;
                    element.children[2].innerText = msg
                }catch(err){
                    console.log(err)
                }
            });

        } else {
            const userName = formElement.children[0].children[1].value;
            const userEmail = formElement.children[1].children[1].value;
            const userPassword = formElement.children[2].children[1].value;
            //Register. API request
            fetch('/users/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: userName,
                    email: userEmail,
                    password: userPassword
                })
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setState({registered: true})
            })  
            .catch(err => {
                console.log(err)
            })          
        }

    }

    render() {
        return (
            <div className="container my-5">
                {!this.state.registered ?
                    <div>
                        <p className="lead text-center">
                            Enter your details below to Register
                        </p>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="register-name" className="form-label">Full name</label>
                                <input type="text" className="form-control" id="register-name" placeholder="John Jackson" required/>
                                <small className="text-danger"></small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="register-email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="register-email" aria-describedby="emailHelp" placeholder="john@example.com" required/>
                                <small className="text-danger"></small>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="register-password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="register-password" required/>
                                <small className="text-danger"></small>
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-warning" onClick={this.onclickRegister}>Register</button>
                            </div>
                        </form>
                    </div>
                :
                    <div className="text-center">
                        <p className="lead">
                            Your are now registered. Click below to login using your new credentials.
                        </p>
                        <a href="/login" className="btn btn-success">Login</a>                    
                    </div>
                }
            </div>
        )
    }
}

export default RegisterPage