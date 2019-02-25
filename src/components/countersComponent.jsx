import React, { Component } from 'react';
import Counter from "./counterComponent";
import { error } from 'util';


class Counters extends Component {
    state = {
        counters: [
            {id: 1,value:0},
            {id: 2,value:4},
            {id: 3,value:0},
            {id: 4,value:0},
        ],
        jokes:[],
        newJoke:null
    }
    
    handleDelete = (counterId) =>{
        console.log("Event handler called",counterId);
        const counters = this.state.counters.filter(c => c.id != counterId);
        this.setState({counters})
    };

    handleIncrement =(counter)=>{
        console.log("Increment handler called",counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value++;
        this.setState({counters})
    }

    getJoke= ()=>{
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response =>response.json())
        .then(data => console.log(data.value))  
        .catch(error => console.log("error in fetach"))
    }

    render() {
        return (
            <div>
                {
                    this.state.counters.map(counter => (
                        <Counter key={counter.id} 
                        onDelete={this.handleDelete} 
                        onIncrement={this.handleIncrement} 
                        counter={counter}/>
                    ))
                }
                <button onClick={this.getJoke}>
                    Add Joke
                </button>
            </div>
        );
    }
}
 
export default Counters;