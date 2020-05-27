import React from 'react'
import {RemoveProduct} from '../components/CartOptions'

export function MiniCard (props){

    return(
        <div className="card cart" style={{width:"30rem", height:"150px"}}>
        <div className="clearfix">
         <img src={require(`../assets/imgs/cards/${props.product.img}`)} alt={props.product.name} className="float-left" 
         style={{width: "150px", height: "150px"}} />

        <h4>{props.product.name}</h4>
        <p>{props.product.price}</p>
        <RemoveProduct products={props.product} loggedUser={props.user}/>
        </div>
        </div>
    )
}