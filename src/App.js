import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './Styles/App.css';
import { Header } from './Components/Layout/Header';
import { AddItem } from './Components/Layout/AddItem';
import { ItemList } from './Components/Layout/ItemList'
import { About } from './Components/Pages/About';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      delItems: []
    }
  }

  addItem = (key) => {
    let titles = [];
    this.state.items.forEach((item) => {titles.push(item.key)});
    if (titles.includes(key)) {
      return alert("You already have this item on your list! Consider editing it to add quantity.");
    } else {
      let item = {key, completed: false, title: key}
      this.setState({items: [...this.state.items, item]})
    }
  }

  edit = (key) => {
    alert("good so far")
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
      <Router>
        <Header className='header'/>
        <Route exact path="/" render={() => (
          <React.Fragment>
            <AddItem items={this.addItem} />
            <ItemList items={this.state.items} markComplete={this.markComplete}
              delItem={this.delItem} edit={this.edit} />
          </React.Fragment>
        )} />
        <Route exact path="/about" render={() => (
          <About />
        )} />
      </Router>
    );
  }
}