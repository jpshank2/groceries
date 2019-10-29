import React, { Component } from "react";
import { Items } from "./Items";

export class ItemList extends Component {
    render() {
        return this.props.items.map((item) => (
            <Items key={item.key} item={item} edit={this.props.edit} markComplete={this.props.markComplete}
            delItem={this.props.delItem}/>
        ))
    }
}