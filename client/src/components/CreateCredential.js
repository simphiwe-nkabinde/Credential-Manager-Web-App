import React from 'react';

class CreateCredential extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}

        this.onClickCredentialTab = this.onClickCredentialTab.bind(this);
    }

    onClickCredentialTab(e) {
        e.currentTarget.nextSibling.classList.toggle('d-none')
    }

    render() {
        return (
            <div className="my-5">
                <div className="d-flex justify-content-between btn btn-success" onClick={this.onClickCredentialTab}>
                    Create New Credential
                    <i className="bi bi-plus"></i>
                </div>
                <div className="d-none p-4 border border-success rounded mt-1">
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
                        <button type="submit" className="btn btn-success">Create Credential</button>
                    </form>
                </div>
                
            </div>
        )
    }
}


export default CreateCredential