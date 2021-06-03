import './App.css';
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ForgotPassworkPage from './pages/ForgotPassworkPage'
import PasswordResetPage from './pages/PasswordResetPage'
import Prescription from './pages/Prescription'
import Preview from './components/Preview';



=======
//
>>>>>>> c0bb79e17560d582a3460ef0572397a954622c7d
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
          <Route exact path='/preview' component={Preview}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
