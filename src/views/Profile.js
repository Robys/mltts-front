import React from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'
import {Footer} from '../components/Footer'
import {Logoff} from '../components/LoginComponent'
export class Profile extends React.Component{

    state ={
        user:'',
    }

    async componentDidMount(){
  
         const users = await axios.get('https://my-json-server.typicode.com/Robys/mltts-server/users') 
         const list = Object.values(users.data)
         this.setState({user:list.find(u => u.logged)})
 
    }

    render(){
    const user = this.state.user

    return(
        <div>
        <Card bg="dark" text="light" 
        style={{width:"800px",marginLeft:"220px",marginTop:"40px" }}>
        <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle>{user.email}</Card.Subtitle>
        <Card.Text> active </Card.Text>
        <Logoff user={user} />
        </Card.Body>
        </Card>

        <Footer/>
        </div>
    )
    }
}