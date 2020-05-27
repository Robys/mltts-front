import React,{useState, useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'


export function Login (){

    const [user, setState] = useState({
        email:'',
        password: '',
      });

    const [list,setList] = useState()  

      const updateField = e =>{
        setState({
            ...user,
            [e.target.name]: e.target.value
          });
         }
         useEffect(() => {
             async function findUsers(){
                 const response = await axios.get('https://my-json-server.typicode.com/Robys/mltts-server/users')
                 setList(response.data)
             }
           findUsers()

          }, []);

    const handleSubmit = () =>{

        const validated = list.find(u => u.email === user.email)
        console.log(validated)
        if(validated.password === user.password){
            axios.put(`https://my-json-server.typicode.com/Robys/mltts-server/users/${validated.id}`,{
                name: validated.name,
                email: validated.email,
                password: validated.password,
                logged: true,
                cart: validated.cart,
                id: validated.id
              })

        }
        
        else{
            console.log('wrong password')
        }
    }


    return(
        <Form>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        name="email" onChange={updateField}/>

        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password"
        name="password" onChange={updateField}/>

        <Button onClick={handleSubmit} href='/'
        style={{marginTop:"10px"}}>Enter</Button>
        
        </Form>
    )
}

export function Register (){

    const [form, setState] = useState({
        name: '',
        email:'',
        password: '',
        logged: true
      });

    const updateField = e =>{
        setState({
            ...form,
            [e.target.name]: e.target.value
          });

        
    }

    const handleSubmit = () =>{
        axios.post('https://my-json-server.typicode.com/Robys/mltts-server/users',form)
    }



    return(
        <Form>

        <Form.Label>Name</Form.Label>
        <Form.Control 
        type="text" placeholder="Whats you're name?"
        name="name" onChange={updateField}
        />

        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" placeholder="Enter email"
        name="email" onChange={updateField}
        />

        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" placeholder="Security is very important..."
        name="password" onChange={updateField}
        />

        <Button onClick={handleSubmit} href='/'
        style={{marginTop:"10px"}}>Sing up</Button>

        </Form>
    )
}

export function Logoff (props){
    
    const handleSubmit = () =>{
        const validated = props.user
        console.log(validated)
       axios.put(`https://my-json-server.typicode.com/Robys/mltts-server/users/${validated.id}`,{
                name: validated.name,
                email: validated.email,
                password: validated.password,
                logged: false,
                cart: validated.cart,
                id: validated.id
              })

        
    }


    return(
        <Button onClick={handleSubmit} href="/"
        variant="danger">Logoff</Button>
    )
}