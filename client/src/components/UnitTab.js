import React from 'react';

class UnitTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
        
        this.onClickUnitTab = this.onClickUnitTab.bind(this);
    }

    onClickUnitTab(e) {
        e.currentTarget.nextSibling.classList.toggle('d-none')
    }


    render() {
        const divArr = ['marketing', 'finance', 'communication', 'legal', 'writing']
        const divisions = divArr.map((div, i) => 
            <button href="#" key={i} className="list-group-item list-group-item-action">
                {div}
            </button>
            );

        return (
            <div className="p-1 my-2">
                <div className="d-flex justify-content-between btn btn-secondary" onClick={this.onClickUnitTab}>
                    <h5 className="text-light">{this.props.title}</h5>
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