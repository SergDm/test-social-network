import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, BrowserRouter, Switch } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './data/appReducer';
import Preloader from './components/commonn/loader/Preloader';
import Login from './components/Login/Login';
import store from './data/reduxStore';
import { withSuspense } from './hoc/withSuspense';
import UsersSearch from './components/Users/UsersSearch';
import News from './components/News/News';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))


class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    return !this.props.initialized
      ? <Preloader />
      : (<div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <Switch>
        <Route exact path='/' render={() => <div><h1>Social network SH</h1></div> } />
        <Route path='/profile/:userId?' render={ withSuspense(ProfileContainer) } />
        <Route path='/dialogs' render={ withSuspense(DialogsContainer) } />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/userssearch' render={() => <UsersSearch />} />
        <Route path='/login' render={() => <Login />} />
        </Switch>
        <Footer />
      </div>
      )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const JsApp = (props) => {
  return <BrowserRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default JsApp;