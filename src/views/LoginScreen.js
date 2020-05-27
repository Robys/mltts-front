import React from 'react'
import {Login,Register} from '../components/LoginComponent'
import {Tabs, Tab} from 'react-bootstrap'
import {Footer} from '../components/Footer'
import {Fade} from 'react-reveal'

export default class LoginScreen extends React.Component{
    render(){
        return(
            <div>
            <div className="container login-tab">
        <Fade>
            <Tabs defaultActiveKey="register">
            <Tab eventKey="register" title="Register">
            <Register/>
            </Tab>

            <Tab eventKey="login"title="Login">
           <Login/>
            </Tab>
            </Tabs>
        </Fade>
            </div>

            <Footer/>
        
            </div>
        )
    }
}