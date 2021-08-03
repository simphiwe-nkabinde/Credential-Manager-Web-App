import React from 'react';
import Organisation from './mainPage/Organisation';
import Division from './mainPage/Division';
import Users from './mainPage/Users';

class MainPage extends React.Component {
    constructor() {
        super();

        this.state = {
            usersMounted: false,
            divisionMounted: false,
            organisationMounted: true,
            division: {unitName: '', divisionName: ''}
        }
        this.onClickUsers = this.onClickUsers.bind(this);
        this.mountDivision = this.mountDivision.bind(this);
        this.mountOrganisation = this.mountOrganisation.bind(this);
        this.mountUsers = this.mountUsers.bind(this);
    }

    componentDidMount() {
        this.setState({
            organisationMounted: true,
            usersMounted: false,
            divisionMounted: false
        })
    }

    onClickUsers() {
        this.setState({usersMounted: true})
    }

    mountUsers() {
        this.setState({
            usersMounted: true,
            divisionMounted: false,
            organisationMounted: false
        })
    }
    mountDivision(unit, divisionName) {
        this.setState({
            usersMounted: false,
            divisionMounted: true,
            organisationMounted: false,
            division: { unitName: unit, divisionName: divisionName }
        })
    }
    mountOrganisation() {
        this.setState({
            usersMounted: false,
            divisionMounted: false,
            organisationMounted: true
        })
    }

    render() {
        return (
            <div className="container">
                {!this.state.organisationMounted ? '' : 
                    <Organisation mountDivision={this.mountDivision}  mountUsers={this.mountUsers}/>
                }
                {!this.state.divisionMounted ? '' : 
                    <Division mountOrg={this.mountOrganisation} 
                        unit={this.state.division.unitName} 
                        division={this.state.division.divisionName}/>
                }
                {!this.state.usersMounted ? '' : 
                    <Users  mountOrg={this.mountOrganisation}/>
                } 
            </div>
        )
    }
}


export default MainPage