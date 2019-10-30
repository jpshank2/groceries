import React, { Component } from "react";
import { AddItem } from "../Layout/AddItem";
import { ItemList } from "../Layout/ItemList";

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }
    
    addItem = (key) => {
        let titles = [];
        this.state.items.forEach((item) => {titles.push(item.key)});
        if (titles.includes(key)) {
            return alert("You already have this item on your list! Consider editing it to add quantity.");
        } else {
            let item = {key, completed: false, title: key, editing: false}
            this.setState({items: [...this.state.items, item]})
        }
    }

    edit = (key) => {
        this.setState({items: this.state.items.map((item) => {
            if(item.key === key) {
            item.editing = true;
            }
            return item;
        })})
    }

    markComplete = (key) => {
        this.setState({items: this.state.items.map(item => {
            if(item.key === key) {
            item.completed = !item.completed
            }
            return item;
        })})
    }

    delItem = (key) => {
        this.setState({items: [...this.state.items.filter(item => item.key !== key)]});
    }

    render() {
        return (
            <React.Fragment>
                <AddItem item={this.addItem} />
                <ItemList items={this.state.items} markComplete={this.markComplete}
                    delItem={this.delItem} /*edit={this.edit}*/ />
            </React.Fragment>
        )
    }
}