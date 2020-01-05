import React from 'react';
import { Header } from './components/header';
import { Switch,Route, BrowserRouter as Router } from 'react-router-dom';
import { Login } from './container/auth/login/login';
import { Register }  from './container/auth/register/register';
import { Dashboard } from './container/dashboard/dashboard';
import { AuthenticationRoute } from './components/authenticationRoute';
import { NoMatch } from './container/404/noMatch';

function App() {
  return (
   <> 
    <Header/>
     <div className="container-fluid"> 
      <div className="row">
       <Router>
         <Switch>
          <AuthenticationRoute   path="/dashboard" component={Dashboard}/>
           <Route path="/login" component={Login} />
           <Route path="/register" component={Register} />
           <Route path="*" component={NoMatch}/>
        </Switch>
        </Router>
     </div>
   </div>
   </>
  );
}

export default App;
