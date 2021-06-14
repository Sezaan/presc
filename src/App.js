import './App.css';
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
import ArchivePage from './pages/ArchivePage'
import PatientPage from './pages/PatientPage'
import PatientHistoryPage from './pages/PatientHistoryPage'
import EditHeader from './pages/EditHeader';
import TemplatePage from './pages/TemplatePage';
import ProfilePage from './pages/ProfilePage';



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
          <Route exact path='/archive' component={ArchivePage}></Route>
          <Route exact path='/patient' component={PatientPage}></Route>
          <Route exact path='/patienthistory' component={PatientHistoryPage}></Route>
          <Route exact path='/editheader' component={EditHeader}></Route>
          <Route exact path='/template' component={TemplatePage}></Route>
          <Route exact path='/profile' component={ProfilePage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
