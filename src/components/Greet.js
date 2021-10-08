import React from 'react';

// function Greet(){

//     return React.createElement('div',
//                                 {id:'greet',className:'hello'},
//                                 React.createElement('h1',
//                                                      null,
//                                                     'Hello World !!!!!'),
//                                 React.createElement('p',
//                                                     null,
//                                                     'This is the second line' ))
// }

 const Greet = (props)=> {

    return <div>
            <h1> Greetings {props.name} !!!</h1>
            {props.children}
            <h2> Your Desig. is {props.desination}</h2>
            <h2> How was your day today?</h2> 
            </div>
}

export default Greet;