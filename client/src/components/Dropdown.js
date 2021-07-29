import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        return (
            <div className="dropdown my-2">
                <div className="btn-group">
                    <button type="button" className="btn btn-dark">{this.props.title}</button>
                    <button type="button" className="btn btn-outline-dark dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu px-2">
                        <li className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">Default checkbox</label>
                        </li>
                        <li className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Checked checkbox
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Dropdown