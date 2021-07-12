import React from 'react'
import "./bootstrap.min.css"
import Header from "./components/Header"
import HomeScreen from './screens/HomeScreen'
import SignInScreen from './screens/SignInScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import AboutScreen from './screens/AboutScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/signin' exact component={SignInScreen} />
        <Route path='/register' exact component={RegisterScreen} />
        <Route path='/profile' exact component={ProfileScreen} />
        <Route path='/about' exact component={AboutScreen}/>
      </Switch>
    </Router>
  )
}

export default App
