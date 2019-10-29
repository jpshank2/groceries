import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export class Items extends Component {
    render() {
        const {key, title, completed} = this.props.item
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
    }
}