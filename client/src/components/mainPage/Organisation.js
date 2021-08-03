import React from 'react';
import UnitTab from '../UnitTab';

class Organisation extends React.Component {
    constructor() {
        super();

        this.state = {
            newsManagement: [],
            softwareReview: [],
            hardwareReview: [],
            opinionPublishing: []
        }
        this.mountDivision_org = this.mountDivision_org.bind(this)
    }

    componentDidMount() {
    //HTTP Authorization header with jwt
        var headers = '';
        try {
            const token = JSON.parse(sessionStorage.getItem('user')).token
            headers = {headers: {Authorization: 'Bearer ' + token}}
        }catch(err){
            console.log(err)
            window.location.href = '/login'
        }
        //get list of news-management divisions
        fetch('/news-management', headers)
        .then(res => res.json())
        .then(data => {
            this.setState({newsManagement:data})
        })
        .catch(err => {
            console.log('Error getting news management list: ', err)
            this.setState({newsManagement: {error: err}})
        })
        //get list of news-management divisions
        fetch('/software-review', headers)
        .then(res => res.json())
        .then(data => {
            this.setState({softwareReview:data})
        })
        .catch(err => {
            console.log('Error getting software review list: ', err)
            this.setState({softwareReview: {error: err}})
        })
        //get list of news-management divisions
        fetch('/hardware-review', headers)
        .then(res => res.json())
        .then(data => {
            this.setState({hardwareReview:data})
        })
        .catch(err => {
            console.log('Error getting hardware review list: ', err)
            this.setState({hardwareReview: {error: err}})
        })
        //get list of news-management divisions
        fetch('/opinion-publishing', headers)
        .then(res => res.json())
        .then(data => {
            this.setState({opinionPublishing:data})
        })
        .catch(err => {
            console.log('Error getting opinion publishing: ', err)
            this.setState({opinionPublishing: {error: err}})
        })
    //disable 'Users' div if user.role is not admin
        if(JSON.parse(sessionStorage.user).role !== 'admin') {
            document.getElementById('usersBtn').style.pointerEvents= 'none';
            document.getElementById('usersBtn').classList.add('btn-secondary')
        } else {
            document.getElementById('usersBtn').classList.add('btn-dark')
        }
    }

    mountDivision_org(unit, divisionName) {
        this.props.mountDivision(unit, divisionName)
    }

    render() {
        return (
            <div className="container">
                <p className="lead text-center">
                    Select an organisational Unit to view its divisions.
                    Click on available divsions to access their credential repositories
                </p>
                <div>
                    <UnitTab title='news Management' list={this.state.newsManagement} mountDivision={this.mountDivision_org}/>
                    <UnitTab title='hardware Review' list={this.state.softwareReview} mountDivision={this.mountDivision_org}/>
                    <UnitTab title='software Review' list={this.state.hardwareReview} mountDivision={this.mountDivision_org}/>
                    <UnitTab title='opinion Publishing' list={this.state.opinionPublishing} mountDivision={this.mountDivision_org}/>
                </div>
                <div className="p-1 mt-5">
                    <div className="d-flex justify-content-between btn" id="usersBtn" onClick={this.props.mountUsers}>
                        <h5 className="text-light">Users</h5>
                        <i className="bi bi-people-fill"></i>
                    </div>
                </div>
                
            </div>
        )
    }
}


export default Organisation