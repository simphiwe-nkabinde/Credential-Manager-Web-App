import React from 'react';
import Dropdown from './Dropdown';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
        
        this.onClickUserTab = this.onClickUserTab.bind(this);
        this.onClickEditRole =  this.onClickEditRole.bind(this);
    }

    //toggle display of credential panel
    onClickUserTab(e) {
        e.currentTarget.nextSibling.classList.toggle('d-none');
    }
        //enables user to edit credemtial fields: username or password. displays save btn
    onClickEditRole(e) {
        e.currentTarget.previousSibling.classList.toggle('d-none') //display or hide save btn
        //toggle edit button icon
        e.currentTarget.firstChild.classList.toggle('d-none')
        e.currentTarget.lastChild.classList.toggle('d-none')
        //toggle 'disabled' attribute
        var disabled = e.currentTarget.parentElement.previousSibling.disabled;
        e.currentTarget.parentElement.previousSibling.disabled = !disabled
    }

    render() {

        return (
            <div className="my-4">
                <div className="d-flex justify-content-between btn btn-light border" onClick={this.onClickUserTab}>
                    {this.props.user.name}
                    <span>
                        <span className="text-primary">{this.props.user.role}</span>
                        <i className="bi bi-chevron-down ms-3"></i>
                    </span>
                </div>

                <div className="d-none p-2 mt-1 border rounded row mx-0">
                    <p className="col-12 col-sm-6">Email: {this.props.user.email}</p>
                    <div className="mb-3 row col-12 col-sm-6">
                        <label className="col-sm-3 col-form-label col-form-label-sm">Role:</label>
                        <div className="col-sm-9 d-flex">
                            <select className="form-select form-select-sm" defaultValue={this.props.user.role} disabled>
                                <option value={this.props.user.role}>{this.props.user.role}</option>
                                {this.props.user.role !== 'admin' ? <option value="admin">admin</option> : ''}
                                {this.props.user.role !== 'management' ? <option value="management">management</option> : ''}
                                {this.props.user.role !== 'user' ? <option value="user">user</option> : ''}
                            </select>   
                            <div className="d-flex">
                                <button className="d-none btn btn-sm btn-success mx-1">save</button>
                                <button className="btn btn-sm btn-secondary mx-1" onClick={this.onClickEditRole}>
                                    <i className="bi bi-pencil-square"></i>
                                    <i className="bi bi-x d-none"></i>
                                </button>
                            </div>                         
                        </div>
                    </div>

                    <div>
                        Organisational Units<hr className="my-2"/>
                        <div className="d-flex flex-wrap justify-content-between">
                            <Dropdown title='News Management'/>
                            <Dropdown title='Software Reviews'/>
                            <Dropdown title='Hardware Reviews'/>
                            <Dropdown title='Opinion Publishing'/>                            
                        </div>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default User