import React from 'react';
import UnitTab from '../UnitTab';
import {getList} from '../../actions/api'

class Organisation extends React.Component {
    constructor() {
        super();

        this.state = {}
    }

    componentDidMount() {
        getList('news-management');

        // fetch('/news-management')
        // .then(res => res.text())
        // .then(data => {
        //     console.log(data)
        // })
        // .catch(err => {
        //     console.log(err)
        // })


        // getList('software-reviews')
        // getList('hardware-reviews')
        // getList('opinion-publishing')
        // console.log(getList('news-management'))
        // this.setState({newsManagement: getList('news-management')}) 
    }

    render() {
        return (
            <div className="container">
                <p className="lead text-center my-4">
                    Select an organisational Unit to view its divisions.
                    Click on available divsions to access their credential repositories
                </p>
                <div>
                    <UnitTab title='News Management'/>
                    <UnitTab title='Hardware Reviews'/>
                    <UnitTab title='Software Reviews'/>
                    <UnitTab title='Opinion Publishing'/>
                </div>
                <div className="p-1 mt-5">
                    <div className="d-flex justify-content-between btn btn-secondary" onClick={this.onClickUnitTab}>
                        <h5 className="text-light">Users</h5>
                        <i className="bi bi-people-fill"></i>
                    </div>
                </div>
                
            </div>
        )
    }
}


export default Organisation