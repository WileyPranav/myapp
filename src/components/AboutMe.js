
import React, { Component } from 'react'

class AboutMe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hobby: "",
            job: "Marketing",
            count: 1,
            check_Hobby: false,
            check_Job: false
        }
    }
    changeHobby() {
        this.setState({
            hobby: " Chess",
            check_Hobby: true
        })
    }
    changeJob() {
        this.setState({
            job: "Sales",
            check_Job: true
        })
    }
    incrementCount() {
        this.setState({
            count: this.state.count + 1
        }, () => console.log('After Incerement ', this.state.count)
        )

        console.log(this.state.count)
    }
    render() {
        return (<div className="aboutme">
                    {this.state.check_Hobby && <h1> The Hobby is {this.state.hobby}  & </h1>}
                    {this.state.check_Job && <h1> My Job is {this.state.job} & </h1>}
                    <h1>The Count is {this.state.count}</h1>
                    <button onClick={() => this.changeHobby()}> Change Hobby </button>
                    <button onClick={() => this.changeJob()}> Change Job </button>
                    <button onClick={() => this.incrementCount()}> Increment Count </button>
             </div>);


        // let message=""
        // if (this.state.check_Hobby) {
        //     message = <div className="aboutme">
        //     <h1> The Hobby is {this.state.hobby}  & my Job is {this.state.job} & the Count is {this.state.count}</h1>
        //     <button onClick={() => this.changeHobby()}> Change Hobby </button>
        //     <button onClick={() => this.changeJob()}> Change Job </button>
        //     <button onClick={() => this.incrementCount()}> Increment Count </button>
        // </div>

        // } else {
        //     message = <div className="aboutme">
        //         <h1> My Job is {this.state.job} & the Count is {this.state.count}</h1>
        //         <button onClick={() => this.changeHobby()}> Change Hobby </button>
        //         <button onClick={() => this.changeJob()}> Change Job </button>
        //         <button onClick={() => this.incrementCount()}> Increment Count </button>
        //     </div>
        // }

        // return message
        // if (this.state.check_Hobby) {
        //     return (<div className="aboutme">
        //         <h1> The Hobby is {this.state.hobby}  & my Job is {this.state.job} & the Count is {this.state.count}</h1>
        //         <button onClick={() => this.changeHobby()}> Change Hobby </button>
        //         <button onClick={() => this.changeJob()}> Change Job </button>
        //         <button onClick={() => this.incrementCount()}> Increment Count </button>
        //     </div>);
        // } else {
        //     return (<div className="aboutme">
        //         <h1> My Job is {this.state.job} & the Count is {this.state.count}</h1>
        //         <button onClick={() => this.changeHobby()}> Change Hobby </button>
        //         <button onClick={() => this.changeJob()}> Change Job </button>
        //         <button onClick={() => this.incrementCount()}> Increment Count </button>
        //     </div>

        //     );
        // }
        //     return (<div className="aboutme">
        //         <h1> The Hobby is {this.state.hobby}  & my Job is {this.state.job} & the Count is {this.state.count}</h1>
        //         <button onClick={() => this.changeHobby()}> Change Hobby </button>
        //         <button onClick={() => this.changeJob()}> Change Job </button>
        //         <button onClick={() => this.incrementCount()}> Increment Count </button>
        //     </div>

        //    );
    }
}

export default AboutMe;