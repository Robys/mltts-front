import React  from 'react'
import {Tabs, Tab, Card} from 'react-bootstrap'
import {BuyProduct} from '../components/CartOptions'
import {CommentArea} from '../components/CommentArea'
import {Footer} from '../components/Footer'
import axios from 'axios'


export class Details extends React.Component {

    state={
        product:'',
        spec : [],
        comments: [],
        loggedUser:''
    }

    async componentDidMount(){

        const response = await axios('https://my-json-server.typicode.com/Robys/mltts-server/products')
        const list = Object.values(response.data)
        const id = this.props.match.params.id;
        this.setState({product: list.find(p => p.id === id)})
        this.setState({spec: this.state.product.specs})
        this.setState({comments: this.state.product.comments})

        const users = await axios.get('https://my-json-server.typicode.com/Robys/mltts-server/users') 
        const dataBase = Object.values(users.data)
        this.setState({loggedUser:dataBase.find(u => u.logged)})
    }


    render(){
        const product = this.state.product
        const comments = this.state.comments
        const user = this.state.loggedUser 

        return(
            <div className="details">
            <h1>{product.name}</h1>
            
           {user !== undefined ? 
            <BuyProduct product ={product} loggedUser={user}/>:
            "you need to be logged our create a account!" }

            <Tabs defaultActiveKey="specs" className="tabs">
            <Tab eventKey="specs" title="specifications">
            <ul style={{margin:"20px"}}>
            {this.state.spec.map(spec => {
                return <li key={spec}>{spec}</li>
            })}
            </ul>
            </Tab>

            <Tab eventKey="comments"title="comments">

            {comments? 
                <div>
                {comments.map(com =>   
                <Card key={com} 
                border="light" style={{ width: '18rem', margin:"40px" }}>
                <Card.Header>{com.name}</Card.Header>
                <Card.Body>
                  <Card.Text>{com.msg}</Card.Text>
                </Card.Body>
              </Card>
                )}

                </div>: "be the first  to comment"}

            <CommentArea product={product.id}/>
            </Tab>
            </Tabs>
                <Footer/>
            </div>
        )
    }
        
}