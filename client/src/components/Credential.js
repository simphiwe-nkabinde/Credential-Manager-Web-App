import React from 'react';
import { showAlert } from '../alert';

class Credential extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}

        this.onClickCredentialTab = this.onClickCredentialTab.bind(this);
        this.onClickEdit =  this.onClickEdit.bind(this);
        this.onClickSaveUsername = this.onClickSaveUsername.bind(this);
        this.onClickSavePassword = this.onClickSavePassword.bind(this);
    }

    //toggle display of credential panel
    onClickCredentialTab(e) {
        e.currentTarget.nextSibling.classList.toggle('d-none');
    }
    //enables user to edit credemtial fields: username or password. displays save btn
    onClickEdit(e) {
        e.currentTarget.previousSibling.classList.toggle('d-none') //display or hide save btn
        //toggle edit button icon
        e.currentTarget.firstChild.classList.toggle('d-none')
        e.currentTarget.lastChild.classList.toggle('d-none')
        //toggle 'readOnly' attribute
        var textarea = e.currentTarget.parentElement.previousSibling
        textarea.readOnly ? textarea.focus() : textarea.blur();
        e.currentTarget.parentElement.previousSibling.readOnly = !textarea.readOnly;
    }
    onClickSaveUsername(e) {
        //HTTP Authorization header with jwt
        const token = JSON.parse(sessionStorage.getItem('user')).token
        const headers = {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
        //new username
        var newUsername = e.currentTarget.parentElement.previousSibling.value;
        console.log(newUsername, this.props.unitName, this.props.divisionName)

        fetch('/'+ this.props.unitName + '/' + this.props.divisionName, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
                division: this.props.divisionName,
                credentialId: this.props.credential.id,
                name: this.props.credential.name,
                username: newUsername
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                showAlert('danger', res.msg)
            } else {
                showAlert('success', res.msg)
            }
        })
    }

    onClickSavePassword(e) {
        //HTTP Authorization header with jwt
        const token = JSON.parse(sessionStorage.getItem('user')).token
        const headers = {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
        var newPassword = e.currentTarget.parentElement.previousSibling.value;

        fetch('/'+ this.props.unitName + '/' + this.props.divisionName, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify({
                division: this.props.divisionName,
                credentialId: this.props.credential.id,
                name: this.props.credential.name,
                password: newPassword
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                showAlert('danger', res.msg)
            } else {
                showAlert('success', res.msg)
            }
        })
    }

    render() {

        //hide btn if user.role != 'admin'||'management'
        var btnDisplay = ''
        if(JSON.parse(sessionStorage.user).role === 'admin' || JSON.parse(sessionStorage.user).role === 'management') {
            btnDisplay = ''
        } else { btnDisplay = 'd-none'}

        return (
            <div className="my-3">
                <div className="d-flex justify-content-between btn btn-dark" onClick={this.onClickCredentialTab}>
                    {this.props.credential.name}
                    <i className="bi bi-chevron-down"></i>
                </div>
                {/* credential panel */}
                <div className="d-none">
                    <p className="p-2">{this.props.credential.details}</p>
                    <table className="table table-bordered rounded table-hover">
                        <tbody>
                            <tr>
                                <td>Username: </td>
                                <td className="d-flex justify-content-between">
                                    <textarea readOnly className="border-0 form-control" style={{maxWidth: '400px',height:'30px',resize:'none'}} defaultValue={this.props.credential.username}></textarea>
                                    <div className="d-flex no-wrap">
                                        <button className="d-none btn btn-sm btn-success mx-1" onClick={this.onClickSaveUsername}>save</button>
                                        <button className={"btn btn-sm btn-secondary mx-1 " + btnDisplay} onClick={this.onClickEdit}>
                                            <i className="bi bi-pencil-square"></i>
                                            <i className="bi bi-x d-none"></i>
                                        </button>
                                    </div>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>Password: </td>
                                <td className="d-flex justify-content-between">
                                    <textarea readOnly className="border-0 form-control" style={{maxWidth: '400px',height:'30px',resize:'none'}} defaultValue={this.props.credential.password}/>
                                    <div className="d-flex no-wrap">
                                        <button className="d-none btn btn-sm btn-success mx-1" onClick={this.onClickSavePassword}>save</button>
                                        <button className={"btn btn-sm btn-secondary mx-1 " + btnDisplay} onClick={this.onClickEdit}>
                                            <i className="bi bi-pencil-square"></i>
                                            <i className="bi bi-x d-none"></i>
                                        </button>
                                    </div>

                                </td>
                            </tr>
                        </tbody>
                    </table>  
                </div>
                
            </div>
        )
    }
}


export default Credential