import React from 'react';

class Credential extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}

        this.onClickCredentialTab = this.onClickCredentialTab.bind(this);
        this.onClickEdit =  this.onClickEdit.bind(this);
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

    render() {
        return (
            <div className="my-3">
                <div className="d-flex justify-content-between btn btn-dark" onClick={this.onClickCredentialTab}>
                    FaceBook Account
                    <i className="bi bi-chevron-down"></i>
                </div>
                {/* credential panel */}
                <div className="d-none">
                    <p className="p-2">This is the login for social media</p>
                    <table className="table table-bordered rounded table-hover">
                        <tbody>
                            <tr>
                                <td>Username: </td>
                                <td className="d-flex justify-content-between">
                                    <textarea readOnly className="border-0 form-control" style={{maxWidth: '400px',height:'30px',resize:'none'}} defaultValue="cooltech"></textarea>
                                    <div className="d-flex no-wrap">
                                        <button className="d-none btn btn-sm btn-success mx-1">save</button>
                                        <button className="btn btn-sm btn-secondary mx-1" onClick={this.onClickEdit}>
                                            <i className="bi bi-pencil-square"></i>
                                            <i className="bi bi-x d-none"></i>
                                        </button>
                                    </div>
                                    
                                </td>
                            </tr>
                            <tr>
                                <td>Password: </td>
                                <td className="d-flex justify-content-between">
                                    <textarea readOnly className="border-0 form-control" style={{maxWidth: '400px',height:'30px',resize:'none'}} defaultValue="cooltech123"/>
                                    <div className="d-flex no-wrap">
                                        <button className="d-none btn btn-sm btn-success mx-1">save</button>
                                        <button className="btn btn-sm btn-secondary mx-1" onClick={this.onClickEdit}>
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