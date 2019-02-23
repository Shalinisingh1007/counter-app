import React, { Component } from 'react';

class Counter extends Component {
    /*constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/
    state = {
        value: this.props.counter.value,
        tags: ['tag1','tag2','tag3']
    };
    styles = {
        fontSize: 15,
        fontWeight: "bold",
    };

    handleIncrement= () =>{
        console.log("Increment clicked");
        this.setState({value: this.state.value+1});
    };

    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.id}
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement()} className="btn btn-seconday btn-sm">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.rendertags()}
            </div>
        );
    }

    rendertags() {
        if(this.state.tags.length===0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    getBadgeClasses() {
        let classes = "badges m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;