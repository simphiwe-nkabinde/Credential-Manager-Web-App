import React from 'react';
import { showAlert } from '../alert';

class CreateCredential extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}

        this.onClickCredentialTab = this.onClickCredentialTab.bind(this);
        this.onClickCreate = this.onClickCreate.bind(this);
    }

    onClickCredentialTab(e) {
        e.currentTarget.nextSibling.classList.toggle('d-none')
    }
    onClickCreate(e) {
        //HTTP Authorization header with jwt
        const token = JSON.parse(sessionStorage.getItem('user')).token
        const headers = {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        }

        var form = e.currentTarget.parentElement
        var formChildren = form.children
        if(!form.checkValidity()) {
            //form validation
            form.previousSibling.innerText = "please fill in all fields"
        } else {
            //get input values
            var inputName = formChildren[0].lastChild.firstChild.value;
            var inputDetails = formChildren[1].lastChild.firstChild.value;
            var inputUsername = formChildren[2].lastChild.firstChild.value;
            var inputPassword = formChildren[3].lastChild.firstChild.value;

            var initObj = {
                method: 'POST',
                headers : headers,
                body: JSON.stringify({
                    division: this.props.divisionName,
                    name: inputName,
                    details: inputDetails,
                    username: inputUsername,
                    password: inputPassword
                })
            }
            console.log(initObj)

            fetch('/'+ this.props.unitName + '/' + this.props.divisionName, initObj)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    showAlert('danger', res.msg)
                } else {
                    showAlert('success', res.msg)
                }
            })
        }
    }

    render() {
        return (
            <div className="my-5">
                <div className="d-flex justify-content-between btn btn-success" onClick={this.onClickCredentialTab}>
                    Create New Credential
                    <i className="bi bi-plus"></i>
                </div>
                <div className="d-none p-4 border border-success rounded mt-1">
                    <p className="text-danger text-center"></p>
                    <form>
                        <div className="mb-3 row">
                            <label htmlFor="credentialName" className="col-sm-2 col-form-label col-form-label-sm">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control form-control-sm" id="credentialName" required/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="credentialDescription" className="col-sm-2 col-form-label col-form-label-sm">Description</label>
                            <div className="col-sm-10">
                                <textarea type="text" className="form-control form-control-sm" id="credentialDescription" required/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="credentialUsername" className="col-sm-2 col-form-label col-form-label-sm">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control form-control-sm" id="credentialUsername" required/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="credentialPassword" className="col-sm-2 col-form-label col-form-label-sm">Password</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control form-control-sm" id="credentialPassword" required/>
                            </div>
                        </div>
                        <button type="button" className="btn btn-success" onClick={this.onClickCreate}>Create Credential</button>
                    </form>
                </div>
                
            </div>
        )
    }
}


export default CreateCredential