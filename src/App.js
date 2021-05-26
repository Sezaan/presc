import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ForgotPassworkPage from './pages/ForgotPassworkPage'
import PasswordResetPage from './pages/PasswordResetPage'
import Prescription from './pages/Prescription'

function App() {
  return (
    <Router>
      <div >
        <Switch>
          <Route exact path='/' component={Prescription}></Route>
          <Route exact path='/login' component={LoginPage}></Route>
          <Route exact path='/signup' component={SignupPage}></Route>
          <Route exact path='/forgotpass' component={ForgotPassworkPage}></Route>
          <Route exact path='/resetpass' component={PasswordResetPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
