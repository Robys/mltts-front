import React from 'react'
import axios from 'axios'
import {ProductCard} from '../components/ProductCard'
import {Button,Jumbotron} from 'react-bootstrap'
import {Footer} from '../components/Footer'
import Background from '../assets/imgs/90header.png'

export class Home extends React.Component{

        state ={
            products:'',
            user:'',
    
        }

   async componentDidMount(){
       const response = await axios.get('https://my-json-server.typicode.com/Robys/mltts-server/products')
        this.setState({products:response.data})
       
        const users = await axios.get('https://my-json-server.typicode.com/Robys/mltts-server/users') 
        const list = Object.values(users.data)
        this.setState({user:list.find(u => u.logged)})

   }

    render(){
        const list = Object.values(this.state.products)
        var logged = false;
        this.state.user !== undefined ? logged = true : logged = false

        return(
            <div>
            
            {logged ? 
                <div style={{margin:"40px"}}>
                <Jumbotron 
                style={{backgroundImage:`url(${Background})`, color:"white"}}>
                <h1>Welcome {this.state.user.name}</h1>
                <h2>
                Enjoy the best way to go back in time</h2>
                </Jumbotron>
                </div>
            :
            <div style={{margin:"40px"}}>
            <Jumbotron 
            style={{backgroundImage:`url(${Background})`, color:"white"}}>
            <h1>Welcome</h1>
            <h2>
            The moust ambitious store in the web! since 1985</h2>

            <p> create your account
            <Button style={{marginLeft:"10px"}}
            href="/login"variant="primary">Here</Button>
            </p>

            </Jumbotron>
            </div>
           
        }

            <ul className="list">
            {list.map(p => 
                <ProductCard key={p.id} id={p.id} name={p.name} img={p.img} price={p.price} /> 
                
            )}
            </ul>
      

        <Footer/>


            </div>
        )
    }
}