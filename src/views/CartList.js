import React from 'react'
import {MiniCard} from '../utils/MiniCard'
import {Footer} from '../components/Footer'
import axios from 'axios'

export default class Cartlist extends React.Component{

    state = {
        user:'',
        products:''
    }

    async componentWillMount(){
        const users = await axios.get('https://my-json-server.typicode.com/Robys/mltts-server/users') 
        const list = Object.values(users.data)
        this.setState({user:list.find(u => u.logged)})
        if(this.state.user){
            const cart = this.state.user.cart
            this.setState({products:Object.values(cart)})
        }
        else{
            this.setState({products:[]})
        }
        
    }
    
    render(){
        const products = this.state.products
        //console.log(products.length)
        var logged = false;
        if(this.state.user !== undefined){logged = true}

        return(
            <div>
            {logged===true && products.length > 0 ?  
            <div style={{margin:"40x"}}>
            <h1 style={{margin:"40px"}}>Cart</h1>
            {Object.values(products).map(x => 
                <div style={{margin:"80px"}}>
                <MiniCard product={x} user ={this.state.user}/>
                
                </div>
            )}
            </div> : <h1>You need to log, or your cart is empty</h1> }
            
           <Footer/>
            </div>
        )
    }
}