
function LandingPage() {

    return (
        <div className="my-5 pt-5">
            
            <div id="landing" className="p-5">
               <p className="lead text-center text-light">
                <strong>Welcome</strong> to the CREDMAN app. To get started accessing your organisation's credential repository,
                register as a new user. If you already have an account, you can simply login.
                </p> 
                <div className="d-flex flex-wrap justify-content-center">
                    <a href="/register" className="btn btn-warning m-2 shadow">Register</a>
                    <a href="/login" className="btn btn-success m-2 shadow">Login</a>
                </div>
                <p className="lead fs-5 text-center text-light">
                    The app implements secure user Authentication to ensure that each user is limited to accessing data 
                    that they are authorized to access. Admin users will have access to changing user permissions for any user.
                </p>
                <a href="/about" className="">Learn more</a><span> about this app</span>
            </div>

        </div>
    )  
}

export default LandingPage