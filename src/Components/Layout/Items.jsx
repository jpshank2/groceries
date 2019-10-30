import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export class Items extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }
    render() {
        const {key, title, completed, editing} = this.props.item
        if (!editing) {
            return (
                <div className="item-box">
                    <input
                        type="checkbox"
                        style={{display: "inline"}}
                        onChange={this.props.markComplete.bind(this, key)}/>
                    <p style={{display: "inline", padding: 5, textDecoration: completed ? "line-through" : "none"}} onClick={this.props.edit.bind(this, key)}>
                        {title}
                    </p>
                    <button
                        style={{display: "inline"}}
                        onClick={this.props.delItem.bind(this, key)}>
                            <FontAwesomeIcon icon={faTrash} /></button>
                </div>
            )
        } else {
            return (
                <div className="item-box">
                    <input
                        type="checkbox"
                        style={{display: "inline"}}
                        onChange={this.props.markComplete.bind(this, key)}/>
                    <input style={{display: "inline"}} type="text" onChange={(e) => {this.setState({title: e.target.value})}} />
                    <button 
                        onClick={this.props.changing.bind(this, this.state.title)}
                        style={{display: "inline"}}>Change Item</button>
                </div>
            )
        }
    }
}