import React, { Component } from "react"

export class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.item(this.state.title);
        this.setState({title: ""});
        e.target.reset()
    }

    onChange = (e) => {
        this.setState({title: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label className="form-padding" htmlFor="item">Item to Add:</label>
                <input 
                    type="text"
                    className="text-input" 
                    name="item" 
                    placeholder="Add Item"
                    onChange={this.onChange}/>
                <input
                    type="submit"
                    className="submit-input"
                    value="Submit"
                    aria-label="Submit"/>
            </form>
        )
    }
}