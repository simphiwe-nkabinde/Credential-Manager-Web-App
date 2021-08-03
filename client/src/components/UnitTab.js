import React from 'react';

class UnitTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
        
        this.onClickUnitTab = this.onClickUnitTab.bind(this);
        this.mountDivision_unitTab = this.mountDivision_unitTab.bind(this)
    }

    onClickUnitTab(e) {
        e.currentTarget.nextSibling.classList.toggle('d-none')
    }
    mountDivision_unitTab(e) {
        const divisionName = e.currentTarget.id
        this.props.mountDivision(this.props.title, divisionName)
    }


    render() {
        //get organisational unit access list from sessionStrorage
        var orgUnit = this.props.title.replace(' ', '');
        const role = JSON.parse(sessionStorage.user).role
        const accessList = JSON.parse(sessionStorage.user).uo[orgUnit];
        var btnColor = '';
        if(role === 'admin' || accessList.length) {
            btnColor = 'btn-dark';
        } else {
            btnColor = 'btn-secondary';
        }
        // console.log(this.props.title, accessList)
        //list of unit divisions
        var divisions = '';
        if(this.props.list.error) {
            divisions = this.props.list.msg

        } else if(!this.props.list.length) {
            divisions = 'fetching unit Divisions...'
        } else {
            divisions = this.props.list.map((item, i) => 
                <button disabled={role === 'admin' || accessList.includes(item.divisionName) ? false : true}
                    key={i} 
                    id={item.divisionName} 
                    className="list-group-item list-group-item-action fw-bold" 
                    onClick={this.mountDivision_unitTab}>
                        {item.divisionName}
                </button>
                );            
        }


        return (
            <div className="p-1 my-2">
                <div className={"d-flex justify-content-between btn " + btnColor} onClick={this.onClickUnitTab}>
                    <h5 className="text-light text-capitalize">{this.props.title}</h5>
                    <i className="bi bi-chevron-down"></i>
                </div>
                <div className="d-none px-1 mt-1">
                    <div className="list-group">
                        {divisions}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default UnitTab