import React from 'react';
import User from '../User';

class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        return (
            <div>
                <h3 className="text-center display-4">Users</h3>
                <div>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                </div>

            </div>
        )
    }
}

export default Users