import React, {useState,useEffect} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'

export function BuyProduct (props){
    const [finish,setFinish] = useState(false)

    const Buy = e =>{
        e.preventDefault()
        const user = props.loggedUser
        
        const product = props.product
        axios.put(`https://my-json-server.typicode.com/Robys/mltts-server/users/${user.id}`,{
            name: user.name,
                email: user.email,
                password: user.password,
                logged: true,
                cart: [...user.cart,product],
                id: user.id
        })
        setFinish(true)
    }

    return(
        <div>
        
        <Button onClick={Buy}>Buy</Button>
        {finish === true? <p>{props.product.name} added to your cart!</p>:""}
        </div>
        
    )
}

export function RemoveProduct(props){
    const [data, setData] = useState()
    const Remove = () =>{
        const validated = props.loggedUser
        const newcart = data.cart.filter(p => p.name !== props.products.name)
        axios.put(`https://my-json-server.typicode.com/Robys/mltts-server/users/${validated.id}`,{
                name: validated.name,
                email: validated.email,
                password: validated.password,
                logged: true,
                cart: newcart,
                id: validated.id
              })
    
    }

    useEffect(() => {
        async function findUser(){
            const user = props.loggedUser
            const response = await axios.get(`https://my-json-server.typicode.com/Robys/mltts-server/users/${user.id}`)
            setData(response.data)
        }
      findUser()

     }, []);


    return(
        <Button variant="danger" href="/cart"
         onClick ={Remove}>Remove</Button>
    )
}