import React from 'react'
import {Button,Card} from 'react-bootstrap'

export function ProductCard (props){
    
    
    return(
        <Card style={{ width: '18rem' }} className="product-card" >
        <Card.Img variant="top" src={require(`../assets/imgs/cards/${props.img}`)} />
        
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>{props.price}</Card.Subtitle>
        <Button href={`/details/${props.id}`}> See More </Button>
        
        </Card.Body>
        
        </Card>
    )
}