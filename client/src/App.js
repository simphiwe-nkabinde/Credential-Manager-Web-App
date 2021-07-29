import './App.css';
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MainPage from './components/MainPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="bg-warning text-center py-3 shadow-sm">
        <a href="/" className="text-decoration-none">
          <h1 className="text-light">CREDMAN</h1>
          <p className="lead text-dark">
            A credential manager application for organizations
          </p>
        </a>
      </header>

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
