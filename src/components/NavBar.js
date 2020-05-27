import React from 'react'
import {Navbar,InputGroup,FormControl,NavLink,Button} from 'react-bootstrap'

import axios from 'axios'

export class NavBar extends React.Component{

  constructor(props){
    super(props) 
    this.state={
     query: "",
     response:'',
     result: '',
     user:'',
 }
 this.handleSearch = this.handleSearch.bind(this)
 this.handleChange = this.handleChange.bind(this)
}

async componentWillMount (){
  let url = 'https://my-json-server.typicode.com/Robys/mltts-server/products';
  const res = await axios.get(url);
  this.setState({response:res.data})
  //console.log(this.state.response)

  const users = await axios.get('https://my-json-server.typicode.com/Robys/mltts-server/users') 
  const list = Object.values(users.data)
  this.setState({user:list.find(u => u.logged)})
}


handleChange(e){
  e.preventDefault()
  this.setState({query: e.target.value})
 
}

handleSearch = () =>{
  const res = this.state.response
  this.setState({result:res.find(p => p.name === this.state.query)})

}

  render(){

    var logged = false;
    this.state.user !== undefined ? logged = true : logged = false
  
    return(
        <Navbar sticky="top"  className="nav-bar" bg="dark" variant="dark">
        <Navbar.Brand>My Little Store</Navbar.Brand>

        <NavLink href="/" style={{color:"white"}}>Home</NavLink>
        <NavLink href="/cart" style={{color:"white"}}>Cart</NavLink>
        <NavLink href="/login" style={{color:"white"}}>Login</NavLink>
      {logged? 
        <NavLink href="/profile" style={{color:"white"}}>{this.state.user.name}</NavLink>
      : ""}  

        <InputGroup className="sm-3 search-bar" size = "sm" 
        style={{width:"400px"}}>
        <FormControl type="text"
        value={this.state.query} onChange={this.handleChange}
          placeholder="Search here..."
          aria-label="Search here..."
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={this.handleSearch}
          href={`/details/${this.state.result.id}`} >Search</Button>
        </InputGroup.Append>
      </InputGroup>

        </Navbar>
    )
  }
}