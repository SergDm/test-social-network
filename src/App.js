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
import CodeJs from './components/Code/Code';
import Quiz from './components/Code/Quiz/Quiz';
import Main from './components/Main/Main';
import NewsContainer from './components/News/NewsContainer';
import Error from './components/Error404/Error404';
import ProfileContainer from './components/Profile/ProfileContainer';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))


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
        <Route exact path='/' render={() => <Main /> } />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/dialogs' render={ withSuspense(DialogsContainer) } />
        <Route path='/users/search' render={() => <UsersSearch />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/code/quiz' render={() => <Quiz />} />
        <Route path='/code' render={() => <CodeJs />} />
        <Route path='/news' render={() => <NewsContainer />} />
        <Route path='/login' render={() => <Login />} />
        <Route render={() => <Error />} />
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