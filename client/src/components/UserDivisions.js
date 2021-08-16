import React from 'react';

class UserDivisions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allDivisions: []
        }
    }

    componentDidMount() {
        //HTTP Authorization header with jwt
        const token = JSON.parse(sessionStorage.getItem('user')).token;
        const headers = {Authorization: 'Bearer ' + token};
        fetch('/'+ this.props.unit, {
            headers: headers
        })
        .then(res => res.json())
        .then(res => {
            this.setState({allDivisions: res})
        })
    }

    render() {
        var checkList = ''
        console.log(this.state.allDivisions.length)
        // if(this.state.allDivisions.length) {
        //     checkList = <p className="text-muted">fetching checkList</p>
        // } else {
            checkList = this.state.allDivisions.map((item, i) => 
                    <div key={i} className="form-check">
                        <input className="form-check-input" type="checkbox" value={item.divisionName} id={item._id + '-' + this.props.userId} defaultChecked={this.props.divisions.includes(item.divisionName) ? true : false}/>
                        <label className="form-check-label" htmlFor={item._id + '-' + this.props.userId}>{item.divisionName}</label>
                    </div>
                )
        // }


        return (
            <div>
                {checkList}
            </div>
        )
    }
}

export default UserDivisions