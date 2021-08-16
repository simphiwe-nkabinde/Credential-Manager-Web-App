import React from 'react';
import User from '../User';
import { showAlert } from '../../alert';

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        //HTTP Authorization header with jwt
        const token = JSON.parse(sessionStorage.getItem('user')).token
        const headers = {headers: {Authorization: 'Bearer ' + token}}
        fetch('/users', headers)
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                console.log(data.error)
                showAlert('danger', data.msg)
            } else {
                this.setState({users: data})
            }
            
        })
    }

    render() {
        var list = '';
        if(!this.state.users.length) {
            list = <p className="text-muted">fetching users...</p>
        } else {
            list = this.state.users.map((item, i) => 
                <User key={item._id} user={item}/>
            );
        }

        return (
            <div>
                <button className="btn btn-sm text-primary" onClick={this.props.mountOrg}>
                    <i className="bi bi-chevron-left"></i>Back
                </button>
                <h3 className="text-center display-4">Users</h3>
                <div>
                    {list}
                </div>

            </div>
        )
    }
}

export default Users