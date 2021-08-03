import './App.css';
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MainPage from './components/MainPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {dismissAlert} from './alert'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path={["/","/login","/register"]} exact={true}>
          <header className="bg-warning text-center py-3 shadow-sm">
            <a href="/" className="text-decoration-none">
              <h1 className="text-light">CREDMAN</h1>
              <p className="lead text-dark">
                A credential manager application for organizations
              </p>
            </a>
          </header>
        </Route>
        <Route path="/organisation" exact={true}>
          <header className="bg-warning p-2 shadow-sm d-flex justify-content-between p-3 flex-wrap">
            <a href="/organisation" className="text-decoration-none fs-5 fw-bold text-secondary me-4">CREDMAN</a>
            <p className="text-end my-0">
              Logged in as {sessionStorage.user ? JSON.parse(sessionStorage.user).user + ' (' +  JSON.parse(sessionStorage.user).role + ')  ' : ''} <br/>
              <a href='/login' className="btn btn-sm btn-primary"><i className="bi bi-box-arrow-right"></i></a>
              
            </p>
          </header>
        </Route>
      </Router>

      <div className="container">
        <div className="alert alert-dismissible fade m-1" id="alert" role="alert">
          <span></span>
          <button type="button" className="btn-close" onClick={dismissAlert} aria-label="Close"></button>
        </div>        
      </div>


      <Router>
        <Route path="/" exact={true} component={LandingPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/organisation" component={MainPage}/>
      </Router>
      



    </div>
  );
}

export default App;
