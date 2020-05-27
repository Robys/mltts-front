import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import {NavBar} from './components/NavBar'
import {Home} from './views/Home'
import {Details} from './views/Details'
import {Profile} from './views/Profile'
import CartList from './views/CartList'
import LoginScreen from './views/LoginScreen'
import './css/style.css'

function App() {
  return (
    <div>
    <NavBar/>

    <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route path="/details/:id" component={Details}/>
    <Route path="/login" component={LoginScreen}/>
    <Route path="/cart" component={CartList}/>
    <Route path="/profile" component={Profile}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
