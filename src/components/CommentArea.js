import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Form,Button} from 'react-bootstrap'

export function CommentArea (product){
    const [user,setUser] = useState() // logged user
    const[msg, setMessage] = useState()

    useEffect(() => {
        async function findUser(){
            const response = await axios.get('https://my-json-server.typicode.com/Robys/mltts-server/users')
            const data = response.data
            setUser(data.find(u => u.logged === true))

        } 

      findUser() 

     }, []);

     const SendComment = () =>{
        
         FindProduct()

     }

     const FindProduct = async () => {

        var name = user.name
        const newComment = { name , msg }
        const res = await axios.get(`https://my-json-server.typicode.com/Robys/mltts-server/products/${product.product}`)
        const item = res.data
        axios.put(`https://my-json-server.typicode.com/Robys/mltts-server/products/${product.product}`,{
            id: item.id,
            name: item.name,
            price: item.price,
            img: item.img,
            specs: item.specs,
            comments: [...item.comments,newComment]
        })
     }


     return(
         <div>
         
       
         
         <div>
         {user ? <div> 
            <Form style={{
                width:"400px",
                margin:"40px"
            }}>
            <Form.Label>{user.name}</Form.Label>
            <Form.Control onChange={e => setMessage(e.target.value)}
            as="textarea" rows="3" placeholder="comment here!" />

            <Button onClick={SendComment}
            style={{marginTop:"10px"}}>Send</Button>
            </Form>
                </div>: 'you need to be logged to comment'}
         </div>

         </div>
     )

}