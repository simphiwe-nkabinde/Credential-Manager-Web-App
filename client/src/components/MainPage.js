import React from 'react';
import Organisation from './mainPage/Organisation';
import Division from './mainPage/Division';
import Users from './mainPage/Users';

class MainPage extends React.Component {
    constructor() {
        super();

        this.state = {
            mountUsers: true,
            mountDivision: true,
            mountOrganisation: true,
        }
        this.onClickUsers = this.onClickUsers.bind(this)
    }

    onClickUsers() {
        this.setState({mountUsers: true})
    }


    render() {
        return (
            <div className="container">
                {!this.state.mountOrganisation ? '' : <Organisation/>}
                {!this.state.mountDivision ? '' : <Division/>}
                {!this.state.mountUsers ? '' : <Users/>} 
            </div>
        )
    }
}


export default MainPage