import React, { Component } from 'react'



class Hello  extends Component {
   
    render() { 
        return (<div> 
                <h1> Hello {this.props.name}</h1>
                {this.props.children}
                <p> You are at {this.props.desination} position</p> 
                </div>);
    }
}
 
export default Hello;