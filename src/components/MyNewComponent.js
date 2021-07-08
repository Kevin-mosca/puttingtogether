import React, { Component } from 'react';

class MyNewComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    Birthday = () => {
        this.setState({ age: this.state.age+1})
    }
    render(){
        const {firstName, lastName, age, color} = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {color}</p>
                <button onClick={ this.Birthday } >Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}
export default MyNewComponent;