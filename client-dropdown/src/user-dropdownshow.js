import React from 'react'
import axios from 'axios'

import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class UserdropdownShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:{},
            user:props.user
        }
    }

   static getDerivedStateFromProps(props,state){ //static functional
        if(props.user!==state.user){
           return {user:props.user} //returns an object
        }else{
            return null
        }
    }

    componentDidMount(){
        axios.get(`http://jsonplaceholder.typicode.com/users/${this.state.user}`)
        .then(response=>{
            this.setState(()=>({
                user:response.data
            }))
        })
    }
    
    componentDidUpdate(){
        if(this.state.user)
        axios.get(`http://jsonplaceholder.typicode.com/users/${this.state.user}`)
        .then(response=>{
            this.setState(()=>({
                result:response.data
            }))
        })
    }
    render(){
        return(
            <div>
                <Card>
                    <CardBody>
                        <CardTitle></CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText>username:{this.state.result.username}<br/>
                       email: {this.state.result.email}
                        </CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default UserdropdownShow