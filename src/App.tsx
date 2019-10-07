import React from 'react';
import { Route, Router } from "react-router-dom";
import Register from './components/Pages/user/Register';
import Login from './components/Pages/user/Login';
import Home from './components/Pages/Home';
import { PrivateRoute } from './components/PrivateRoute';
import SecretSite from './components/Pages/SecretSite';
import { history } from "./components/history"
import { authStore } from './stores/AuthStore';
import { observer } from 'mobx-react';
import Auth from './components/Pages/Auth';
import Navbar from './components/ui/Navbar';
import TwoFactorAuthorization from './components/Pages/TwoFactorAuthorization';
import 'antd/dist/antd.css';
import { height } from '@material-ui/system';

@observer
class App extends React.Component {
  render() {
    if (!authStore.rehydrated) {
      return null;
    }

    return (
      <Router history={history}>
        <Navbar />
        <div style={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>

          <Route exact path="/" component={Home} />
          <PrivateRoute path="/user/auth" component={Auth} />
          <Route exact path="/user/register" component={Register} />
          <Route exact path="/user/login" component={Login} />
          <PrivateRoute path="/user/login/auth" component={TwoFactorAuthorization} />
          <PrivateRoute path="/s" component={SecretSite} />

        </div>
        <div style={{
          display: 'flex',
          flexGrow: 0
        }}>
          {/* TODO: Footer */}
        </div>


      </Router>
    );
  }
}

export default App;
