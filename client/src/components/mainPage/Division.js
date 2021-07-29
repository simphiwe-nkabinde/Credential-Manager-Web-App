import React from 'react';
import Credential from '../Credential';
import CreateCredential from '../CreateCredential';

class Division extends React.Component {
    constructor() {
        super();

        this.state = {}
    }

    render() {
        return (
            <div className="container my-5">
                <h3 className="display-3 text-center">Software Reviews</h3>
                <p className="display-6 text-center">Credentails</p>
                <CreateCredential/>
                <div>
                    <Credential/>
                    <Credential/>
                    <Credential/>
                    <Credential/>
                    <Credential/>
                </div>
            </div>
        )
    }
}


export default Division