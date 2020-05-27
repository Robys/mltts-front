import React from 'react'
import {Button} from 'react-bootstrap'
import Background from '../assets/imgs/90header.png'

export function Footer (){

    const bg = {
    marginTop:"240px",
    width: "100%",
    height:"100px",
    objectFit: "cover",
    overflow: 'hidden',
    }

    return(
        <footer>
        <img src={Background} style={bg} 
        alt='footer'/>
        <div className="ft">

        <div className="fbox">
        <h3>My Little Store</h3>
        <h4>Uberlândia,Minas Gerais,Brazil</h4>
        <p>create your account <Button href="/login">Here</Button> </p>
        </div>

        <div className="fbox">
        <h3>Contacts</h3>
        <h5>Phone: +55 (34) 1234-5678</h5>
        <h5>Email: robert.oliveira.f@gmail.com</h5>
        <p>This is a educational project, no real products is for sell</p>
        </div>

        <div className="fbox">
        <h3>Links</h3>
        <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/cart">Cart</a></li>
        </ul>
        </div>

        </div>
        </footer>
    )
}