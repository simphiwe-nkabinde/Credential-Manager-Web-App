function AboutPage(props) {
    return (
        <div className="container">
            <h1 className="display-3 text-center">About</h1>

            <div>
                <p>
                    The CREDMAN web app is a final project submission for my Fullstack web &#38; software engineering Bootcamp.
                    Folowing are the requirements and criteria for the web app:
                </p>
                <div className="alert-primary p-3 rounded-3">
                    <p>
                        Build an internal web app for credential management. Credentials are login details
                        (username &#38; password) and can be for a variety of places — WP sites, servers,
                        financial accounts, etc. Because of the value of the credentials to be stored in the
                        app, it is of utmost importance that the app is authenticated airtight
                    </p>
                    <p>
                        Your web app should have user login and registration, different user roles, and
                        different resource access for each user. Use the following five
                        organisational units (OU):
                        <ul>
                            <li>New Management</li>
                            <li>Software Reveiews</li>
                            <li>Hardware reviews</li>
                            <li>Opinion Publishing</li>
                        </ul>
                    </p>
                    <p>
                        Each of these OUs have multiple divisions within them. Divisions take care of
                        subtasks like finances, IT, writing, development, and so on. Each division has its
                        own credential repository which contains a list of login details for various places. All
                        employees of the division should have access to it.<br/>

                        Most employees are only part of one OU and one division with it, but there are
                        some that are part of more than one OU and division. Furthermore, there should
                        be different user roles for the employees.
                        <ul>
                            <li>Normal users can read the credential repository, and add new credentials in.</li>
                            <li>Management users can do the above plus update credentials</li>
                            <li>
                                Admin users can do the above plus they can assign and unassign users
                                from divisions and OUs. They can also change the user role of any user.
                            </li>
                        </ul>
                    </p>
                </div>

                <a href="#">Project Github link</a> <br/>
                My profile: <a href="#">Simphiwe Nkabinde</a>
            </div>
        </div>
    )
}

export default AboutPage