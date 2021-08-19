import React from 'react';

class UserDivisions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allDivisions: []
        }

        this.onClickEdit = this.onClickEdit.bind(this)
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

    onClickEdit(e) {
        e.currentTarget.previousSibling.classList.toggle('d-none') //display or hide update btn
        //toggle edit button icon
        e.currentTarget.firstChild.classList.toggle('d-none')
        e.currentTarget.lastChild.classList.toggle('d-none')
        //toggle disabled attribute on checklist items
        let items = e.currentTarget.parentElement.previousSibling.children;
        [].forEach.call(items, item => {
            item.firstChild.disabled = !item.firstChild.disabled
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
                        <input className="form-check-input" disabled type="checkbox" value={item.divisionName} id={item._id + '-' + this.props.userId} defaultChecked={this.props.divisions.includes(item.divisionName) ? true : false}/>
                        <label className="form-check-label" htmlFor={item._id + '-' + this.props.userId}>{item.divisionName}</label>
                    </div>
                )
        // }


        return (
            <div>
                <div>
                    {checkList}
                </div>
                <div className="d-flex no-wrap">
                    <button className="d-none btn btn-sm btn-success mx-1">Update List</button>
                    <button className="btn btn-sm btn-secondary mx-1"  onClick={this.onClickEdit}>
                        <i className="bi bi-pencil-square"></i>
                        <i className="bi bi-x d-none"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default UserDivisions