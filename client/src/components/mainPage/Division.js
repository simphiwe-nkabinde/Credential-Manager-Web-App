import React from 'react';
import Credential from '../Credential';
import CreateCredential from '../CreateCredential';
import { showAlert } from '../../alert';

class Division extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            credentials: []
        }
    }

    componentDidMount() {
        //HTTP Authorization header with jwt
        const token = JSON.parse(sessionStorage.getItem('user')).token
        const headers = {headers: {Authorization: 'Bearer ' + token}}

        var unitName = this.props.unit.toLowerCase().replace(' ', '-')
        fetch('/'+ unitName +'/'+ this.props.division, headers)
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                console.log(data.error)
                showAlert('secondary', data.msg)
            } else {
            this.setState({credentials: data.credentials})
            }
        })
        .catch(err => {
            console.log('Error getting '+this.props.division+' credentials: ', err)
            this.setState({newsManagement: {error: err}})
        })
    }

    render() {
        var unitName = this.props.unit.toLowerCase().replace(' ', '-')
        var list = ''
        if(!this.state.credentials) {
            list = <p className="text-muted">no credentials found for this division</p>
        } else {
            list = this.state.credentials.map((item, i) => 
                <Credential key={i} unitName={unitName} divisionName={this.props.division} credential={item}/>
                );            
        }

        return (
            <div className="container my-5">
                <button className="btn btn-sm text-primary" onClick={this.props.mountOrg}>
                    <i className="bi bi-chevron-left"></i>Back
                </button>
                <h3 className="display-3 text-center">{this.props.unit}</h3>
                <h6 className="text-center display-5 text-primary text-capitalize">{this.props.division} credentials</h6>
                <p className="fs-4 text-center text-primary"></p>
                <CreateCredential unitName={unitName} divisionName={this.props.division}/>
                <div>
                    {list}
                </div>
            </div>
        )
    }
}


export default Division